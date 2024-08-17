import styles from "./Styles.module.css";

export const RoleDice = ({ CurrentDice, setCurrentDice, roleDice }) => {
  return (
    <div className={styles.container}>
      <div className={styles.dice} onClick={roleDice}>
        <img src={`/Images/Dice/dice_${CurrentDice}.png`} alt="Dice Image" />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};
