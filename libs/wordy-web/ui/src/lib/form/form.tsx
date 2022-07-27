import styles from './form.module.scss';
import cn from 'classnames';

import { BaseSyntheticEvent, forwardRef, ReactNode, Ref } from 'react';

/* eslint-disable-next-line */
export interface FormProps {
  className?: string;
  children: ReactNode;
  onSubmit: (e: BaseSyntheticEvent) => void;
}

export const Form = forwardRef(
  (props: FormProps, ref: Ref<HTMLFormElement>) => {
    const submitHandler = (e: BaseSyntheticEvent) => {
      e.preventDefault();

      if (e.target.elements && e.target.elements.length > 0) {
        type FormElements = { name: string; validity: { valid: boolean } };
        const isFormValid = Array.from<FormElements>(e.target.elements)
          .filter((e) => e.name)
          .every((e) => e.validity.valid);

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
        className={cn(styles['form'], props.className)}
        onSubmit={submitHandler}
        noValidate
      >
        {props.children}
      </form>
    );
  }
);

Form.displayName = 'Form';

export default Form;
