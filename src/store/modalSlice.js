import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  componentName: null,
  modalStyle: null,
  childrenProps: {},
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.componentName = null;
      state.modalStyle = null;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.componentName = action.payload.name;
      state.modalStyle = action.payload.position || "center";
      state.childrenProps = action.payload.childrenProps;
    },
  },
});
export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
