import React from 'react';
import MenuItem from '../components/MenuItem';
import { MenuItemProps } from '../types';

interface MenuProps {
  onShowSettings: () => void;
  onShowAppearance: () => void;
  onResetRequest: () => void;
}

const Menu: React.FC<MenuProps> = ({ onShowSettings, onShowAppearance, onResetRequest }) => {
  const menuItems: MenuItemProps[] = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: 'Breathing Techniques',
      description: 'Choose your preferred exercise.',
      onClick: onShowSettings,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-5.304-5.304L4.098 14.6c-1.451 1.451-1.451 3.853 0 5.304zm12.12-1.212a.75.75 0 001.06-1.06l-3-3a.75.75 0 00-1.06 1.06l3 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25c-1.24 0-2.444.52-3.32 1.397L14.44 8.4a.75.75 0 001.06 1.06l1.737-1.737c.877-.877 2.08-1.397 3.32-1.397m0 0c1.24 0 2.444.52 3.32 1.397m-3.32-1.397c-.62.001-1.234.26-1.66.702" /></svg>,
      title: 'Appearance',
      description: 'Change the theme and colors.',
      onClick: onShowAppearance,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691L7.985 5.944M18.384 5.944l-3.182 3.182" /></svg>,
      title: 'Reset Chat',
      description: 'Start a new conversation with Yume.',
      onClick: onResetRequest,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'Session History',
      description: 'View your past sessions.',
      disabled: true,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>,
      title: 'About Yume',
      description: 'Learn more about the app.',
      disabled: true,
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
       <h1 className="text-3xl font-bold text-center mb-8 text-[rgb(var(--color-primary-light))]">
        Menu
      </h1>
      <div className="space-y-3">
        {menuItems.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
