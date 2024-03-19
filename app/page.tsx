"use client";
import { useState } from "react";
import SpiceLabel from "./_components/SpiceLabel/SpiceLabel";
import styles from "./page.module.scss";
import Nav from "./_components/Nav/Nav";
export default function Home() {
  const [numberOfLabels, setNumberOfLabels] = useState(0);
  const [confirmedNumberOfLabels, setConfirmedNumberOfLabels] = useState(4);
  const [width, setWidth] = useState(3);
  const [height, setHeight] = useState(4);

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
      labels.push(<SpiceLabel width={width} height={height} key={i} />);
    }
    return labels;
  };
  return (
    <>
      <form onSubmit={numberOfLabelsOnSubmit} className={styles.form}>
        <div>
          <label htmlFor="number">Number of labels</label>
        </div>
        <input
          type="number"
          name="number"
          value={numberOfLabels}
          onChange={handleChange}
        />
        <label>
          Width (cm):
          <input
            type="number"
            name="width"
            value={width}
            onChange={(e: any) => setWidth(Number(e.target.value))}
          />
        </label>
        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            value={height}
            onChange={(e: any) => setHeight(Number(e.target.value))}
          />
        </label>

        <div>
          <button type="submit">Select</button>
        </div>
      </form>
      <div className={styles.labelsContainer}>{showLabels()}</div>
    </>
  );
}
