import logo from './logo.svg';
import './App.css';
import ApiMoviesSearch from './components/ApiMoviesSearch';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Detail from './components/Detail';

function App() {
  return (
    <div>
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<ApiMoviesSearch/>}></Route>
    <Route path='/detail/:id' element={<Detail/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
