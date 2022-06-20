import React from 'react';

import styles from './Input.module.scss';

function Input(props) {
  return (
    <div className={props.className}>
      {props.label && (
        <label htmlFor={props.id} className={styles.label}>
          {props.label}
        </label>
      )}
      <input {...props} className={styles.input} />
    </div>
  );
}

export default Input;
