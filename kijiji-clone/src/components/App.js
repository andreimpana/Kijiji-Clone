import React from 'react';
import Header from './Header';
import {Router, Route, Switch, Routes} from 'react-router-dom';
import ListingsList from './Listings/ListingsList';
import history from '../history';

const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={ListingsList}></Route>
                    </Switch>
                </div>
            </Router>                
        </div>
    );
};

export default App;