import { ReactNode } from 'react';

import styles from './small.module.scss';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface SmallProps {
  className: string;
  children: ReactNode;
}

export function Small(props: SmallProps) {
  return (
    <small {...props} className={cn(styles['small'], props.className)}>
      {props.children}
    </small>
  );
}

export default Small;
