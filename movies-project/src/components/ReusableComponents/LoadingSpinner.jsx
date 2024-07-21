import { Spinner } from "react-bootstrap";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="container-spinner-status">
      <Spinner style={{color: '#8a2be2'}}/>
    </div>
  )
}

export default LoadingSpinner;