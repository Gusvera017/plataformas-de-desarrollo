import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu'
//import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <div className='container-fluid mt-2'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<h1>LOG IN</h1>} />
        </Routes>
      </div>
    </BrowserRouter >


  )
}

export default App;
