import React, { forwardRef } from 'react';

import styles from './Form.module.scss';
import cn from 'classnames';

const Form = forwardRef((props: any, ref) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (typeof props.onSubmit === 'function') {
      props.onSubmit(e);
    }
  };

  return (
    <form
      {...props}
      ref={ref}
      autoComplete="off"
      className={cn(styles.form, props.className)}
      onSubmit={submitHandler}
    >
      {props.children}
    </form>
  );
});

Form.displayName = 'Form';

export default Form;
