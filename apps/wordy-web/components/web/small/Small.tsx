import React from 'react';

import styles from './Small.module.scss';
import cn from 'classnames';

function Small(props) {
  return (
    <small {...props} className={cn(styles.small, props.className)}>
      {props.children}
    </small>
  );
}

export default Small;
