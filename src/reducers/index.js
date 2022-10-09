import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import imagesReducer from "./imagesReducer";
import loadingReducer from "./loadingReducer";
import pageReducer from "./pageReducer";
import statsReducer from "./statsReducer";


const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    page: pageReducer,
    imageStats: statsReducer
})

export default rootReducer