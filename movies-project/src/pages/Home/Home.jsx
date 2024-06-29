
import "./Home.css"
import ApiService from "../../components/ApiService";

const Home = () => {
  return (
    <div className="container-home">
      <div className="title-home mb-5">
        <h1>BIENVENID#! a The Movies Project</h1>
      </div>
          <ApiService />
    </div>

  )
}

export default Home;