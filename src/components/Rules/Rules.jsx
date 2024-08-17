import styles from "./Styles.module.css";

export const Rules = () => {
  return (
    <div className={styles.rules}>
      <h2>How to play dice game</h2>
      <div className={styles.text}>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </div>
  );
};
