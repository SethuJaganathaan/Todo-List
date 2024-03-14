import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { TodoList } from "./components/TodoList" 
import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import NavBar from './nav/NavBar';
import Calculator from './calculator/Calculator';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/todolist' element={<TodoList />}/>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/calculator' element={<Calculator />}/>
      </Routes>
    </div>
  )
}

export default App
