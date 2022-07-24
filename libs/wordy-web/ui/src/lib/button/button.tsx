import cn from 'classnames';
import styles from './button.module.scss';

import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {
  color: string;
  className?: string;
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
}

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={cn(styles[props.color], props.className)}>
      {props.children}
    </button>
  );
}

export default Button;
