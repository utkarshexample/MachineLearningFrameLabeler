import { useDispatch, useSelector } from "react-redux";
import { goToNextFrame, goToPreviousFrame } from "../store/slices/framesSlice";

const useFrameNavigation = () => {
  const { currentFrameIndex, frameCount } = useSelector(
    (state) => state.frames
  );
  const dispatch = useDispatch();
  const goToNext = () => dispatch(goToNextFrame());
  const goToPrevious = () => dispatch(goToPreviousFrame());

  return { currentFrameIndex, frameCount, goToNext, goToPrevious };
};

export default useFrameNavigation;
