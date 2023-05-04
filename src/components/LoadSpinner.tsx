import React from "react";
import { Spinner, SpinnerProps } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface LoadSpinnerProps {
  size?: SpinnerProps["size"];
  loadingText?: string;
}

const LoadSpinner: React.FC<LoadSpinnerProps> = ({
  size = "lg",
  loadingText = "Loading...",
}) => {
  return (
    <div className="d-flex align-items-center p-2">
      <Spinner
        animation="border"
        role="status"
        size={size as SpinnerProps["size"]}
      >
        <span className="visually-hidden">{loadingText}</span>
      </Spinner>
      <span className="ms-2">{loadingText}</span>
    </div>
  );
};

export default LoadSpinner;
