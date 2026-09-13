import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './service/api';

export default function App() {

  const dispatch = useDispatch();
  const loading = useSelector(state=>state.loading)

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Home editMode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}
