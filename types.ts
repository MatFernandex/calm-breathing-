export enum BreathingPhase {
  INHALE = 'Inhale',
  HOLD = 'Hold',
  EXHALE = 'Exhale',
  HOLD_AFTER_EXHALE = 'Hold',
  READY = 'Ready to Begin',
}

export type BreathingTechniqueKey = 'CALM_478' | 'BOX_4444';

export interface BreathingTechnique {
  name: string;
  description: string;
  cycle: { phase: BreathingPhase; duration: number }[];
}

export type MainView = 'home' | 'breathing' | 'grounding' | 'menu';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GroundingStepContent {
    sense: string;
    count: number;
    prompt: string;
    placeholder: string;
    icon: React.ReactElement;
}

export interface MenuItemProps {
  icon: React.ReactElement;
  title: string;
  description?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export type ThemeKey = 'DEFAULT_PURPLE' | 'FOREST_GREEN' | 'OCEAN_BLUE';

export interface Theme {
    name: string;
    colors: {
        '--color-primary': string;
        '--color-primary-light': string;
        '--color-primary-dark': string;
        '--color-secondary': string;
        '--color-text': string;
        '--color-text-muted': string;
        '--color-bg': string;
        '--color-bg-offset': string;
        '--color-bg-transparent': string;
        '--color-border': string;
        '--color-danger': string;
        '--color-success': string;
    };
}

export type ActiveOverlay = 'settings' | 'appearance' | null;
