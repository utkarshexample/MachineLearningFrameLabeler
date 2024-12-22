import { configureStore } from "@reduxjs/toolkit";
import framesReducer from "./slices/framesSlice";
import boundingBoxesReducer from "./slices/boundingBoxesSlice";

const store = configureStore({
  reducer: {
    frames: framesReducer,
    boundingBoxes: boundingBoxesReducer,
  },
});

export default store;
