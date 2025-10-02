import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import YumeAvatar from '../components/YumeAvatar';

interface HomeProps {
  chatHistory: ChatMessage[];
  isAiTyping: boolean;
  onSendMessage: (message: string) => void;
}

const ChatBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const isUser = message.role === 'user';
  return (
    <div className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8">
          <YumeAvatar size={32} />
        </div>
      )}
      <div
        className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
          isUser
            ? 'bg-[rgb(var(--color-primary-dark))] rounded-br-none'
            : 'bg-[rgb(var(--color-bg-offset))] rounded-bl-none'
        }`}
      >
        <p className="text-white whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
};

const Home: React.FC<HomeProps> = ({ chatHistory, isAiTyping, onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isAiTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(inputValue);
    setInputValue('');
  };

  return (
    <div className="flex flex-col h-full w-full max-w-2xl mx-auto">
      <div className="flex-grow overflow-y-auto pr-2 space-y-4">
        {chatHistory.map((msg, index) => (
          <ChatBubble key={index} message={msg} />
        ))}
        {isAiTyping && (
          <div className="flex items-end gap-2 justify-start">
             <div className="w-8 h-8">
                <YumeAvatar size={32} />
            </div>
            <div className="px-4 py-3 rounded-2xl bg-[rgb(var(--color-bg-offset))] rounded-bl-none">
                <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-0"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-300"></span>
                </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex items-center mt-4 gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Talk to Yume..."
          className="flex-grow p-3 bg-[rgb(var(--color-bg-offset))] rounded-xl border-2 border-[rgb(var(--color-border))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-[rgb(var(--color-primary))] transition"
          aria-label="Chat input"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isAiTyping}
          className="p-3 bg-[rgb(var(--color-primary-dark))] rounded-xl disabled:bg-[rgb(var(--color-border))] disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[rgb(var(--color-primary-light))] focus:ring-opacity-50"
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Home;
