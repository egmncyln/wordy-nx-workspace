import React from 'react';

import styles from './Anchor.module.scss';
import cn from 'classnames';

function Anchor(props) {
  const clickHandler = (e) => {
    e.preventDefault();
    if (typeof props.onClick === 'function') {
      props.onClick(e);
    }
  };

  return (
    <a
      {...props}
      href="anchor"
      className={cn(styles.anchor, props.className)}
      onClick={clickHandler}
    >
      {props.children}
    </a>
  );
}

export default Anchor;
