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
import MyItem from './Components/MyItem/MyItem';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/notFound/notFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageitem' element={


          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>


        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryId></InventoryId>
          </RequireAuth>
        }></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
