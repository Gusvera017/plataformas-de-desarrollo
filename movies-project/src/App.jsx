import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';
import User from './pages/User/User';
import Menu from './components/Menu';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <div className='container-fluid mt-2'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={
              <ProtectedRoute admin={true}>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path='/user' element={
              <ProtectedRoute admin={false}>
                <User />
              </ProtectedRoute>
            } />
            <Route path='/movie/:id' element={<MovieDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
