import React, { useState } from "react";
import styles from "./SpiceLabel.module.scss";

type SpiceLabelProps = {
  dark?: boolean;
};

export default function SpiceLabel(props: SpiceLabelProps) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  // console.log(props);
  return (
    <div>
      <div className={styles.label}>
        <div className={styles.whiteSquare}>
          <p>{title}</p>
          <div className={` ${subTitle && styles.hasText}`}>
            <p>{subTitle}</p>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="">Title</label>
      </div>
      <div>
        <input
          type="text"
          onChange={(e: any) => setTitle(e.target.value.toUpperCase())}
        ></input>
      </div>
      <div>
        <label htmlFor="">Sub title</label>
      </div>
      <div>
        <input
          type="text"
          onChange={(e: any) => setSubTitle(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
