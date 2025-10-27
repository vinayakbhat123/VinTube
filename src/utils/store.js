import {configureStore} from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice"
import VideosSlice from "./VideosSlice";
import LiveChatSlice from "./LiveChatSlice"
const store = configureStore({
  reducer:{ 
    Menu:MenuSlice,
    Videos:VideosSlice,
    livechat:LiveChatSlice
}
})

export default store;