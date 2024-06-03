import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import './App.css'

function App() {

  return (
    <>
      <div className='container-fluid mt-2'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<h1>LOG IN</h1>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
