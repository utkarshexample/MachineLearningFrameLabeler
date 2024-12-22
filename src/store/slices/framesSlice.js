import { createSlice } from "@reduxjs/toolkit";

const framesSlice = createSlice({
  name: "frames",
  initialState: {
    currentFrameIndex: 0,
    frameCount: 0,
  },
  reducers: {
    setFrameCount(state, action) {
      state.frameCount = action.payload;
    },
    goToNextFrame(state) {
      if (state.currentFrameIndex < state.frameCount - 1)
        state.currentFrameIndex += 1;
    },
    goToPreviousFrame(state) {
      if (state.currentFrameIndex > 0) state.currentFrameIndex -= 1;
    },
  },
});

export const { setFrameCount, goToNextFrame, goToPreviousFrame } =
  framesSlice.actions;
export default framesSlice.reducer;
