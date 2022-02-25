import React from 'react';
import Header from './Header';
import {Router, Route, Switch, Routes} from 'react-router-dom';
import ListingsList from './Listings/ListingsList';
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header></Header>
                    <div className='ui container'>
                        <div>
                            <Switch>
                                <Route path="/" exact component={ListingsList}></Route>
                            </Switch>
                        </div>
                    </div>
            </Router>
        </div> 
    );
};

export default App;