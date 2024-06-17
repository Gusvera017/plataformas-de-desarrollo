import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './components/Menu';
import { AuthProvider } from './context/AuthContext';
//import './App.css'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <div className='container-fluid mt-2'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            {/* 
            <Route path='/productos/:idProducto' element={<h1>Productos con id dinámico</h1>} /> 
          */}
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>


  )
}

export default App;
