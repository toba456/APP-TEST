
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './NavBar';
import Form from './Pages/Form';
import Table from './Pages/Table';


function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Table/>}/>
        <Route path='/Form' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
