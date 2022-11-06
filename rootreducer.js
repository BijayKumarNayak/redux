import { combineReducers } from "redux";
import { changeNumber } from "./Reducer";
const rootReducer = combineReducers({
  changeNumber,
});

export default rootReducer;
