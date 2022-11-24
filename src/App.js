import './App.css';
import Todo from './components/TODO/';
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'; 
import Navigation from './components/Navigation/Navigation';
import TodoInfo from './components/TodoInfo/TodoInfo';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <>
    <Navigation/>
    <Routes>
        <Route index element={<p>Abous</p>}></Route>
        <Route path='todos' element={<Todo/>}>
        </Route>
        <Route path='todo/:todoId' element={<TodoInfo/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
    
  );
}

export default App;
