import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import Login from "./../forms/Login";
import Register from "./../forms/Register";
const LoginRegister = () => {
  const dispatch = useDispatch();
  return (
    <div className="login-register">
      <button
        className="btn"
        onClick={() => dispatch(closeModal({ name: <Login /> }))}
      >
        Login
      </button>
      <div>OR</div>
      <button
        className="btn"
        onClick={() =>
          dispatch(closeModal({ name: <Register />, position: "bottom" }))
        }
      >
        Register
      </button>
    </div>
  );
};

export default LoginRegister;
// onClick={dispatch(closeModal({ name: <Login />, position: "center" }))}
// onClick={dispatch(
//   closeModal({ name: <Register />, position: "bottom" })
// )}
