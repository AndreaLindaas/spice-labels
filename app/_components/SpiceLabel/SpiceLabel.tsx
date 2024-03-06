import React, { useState } from "react";
import styles from "./SpiceLabel.module.scss";

type SpiceLabelProps = {
  dark?: boolean;
};

export default function SpiceLabel(props: SpiceLabelProps) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  console.log(props);
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
