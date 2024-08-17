import styles from "./Styles.module.css";

export const StartGame = ({ toggle }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src="./Images/Dice_Game.png" alt="img" />
      </div>
      <div className={styles.content}>
        <h1>Dice Game</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  );
};
