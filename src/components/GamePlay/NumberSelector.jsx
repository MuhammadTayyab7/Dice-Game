import styles from "./Styles.module.css";

export const NumberSelector = ({ setError, error, number, setNumber }) => {
  const array = [1, 2, 3, 4, 5, 6];

  const numberSelectedHandler = (value) => {
    setNumber(value);
    setError("");
  };

  return (
    <div className={styles.NumberContainer}>
      <p style={{ color: "red" }}>{error}</p>
      <div className={styles.NumbersBox}>
        {array.map((value, index) => (
          <div
            className={
              value === number ? `${styles.Box} ${styles.Selected}` : styles.Box
            }
            key={index}
            onClick={() => numberSelectedHandler(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <p>Select Number</p>
    </div>
  );
};
