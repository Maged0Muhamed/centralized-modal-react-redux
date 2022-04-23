import React, { Fragment } from "react";
import CloseSVG from "../../../assets/close.svg";
import { useSelector, useDispatch } from "react-redux";
import "./modal.css";
import { openModal } from "../../../store/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, componentName, modalStyle } = useSelector(
    (state) => state.modal
  );
  const closeModalHandler = () => dispatch(openModal());
  return (
    <Fragment>
      <div
        className={`modal-backDrop ${isOpen ? "modal-hide" : "modal-show"} `}
      ></div>
      <div
        className={`modal-container ${isOpen ? "modal-hide" : "modal-show"}  `}
      >
        <div className="modal-close">
          <img
            src={CloseSVG}
            className="modal-close-img"
            alt="close-modal"
            onClick={() => dispatch(closeModalHandler)}
          />
        </div>
        <div className={`modal-content ${modalStyle}`}>{componentName}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
