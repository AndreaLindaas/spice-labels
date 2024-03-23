"use client";
import { useState } from "react";
import SpiceLabel from "./_components/SpiceLabel/SpiceLabel";
import styles from "./Home.module.scss";
export default function Home() {
  const [numberOfLabels, setNumberOfLabels] = useState(1);
  const [confirmedNumberOfLabels, setConfirmedNumberOfLabels] = useState(1);
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(8);
  const [isWhite, setIsWhite] = useState(false);
  const [isBorder, setIsBorder] = useState(false);
  const [textSize, setTextSize] = useState(14);

  const numberOfLabelsOnSubmit = (event: any) => {
    event.preventDefault();
    setConfirmedNumberOfLabels(numberOfLabels);
  };

  const handleChange = (event: any) => {
    setNumberOfLabels(event.target.value);
  };

  const showLabels = () => {
    const labels = [];
    for (let i = 0; i < confirmedNumberOfLabels; i++) {
      labels.push(
        <SpiceLabel
          textSize={textSize}
          border={isBorder}
          white={isWhite}
          width={width}
          height={height}
          key={i}
        />
      );
    }
    return labels;
  };

  const changeColor = (event: any) => {
    setIsWhite(event.target.checked);
  };
  const changeBorder = (event: any) => {
    setIsBorder(event.target.checked);
  };
  return (
    <>
      <form onSubmit={numberOfLabelsOnSubmit} className={styles.form}>
        <h4> Choose your number of labels and size.</h4>
        <div className={styles.filterContainer}>
          <div>
            <div className={styles.inputContainer}>
              <label># of labels</label>
              <input
                type="number"
                name="number"
                value={numberOfLabels}
                onChange={handleChange}
                className={styles.labelInput}
              />
            </div>
            <div className={styles.inputContainer}>
              <label>Width (cm)</label>
              <input
                type="number"
                name="width"
                value={width}
                onChange={(e: any) => setWidth(Number(e.target.value))}
              />
            </div>
            <div className={styles.inputContainer}>
              <label>Height (cm)</label>
              <input
                type="number"
                name="height"
                value={height}
                onChange={(e: any) => setHeight(Number(e.target.value))}
              />
            </div>
          </div>
          <div>
            <div className={styles.inputContainer}>
              <label>White labels</label>
              <input type="checkbox" onChange={changeColor} />
            </div>
            <div className={styles.inputContainer}>
              <label>Border</label>
              <input type="checkbox" onChange={changeBorder} />
            </div>
            <div className={styles.inputContainer}>
              <label>Text size</label>
              <input
                value={textSize}
                type="number"
                onChange={(e: any) => setTextSize(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit">Generate</button>
        </div>
      </form>
      <div className={styles.labelsContainer}>{showLabels()}</div>
    </>
  );
}
