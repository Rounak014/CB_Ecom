import {useEffect} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
} from 'react-router-dom';

import Home from './scenes/home/Home';
import Navbar from './scenes/global/Navbar';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import ItemDetails from './scenes/itemDetails/ItemDetails';


const ScrollToTop=()=>{
    //whenever we click on a link this will take us to the top 
    const{pathname}=useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])
    return null;
}
function App(){
    return <div className='app'>
    {/* Browserouter - this component utilizes the HTML5 history API to update the UI without reloading the page.  */}
        <BrowserRouter>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
                <Route  path="/" element={<Home/>}/> 
                <Route  path="item/:itemId" element={<ItemDetails/>}/> 
                <Route  path="checkout" element={<Checkout/>}/> 
                <Route  path="/" element={<Home/>}/> 
                <Route path="checkout/success" element={<Confirmation/>}/>           
            </Routes>
        </BrowserRouter>
    </div>;
}
export default App;
