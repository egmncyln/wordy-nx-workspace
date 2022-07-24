import styles from './anchor.module.scss';
import cn from 'classnames';

import { MouseEvent, ReactNode } from 'react';

/* eslint-disable-next-line */
export interface AnchorProps {
  className?: string;
  children: ReactNode;
  onClick: (e: MouseEvent) => void;
}

export function Anchor(props: AnchorProps) {
  const clickHandler = (e: MouseEvent) => {
    e.preventDefault();
    if (typeof props.onClick === 'function') {
      props.onClick(e);
    }
  };

  return (
    <a
      {...props}
      href="anchor"
      className={cn(styles['anchor'], props.className)}
      onClick={clickHandler}
    >
      {props.children}
    </a>
  );
}

export default Anchor;
