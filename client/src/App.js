import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CreateListing from './Pages/CreateListing';
import ListingDetail from './Pages/ListingDetail';
import TripList from './Pages/TripList';
import WishList from './Pages/WishList';
import PropertyList from './Pages/PropertyList';
import ReservationList from './Pages/ReservationList';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/create-listing' Component={CreateListing}/>
          <Route path='/properties/:listingId' Component={ListingDetail}/>
          <Route path='/:userId/trips' Component={TripList}/>
          
          <Route path="/:userId/wishList" Component={WishList}/>
          <Route path="/:userId/properties" Component={PropertyList} />
          <Route path="/:userId/reservations" Component={ReservationList} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
