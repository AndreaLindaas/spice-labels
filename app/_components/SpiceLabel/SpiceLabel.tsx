import React, { useState } from "react";
import styles from "./SpiceLabel.module.scss";
import { cmToPx } from "@/app/_lib/utils";

type SpiceLabelProps = {
  white?: boolean;
  width: number;
  height: number;
};

export default function SpiceLabel(props: SpiceLabelProps) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const { height, width, white } = props;

  const heightInPx = cmToPx(height);
  const widthInPx = cmToPx(width);

  return (
    <div>
      <div
        style={{ height: heightInPx, width: widthInPx }}
        className={`${styles.label} ${white ? styles.white : ""}`}
      >
        <div
          className={styles.whiteSquare}
          style={{ height: heightInPx - 10 - 2 }} //10px er 5px margin oppe, 5px margin nede. 2px er 1px border oppe og 1px border nede.
        >
          <p>{title}</p>
          <div className={` ${subTitle && styles.hasText}`}>
            <p>{subTitle}</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
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
    </div>
  );
}
