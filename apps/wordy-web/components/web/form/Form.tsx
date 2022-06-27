import React, { forwardRef } from 'react';

import styles from './Form.module.scss';
import cn from 'classnames';

const Form = forwardRef((props: any, ref) => {
  const submitHandler = (e) => {
    e.preventDefault();

    if (e.target.elements && e.target.elements.length > 0) {
      const isFormValid = Array.from(e.target.elements)
        .filter((e) => e['name'])
        .every((e) => e['validity']['valid']);

      if (isFormValid && typeof props.onSubmit === 'function') {
        props.onSubmit(e);
      }
    }
  };

  return (
    <form
      {...props}
      ref={ref}
      autoComplete="off"
      className={cn(styles.form, props.className)}
      onSubmit={submitHandler}
      noValidate
    >
      {props.children}
    </form>
  );
});

Form.displayName = 'Form';

export default Form;
