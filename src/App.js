import React from 'react';
// import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {BrowserRouter, Redirect, Switch} from "react-router-dom";
import Footer from './components/Footer/Footer';
import {Route} from "react-router-dom";
import Prices from './components/Header/HeaderMiddle/Menu/Prices';
import CommentsContainer from "./components/Main/Comments/CommentsContainer";
import {Provider} from 'react-redux';
import store from './Redux/redux-store'
import Calculator from "./components/Calculator/Calculator";
import ApartmentMove from "./components/Boxes/ApartmentMove";
import OfficeRelocation from "./components/Boxes/OfficeRelocation";
import BuildingMaterials from "./components/Boxes/BuildingMaterials";
import RiggingWorks from "./components/Boxes/RiggingWorks";
import HeaderTop from "./components/Header/HeaderTop/HeaderTop";
import HeaderMiddle from "./components/Header/HeaderMiddle/HeaderMiddle";
// import HeaderBottom from "./components/Header/HeaderBottom/HeaderBottom";
// import MenuService from "./components/Main/MenuService/MenuService";
// import IconsService from "./components/Main/IconsService/IconsService";
// import AboutUs from "./components/Main/AboutUs/AboutUs";
// import ReviewsContainer from "./components/Main/Reviews/ReviewsContainer";


const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div>
                    {/*<Header />*/}
                    <HeaderTop/>
                    <HeaderMiddle/>

                    {/*<HeaderBottom />*/}
                    <Switch>
                        {/*<Route exact path='/' component={HeaderBottom}/>*/}
                        <Route exact path='/' render={() => <Redirect to={"/main"}/>}/>
                        <Route exact path='/main' component={Main}/>

                        <Route path='/apartmentMove' component={ApartmentMove}/>
                        <Route path='/officeRelocation' component={OfficeRelocation}/>
                        <Route path='/buildingMaterials' component={BuildingMaterials}/>
                        <Route path='/riggingWorks' component={RiggingWorks}/>
                        <Route path='/calculator' component={Calculator}/>
                        {/*<Route path='/contacts' component={Main}/>*/}
                        <Route path='/prices' component={Prices}/>
                        <Route path='/comments' component={CommentsContainer}/>
                    </Switch>
                    <Footer/>
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App;


