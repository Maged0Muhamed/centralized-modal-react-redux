import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import Login from "./../forms/Login";
import Register from "./../forms/Register";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <ul className="header-right">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
      <ul className="header-left">
        <li
          onClick={() =>
            dispatch(
              closeModal({
                name: <Login />,
                childrenProps: {
                  name: "Maged",
                  email: "magdahmed624@gmail.com",
                },
              })
            )
          }
        >
          Login
        </li>
        <li
          onClick={() =>
            dispatch(closeModal({ name: <Register />, position: "bottom" }))
          }
        >
          Register
        </li>
      </ul>
    </div>
  );
};

export default Header;
