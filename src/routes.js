import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Sign from './pages/Sign';
import Confirm from './pages/Confirm';
import Home from './pages/Home';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/sign' exact component={Sign} />
                <Route path='/confirm' exact component={Confirm} />
                <Route path='/home'  component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;