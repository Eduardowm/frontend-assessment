import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListingPage from "./pages/listing";
import ListingDetailsPage from "./pages/listing-details";
import { ListingProvider } from "./contexts/listing-context";

function App() {
    return (
        <ListingProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={ListingPage} />
                    <Route path="/listing/:id" component={ListingDetailsPage} />
                </Switch>
            </Router>
        </ListingProvider>
    );
}

export default App;
