import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name:"Menu",
    initialState:{
        isOpenMenu:true,
    },
    reducers:{
        toggleMenu:(state) =>{
            state.isOpenMenu = !state.isOpenMenu;
        },
        closeMenu:(state) =>{
            state.isOpenMenu = false;
        },
    },
});

export const {toggleMenu,closeMenu} = MenuSlice.actions;

export default MenuSlice.reducer;