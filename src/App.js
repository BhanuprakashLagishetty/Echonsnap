import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoardPage from './Pages/DashBoardPage';
import Userprofile from './Pages/UsersProfile';
import NotificationPage from './Pages/NotificationPage';

function App() {
  return (
 <>
   <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<DashBoardPage/>}></Route>
        <Route path='/userprofile' exact element={<Userprofile/>}></Route>
        <Route path='/activity' exact element={<NotificationPage/>}></Route>
      </Routes>
    </BrowserRouter>
 </>
  );
}

export default App;
