import { combineReducers } from "@reduxjs/toolkit";
import commonReducer from "src/store/common-reducer/common-reducer";

const rootReducer = combineReducers({
  common: commonReducer,
});
export default rootReducer;
