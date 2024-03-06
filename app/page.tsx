"use client";
import { useState } from "react";
import SpiceLabel from "./_components/SpiceLabel/SpiceLabel";
import styles from "./page.module.scss";
export default function Home() {
  const [value, setValue] = useState(0);
  const [confirmedNumberOfLabels, setConfirmedNumberOfLabels] = useState(4);

  const numberOfLabels = (event: any) => {
    event.preventDefault();
    setConfirmedNumberOfLabels(value);
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const showLabels = () => {
    const labels = [];
    for (let i = 0; i < confirmedNumberOfLabels; i++) {
      labels.push(<SpiceLabel key={i} />);
    }
    return labels;
  };
  return (
    <>
      <form onSubmit={numberOfLabels} className={styles.form}>
        <div>
          <label htmlFor="number">Number of labels</label>
        </div>
        <input
          type="number"
          name="number"
          value={value}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Select</button>
        </div>
      </form>
      <div className={styles.labelsContainer}>{showLabels()}</div>
    </>
  );
}
