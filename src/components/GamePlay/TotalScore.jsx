import styles from "./Styles.module.css";

export const TotalScore = ({ score }) => {
  return (
    <div className={styles.ScoreBox}>
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
  );
};
