import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoundingBox } from "../store/slices/boundingBoxesSlice";
import api from "../services/api";
import LabelSelector from "./common/LabaleSelector";
import useDrawFrameImage from "../hooks/useDrawFrameImage";

const BoundingBoxCanvas = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState(null);
  const [currentRect, setCurrentRect] = useState(null);
  const [frameImage, setFrameImage] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState("Default");

  const currentFrameIndex = useSelector(
    (state) => state.frames.currentFrameIndex
  );
  const boxes = useSelector(
    (state) => state.boundingBoxes.boxesByFrame[currentFrameIndex] || []
  );
  const dispatch = useDispatch();
  const drawFrame = useDrawFrameImage(
    frameImage,
    boxes,
    currentRect,
    selectedLabel
  );
  const handleLabelChange = (e) => {
    setSelectedLabel(e.target.value);
  };

  useEffect(() => {
    const fetchFrameImage = async () => {
      const imageBlob = await api.getFrame(currentFrameIndex);
      const imageUrl = URL.createObjectURL(imageBlob);
      setFrameImage(imageUrl);
    };

    fetchFrameImage();
  }, [currentFrameIndex]);

  useEffect(() => {
    if (canvasRef.current && frameImage) {
      const ctx = canvasRef.current.getContext("2d");
      drawFrame(ctx);
    }
  }, [frameImage, currentFrameIndex, drawFrame]);

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setStartPoint({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (drawing && startPoint) {
      const rect = canvasRef.current.getBoundingClientRect();
      const endPoint = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      setCurrentRect({
        x1: startPoint.x,
        y1: startPoint.y,
        x2: endPoint.x,
        y2: endPoint.y,
      });
    }
  };

  const handleMouseUp = (e) => {
    if (drawing && startPoint) {
      const rect = canvasRef.current.getBoundingClientRect();
      const endPoint = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      dispatch(
        addBoundingBox({
          frameIndex: currentFrameIndex,
          box: {
            x1: startPoint.x,
            y1: startPoint.y,
            x2: endPoint.x,
            y2: endPoint.y,
            label: selectedLabel,
          },
        })
      );
    }
    setDrawing(false);
    setStartPoint(null);
    setCurrentRect(null);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <LabelSelector
        selectedLabel={selectedLabel}
        onLabelChange={handleLabelChange}
      />
    </div>
  );
};

export default BoundingBoxCanvas;
