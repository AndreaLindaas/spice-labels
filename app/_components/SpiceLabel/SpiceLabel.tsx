import React, { useState } from "react";
import styles from "./SpiceLabel.module.css";
export default function SpiceLabel() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  return (
    <div>
      <div className={styles.label}>
        <p>{title}</p>
        <p></p>
      </div>
      <div>
        <label htmlFor="">Title</label>
      </div>
      <div>
        <input
          type="text"
          onChange={(e: any) => setTitle(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
