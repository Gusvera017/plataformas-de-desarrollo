import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Menu from './components/Menu';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <ProtectedRoute>
          <Menu />
        </ProtectedRoute>
        <div className='container-fluid mt-2'>
          <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path='/movie/:id' element={
              <ProtectedRoute>
                <MovieDetail />
              </ProtectedRoute>
            } />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
