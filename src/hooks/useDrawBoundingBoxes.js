import { useCallback } from "react";
import labelColors from "../config/labelColors";

const useDrawBoundingBoxes = (boxes) => {
  return useCallback(
    (ctx) => {
      boxes.forEach((box) => {
        const label = box.label;
        const { strokeStyle, fillStyle } = labelColors[label] || {};
        if (strokeStyle && fillStyle) {
          ctx.strokeStyle = strokeStyle;
          ctx.fillStyle = fillStyle;
        }
        ctx.lineWidth = 2;
        ctx.strokeRect(box.x1, box.y1, box.x2 - box.x1, box.y2 - box.y1);
        ctx.fillRect(box.x1, box.y1, box.x2 - box.x1, box.y2 - box.y1);
      });
    },
    [boxes]
  );
};

export default useDrawBoundingBoxes;
