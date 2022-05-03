import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header'
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import ManageItem from './Components/ManageItem/ManageItem';
import AddItem from './Components/AddItem/AddItem';
import InventoryId from './Components/InventoryId/InventoryId';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageitem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryId></InventoryId>}></Route>
      </Routes>


    </div>
  );
}

export default App;
