import "./Home.css"
import MoviesList from "../../components/MoviesList/MoviesList";

const Home = () => {
  return (
    <div className="container-home">
      <div className="title-home mb-5">
        <h1>BIENVENID#! a The Movies Project</h1>
      </div>
      <MoviesList />
    </div>

  )
}

export default Home;