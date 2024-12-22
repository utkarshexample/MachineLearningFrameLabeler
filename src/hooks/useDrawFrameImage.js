import { useCallback } from "react";
import useDrawBoundingBoxes from "./useDrawBoundingBoxes";
import useDrawCurrentRect from "./useDrawCurrentRect";

const useDrawFrameImage = (frameImage, boxes, currentRect, selectedLabel) => {
  const drawBoundingBoxes = useDrawBoundingBoxes(boxes);
  const drawCurrentRect = useDrawCurrentRect(currentRect, selectedLabel);

  return useCallback(
    (ctx) => {
      const img = new Image();
      img.src = frameImage;
      img.onload = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(img, 0, 0);
        drawBoundingBoxes(ctx);
        drawCurrentRect(ctx);
      };
    },
    [frameImage, drawBoundingBoxes, drawCurrentRect]
  );
};

export default useDrawFrameImage;
