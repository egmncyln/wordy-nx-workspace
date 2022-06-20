import React from 'react';

import styles from './Button.module.scss';
import cn from 'classnames';

function Button(props) {
  return (
    <button {...props} className={cn(styles[props.color], props.className)}>
      {props.children}
    </button>
  );
}

export default Button;
