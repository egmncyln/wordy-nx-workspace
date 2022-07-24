import styles from './input.module.scss';

/* eslint-disable-next-line */
export interface InputProps {
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  label?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  type: 'email' | 'text' | 'password';
}

export function Input(props: InputProps) {
  return (
    <div className={props.className}>
      {props.label && (
        <label htmlFor={props.id} className={styles['label']}>
          {props.label}
        </label>
      )}
      <input {...props} className={styles['input']} autoComplete="off" />
    </div>
  );
}

export default Input;
