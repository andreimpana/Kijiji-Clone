import React from 'react';
import Header from './Header';
import {Router, Route, Switch, Routes} from 'react-router-dom';
import ListingsList from './Listings/ListingsList';
import history from '../history';
import ListingsCreate from './Listings/ListingsCreate';
import About from './About';

class App extends React.Component{
    // state = {};
    // onTermSubmit = async (term) => {
    //     console.log(term)
    // }
    
    render(){
        return (
            <div>
                <Router history={history}>
                    <Header></Header>
                        <div className='ui container'>
                            <div>
                                <Switch>
                                    <Route path="/" exact component={ListingsList}></Route>
                                    <Route path="/createAd" exact component={ListingsCreate}></Route>
                                    <Route path="/user/register" exact component={ListingsCreate}></Route>
                                    <Route path="/user/login" exact component={ListingsCreate}></Route>
                                    <Route path="/about" exact component={About}></Route>
                                </Switch>
                            </div>
                        </div>
                </Router>
            </div> 
        );
    }
};

export default App;