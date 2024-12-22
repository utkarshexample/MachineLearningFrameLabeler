import { useCallback } from "react";
import labelColors from "../config/labelColors";

const useDrawCurrentRect = (currentRect, selectedLabel) => {
  return useCallback(
    (ctx) => {
      if (currentRect) {
        const { x1, y1, x2, y2 } = currentRect;
        const { strokeStyle, fillStyle } = labelColors[selectedLabel] || {};
        if (strokeStyle && fillStyle) {
          ctx.strokeStyle = strokeStyle;
          ctx.fillStyle = fillStyle;
        }
        ctx.lineWidth = 2;
        ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
        ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
      }
    },
    [currentRect, selectedLabel]
  );
};

export default useDrawCurrentRect;
