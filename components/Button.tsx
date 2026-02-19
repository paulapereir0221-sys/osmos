import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "border-transparent text-brand-black bg-brand-accent hover:bg-brand-accentHover font-bold shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:-translate-y-0.5",
    secondary: "border-transparent text-brand-accent bg-brand-dark hover:bg-slate-800 hover:-translate-y-0.5",
    outline: "border-brand-accent text-brand-accent bg-transparent hover:bg-brand-accent/10 hover:-translate-y-0.5"
  };

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};