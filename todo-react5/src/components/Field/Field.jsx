import styles from './Field.module.scss';

const Field = (props) => {
  const {
    className = '',
    id ='',
    label = '',
    type = 'text',
    onInput,
    value,
    ref,
    error
  } = props;
  return (
    <div className={`${styles.field} ${className}`}>
      <label
        className={styles.field__label}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`${styles.field__input} ${error ? styles['is-invalid'] : ''}`}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
        value={value}
        ref={ref}
      />
      {error && <span className={styles.field__error} title={error}>
        {error}
      </span>}
    </div>
  );
};

export default Field;