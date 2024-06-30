import { Spinner } from "react-bootstrap";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="container-spinner-status">
      <Spinner variant="danger" />
    </div>
  )
}

export default LoadingSpinner;