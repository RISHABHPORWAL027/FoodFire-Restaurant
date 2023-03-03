
import './App.css';
import { createBrowserRouter, Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';

// Import COmponents 
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
import Footer from './components/Footer';
import RestaurantMenu from './components/ReataurantMenu';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Body />}>
          {/* <Route index element={<Home />} /> */}
          
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  );
}

// const appRouter = () => createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     errorElement: <Error/>,
//     children:[
//       {
//         path:'/',
//         element: <Body/>
//       },
//       {
//         path:'restaurant/:resId',
//         element: <RestaurantMenu/>
//       }
//     ]
//   }
// ])

export default App;
