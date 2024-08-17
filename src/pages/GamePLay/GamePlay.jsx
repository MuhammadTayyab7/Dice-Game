import { useState } from "react";
import styles from "./Styles.module.css";
import { TotalScore } from "../../components/GamePlay/TotalScore";
import { NumberSelector } from "../../components/GamePlay/NumberSelector";
import { RoleDice } from "../../components/RoleDice/RoleDice";
import { Button } from "../../components/Button/Button";
import { Rules } from "../../components/Rules/Rules";

export const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [number, setNumber] = useState(null);
  const [score, setScore] = useState("0");
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState();

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!number) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    const check = number === randomNumber;
    check ? setScore((prev) => prev + number) : setScore((prev) => prev - 2);

    setNumber(undefined);
  };

  const toggleRules = () => {
    setShowRules((prev) => !prev);
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          number={number}
          setNumber={setNumber}
          error={error}
        />
      </div>
      <RoleDice
        CurrentDice={currentDice}
        setCurrentDice={setCurrentDice}
        roleDice={roleDice}
      />
      <div className={styles.Button}>
        <Button toggle={resetScore} text={"Reset Score"} />
        <Button
          toggle={toggleRules}
          text={showRules ? "Hide Rules" : "Show Rules"}
        />
      </div>
      {showRules && <Rules />}
    </main>
  );
};
