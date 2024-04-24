import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => (
  <button
    className={`rounded-md active:scale-95 inline-flex gap-2 items-center justify-center bg-indigo-500 text-slate-50 font-semibold ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
