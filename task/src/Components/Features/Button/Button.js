import styles from './Button.module.scss';

const Button = () => {
  return (
    <div>
      <button className={styles.button}>
        Export to PNG
      </button>
    </div>
  );
}

export default Button;