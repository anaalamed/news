import { combineReducers } from "redux";
import news_reducer from "./slices/news.slice";

const rootReducer = combineReducers({
  news: news_reducer
});

export default rootReducer;
