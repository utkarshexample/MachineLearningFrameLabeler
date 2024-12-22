import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBoundingBox } from "../store/slices/boundingBoxesSlice";

const BoundingBoxList = () => {
  const currentFrameIndex = useSelector(
    (state) => state.frames.currentFrameIndex
  );
  const boxes = useSelector(
    (state) => state.boundingBoxes.boxesByFrame[currentFrameIndex] || []
  );
  const dispatch = useDispatch();

  return (
    <div>
      {boxes.length === 0 ? (
        <p className="text-center">
          No bounding boxes available for the current frame.
        </p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Coordinates</th>
              <th scope="col">Class</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {boxes.map((box, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{`(${box.x1}, ${box.y1}) - (${box.x2}, ${box.y2})`}</td>
                <td>{box.label}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() =>
                      dispatch(
                        deleteBoundingBox({
                          frameIndex: currentFrameIndex,
                          boxIndex: index,
                        })
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BoundingBoxList;
