import React, { useState, useRef, useEffect } from 'react';
import Breathing from './views/Breathing';
import Settings from './views/Settings';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import Home from './views/Home';
import Grounding from './views/Grounding';
import Menu from './views/Menu';
import ConfirmationDialog from './components/ConfirmationDialog';
import Appearance from './views/Appearance';
import { BreathingTechniqueKey, MainView, ChatMessage, ActiveOverlay, ThemeKey } from './types';
import { GoogleGenAI, Chat } from '@google/genai';
import { SYSTEM_INSTRUCTION } from './constants';
import { THEMES } from './themes';


const App: React.FC = () => {
  const [mainView, setMainView] = useState<MainView>('breathing');
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay>(null);
  const [isActive, setIsActive] = useState(false);
  const [technique, setTechnique] =
    useState<BreathingTechniqueKey>('CALM_478');
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);
  const [theme, setTheme] = useState<ThemeKey>('DEFAULT_PURPLE');

  // Chat state
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const chatRef = useRef<Chat | null>(null);

  // Load theme on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('yume-theme') as ThemeKey;
    if (savedTheme && THEMES[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);
  
  // Apply theme and save to localStorage whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    const themeColors = THEMES[theme].colors;

    for (const [key, value] of Object.entries(themeColors)) {
      root.style.setProperty(key, value);
    }
    
    localStorage.setItem('yume-theme', theme);
  }, [theme]);

  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      chatRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      // Initial message from Yume
      setChatHistory([
        { role: 'model', text: 'Hello! I am Yume. How are you feeling today?' },
      ]);
    } catch (error) {
      console.error("Failed to initialize AI Chat:", error);
      setChatHistory([
        { role: 'model', text: 'Sorry, I am having trouble connecting right now.' },
      ]);
    }
  }, []);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || !chatRef.current) return;

    const userMessage: ChatMessage = { role: 'user', text: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setIsAiTyping(true);

    try {
      const response = await chatRef.current.sendMessage({ message });
      const modelMessage: ChatMessage = { role: 'model', text: response.text };
      setChatHistory((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Gemini API error:", error);
      const errorMessage: ChatMessage = { role: 'model', text: "I'm sorry, I encountered an error. Please try again." };
      setChatHistory((prev) => [...prev, errorMessage]);
    } finally {
      setIsAiTyping(false);
    }
  };
  
  const handleResetChat = () => {
    setChatHistory([
      { role: 'model', text: 'Hello! I am Yume. How are you feeling today?' },
    ]);
    setShowResetConfirmation(false);
  };


  const handleToggleActive = () => {
    setIsActive((prev) => !prev);
  };

  const renderMainView = () => {
    switch (mainView) {
      case 'home':
        return (
          <Home
            chatHistory={chatHistory}
            isAiTyping={isAiTyping}
            onSendMessage={handleSendMessage}
          />
        );
      case 'breathing':
        return (
          <Breathing
            isActive={isActive}
            onToggle={handleToggleActive}
            techniqueKey={technique}
          />
        );
      case 'grounding':
        return <Grounding />;
      case 'menu':
        return <Menu 
          onShowSettings={() => setActiveOverlay('settings')}
          onShowAppearance={() => setActiveOverlay('appearance')}
          onResetRequest={() => setShowResetConfirmation(true)}
        />;
      default:
        return null;
    }
  };

  const renderOverlay = () => {
    if (!activeOverlay) return null;
    
    const content = () => {
        switch (activeOverlay) {
            case 'settings':
                return <Settings selectedTechnique={technique} onSelectTechnique={setTechnique} />;
            case 'appearance':
                return <Appearance currentTheme={theme} onSelectTheme={setTheme} />;
            default:
                return null;
        }
    };
    
    return (
        <div className="absolute inset-0 bg-[rgb(var(--color-bg))] z-10">
            {content()}
        </div>
    );
  };


  return (
    <div className="flex flex-col h-screen w-full bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] font-sans overflow-hidden">
      <Header 
        showBackButton={!!activeOverlay}
        onSettingsClick={() => setMainView('menu')}
        onBackClick={() => setActiveOverlay(null)}
      />
      
      <main className="flex-grow flex flex-col items-center justify-center w-full p-4 pt-20 pb-20">
         {renderMainView()}
      </main>

      {!activeOverlay && <BottomNav currentView={mainView} setView={setMainView} />}
      
      {renderOverlay()}

      <ConfirmationDialog 
        isVisible={showResetConfirmation}
        message="Are you sure you want to delete your conversation with Yume? This action cannot be undone."
        confirmText="Reset"
        onConfirm={handleResetChat}
        onCancel={() => setShowResetConfirmation(false)}
      />
    </div>
  );
};

export default App;
