import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import ScrollToTop from 'react-scroll-to-top'

import './App.css'
import NavbarComponent from './Routes/NavbarComponent'
import Products from './Routes/Products'
import SelectedProductDetails from './Routes/SelectedProductDetails'
import Login from './Routes/Login'
import SignUp from './Routes/SignUp'
import AboutUs from './Routes/AboutUs'
import Help from './Routes/Help'
import ScrollToTopBtn from './Routes/ScrollToTopBtn'



const App = () => {



  return (
    <>
    <NavbarComponent />
    <ScrollToTopBtn />
    
    <BrowserRouter>
        <Routes>
          <Route index path='/' element={ <Products /> } />
          <Route path='product-details/:productName/:productID' element={ <SelectedProductDetails /> } />
          <Route path='sign-up' element={ <SignUp /> } />
          <Route path='login' element={ <Login /> } />
          <Route path='about-us' element={ <AboutUs /> } />
          <Route path='help' element={ <Help /> } />

        </Routes>
    </BrowserRouter>

    </>


  )

}


export default App;
