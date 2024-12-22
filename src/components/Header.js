import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFrameCount } from "../store/slices/framesSlice";
import api from "../services/api";
const Header = () => {
  const dispatch = useDispatch();
  const { currentFrameIndex } = useSelector((state) => state.frames);
  useEffect(() => {
    async function fetchVideoInfo() {
      const data = await api.getVideoMetadata();
      dispatch(setFrameCount(data.frame_count));
    }
    fetchVideoInfo();
  }, [dispatch]);

  return (
    <div className="text-center">
      <h1>Frame Labeler </h1>
      <h6>Frame Number - {currentFrameIndex}</h6>
    </div>
  );
};

export default Header;
