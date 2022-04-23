import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { childrenProps } = useSelector((state) => state.modal);
  return (
    <form className="form">
      <div className="form_control">
        <label className="label">name:</label>
        <input type="text" className="form_input" />
      </div>
      <div className="form_control">
        <label className="label">password:</label>
        <input type="text" className="form_input" />
      </div>
      <div className="form_control">
        <button onClick={() => dispatch(openModal())}>Login</button>
      </div>
    </form>
  );
};

export default Login;
