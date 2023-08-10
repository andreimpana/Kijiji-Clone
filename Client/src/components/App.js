import React from 'react';
import Header from './Header';
import { Router, Route, Switch } from 'react-router-dom';
import ListingsList from './Listings/ListingsList';
import history from '../history';
import ListingsCreate from './Listings/ListingsCreate';
import ListingContact from './Listings/ListingContact';
import About from './About';
import ListingsDelete from './Listings/ListingsDelete';

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.onTermSubmit = this.onTermSubmit.bind(this)
        this.state = {
            searchTerm: ''
        }
    }
    onTermSubmit(term) {
        //TODO implement filtering results
        this.setState({searchTerm: term})
    }
    render() {
        let {
            searchTerm
        } = this.state;
        return (
            <div>
                <Router history={history}>
                        <div>
                            <Header onTermSubmit={this.onTermSubmit}></Header>
                            <div className='ui container'>
                            <Switch>
                                <Route 
                                    path="/" 
                                    exact 
                                    component={() => <ListingsList searchTerm={this.state.searchTerm}/>}
                                />
                                <Route path="/createAd" exact component={ListingsCreate}></Route>
                                <Route path="/user/register" exact component={ListingsCreate}></Route>
                                <Route path="/user/login" exact component={ListingsCreate}></Route>
                                <Route path="/about" exact component={About}></Route>
                                <Route path="/contact/:id" exact component={ListingContact}></Route>
                                <Route path="/delete/:id" exact component={ListingsDelete}></Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
};

export default App;