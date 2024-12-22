import { createSlice } from "@reduxjs/toolkit";

const boundingBoxesSlice = createSlice({
  name: "boundingBoxes",
  initialState: { boxesByFrame: {} },
  reducers: {
    addBoundingBox(state, action) {
      const { frameIndex, box } = action.payload;
      if (!state.boxesByFrame[frameIndex]) state.boxesByFrame[frameIndex] = [];
      state.boxesByFrame[frameIndex].push(box);
    },
    deleteBoundingBox(state, action) {
      const { frameIndex, boxIndex } = action.payload;
      if (state.boxesByFrame[frameIndex]) {
        state.boxesByFrame[frameIndex].splice(boxIndex, 1);
      }
    },
  },
});

export const { addBoundingBox, deleteBoundingBox } = boundingBoxesSlice.actions;
export default boundingBoxesSlice.reducer;
