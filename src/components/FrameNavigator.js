import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { goToNextFrame, goToPreviousFrame } from "../store/slices/framesSlice";

const FrameNavigator = () => {
  const dispatch = useDispatch();
  const { currentFrameIndex, frameCount } = useSelector(
    (state) => state.frames
  );

  return (
    <div className="d-flex justify-content-around mb-4">
      <button
        className="btn btn-primary"
        onClick={() => dispatch(goToPreviousFrame())}
        disabled={currentFrameIndex === 0}
      >
        Previous Frame
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(goToNextFrame())}
        disabled={currentFrameIndex === frameCount - 1}
      >
        Next Frame
      </button>
    </div>
  );
};

export default FrameNavigator;
