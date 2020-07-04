import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Effects from './Effects';
import Moods from './Moods';
// import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
             <Route exact path ="/" component={App} />
             <Route exact path ="/effects" component={Effects} />
             <Route exact path ="/moods" component={Moods} />
             {/* quando nao tem path vai para 404 */}
             {/* <Route exact component={NotFound} /> */}
        </Switch>
    </BrowserRouter>
)

export default Router
