import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { actionAsyncStorage } from "next/dist/server/app-render/action-async-storage-instance";

export interface InitialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

// interface InitialStateTypes2 {
//     isDarkMode: boolean,
//     isSidebarClosed: boolean
// }

// const initialState2: InitialStateTypes2 = {
//     isDarkMode: false,
//     isSidebarClosed: false
// }

// const globalSlice = createSlice({
//     name: "Global",
//     initialState2,
//     reducers: {
//         setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
//             state.setIsSidebarCollapsed = action.payload;
//         },
//         setIsDarkMode: (state, action: PayloadAction<boolean>) => {
//             state.setIsDarkMode = action.payload
//         }
//     }
// })

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;