import styles from "./Styles.module.css";

export const Button = ({ toggle, text }) => {
  return (
    <div className={styles.Button}>
      <button onClick={toggle}>{text}</button>
    </div>
  );
};
