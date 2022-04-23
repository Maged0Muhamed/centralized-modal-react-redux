import modal from "./modalSlice";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({ reducer: { modal } });
