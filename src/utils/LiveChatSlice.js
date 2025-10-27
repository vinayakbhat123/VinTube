import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name:"livechat",
    initialState:{
        chatmessage:[],
    },
    reducers:{
        addChat:(state,action) => {
            state.chatmessage.splice(20,1);
            state.chatmessage.push(action.payload);
        },
    },
});

export const {addChat} = LiveChatSlice.actions;

export default LiveChatSlice.reducer;