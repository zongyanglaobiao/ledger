import {configureStore} from "@reduxjs/toolkit";
import {composeWithDevTools} from "@redux-devtools/extension";
import {authorizeReducer} from "@/redux/feature/authorize.js";

//存储状态
export const store = configureStore({
	reducer:{
		authorize:authorizeReducer
	},
	devTools:composeWithDevTools(),
	middleware : (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: false
		})
	}
});
