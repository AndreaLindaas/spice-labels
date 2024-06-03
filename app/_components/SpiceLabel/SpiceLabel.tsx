import React, { useState } from "react";
import styles from "./SpiceLabel.module.scss";
import { cmToPx } from "@/app/_lib/utils";

type SpiceLabelProps = {
  border?: boolean;
  white?: boolean;
  width: number;
  height: number;
  textSize: number;
};

export default function SpiceLabel(props: SpiceLabelProps) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const { height, width, white, border, textSize } = props;

  const heightInPx = cmToPx(height);
  const widthInPx = cmToPx(width);

  return (
    <div>
      <div className={styles.spiceLabelContainer}>
        <div className={styles.spiceLabelInnerContainer}>
          <div
            style={{ height: heightInPx, width: widthInPx, fontSize: textSize }}
            className={`${styles.label} ${white ? styles.white : ""}`}
          >
            <div
              className={`${border ? styles.whiteSquare : ""}`}
              style={{ height: border ? heightInPx - 10 - 2 : "auto" }} //10px er 5px margin oppe, 5px margin nede. 2px er 1px border oppe og 1px border nede.
            >
              <p>{title}</p>
              <div
                className={` ${subTitle && styles.hasText}`}
                style={{ fontSize: textSize - 2 }}
              >
                <p>{subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <div>
          <label>Title</label>
          <input
            type="text"
            onChange={(e: any) => setTitle(e.target.value.toUpperCase())}
          ></input>
        </div>

        <div>
          <label>Subtitle</label>
          <input
            type="text"
            onChange={(e: any) => setSubTitle(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
