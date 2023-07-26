
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<Create />} />
        <Route path='/blogDetails' element={<BlogDetails />} />
        <Route path='/updateBlog' element={<UpdateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
