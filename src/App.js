import React from 'react';
import '../index.css';
import Login from './Login/Login';
import Homepage from './Components/Homepage/Homepage';
import RegistrationContainer from './Registration/RegistrationContainer';
import CabinetContainer from './Cabinet/CabinetContainer';
import CoinsListPageContainer from './CoinsList/CoinsListPageContainer';
import CoinContainer from './Coin/CoinContainer';
import CartContainer from './Cart/CartContainer';
import { Router, Switch, Route, Link } from "react-router-dom";

const Main = styled.main`
    width: 100%,
    @media screen and (min-width: 600px) {
    display: flex 
}  
`;

function App(props) {
    return (
        <Main>
            <nav>
                <ul>

                </ul>
            </nav>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Homepage/>
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/cabinet" exact>
                        <CabinetContainer />
                    </Route>
                    <Route path="/photo/:id" exact>
                        <CoinsListPageContainer />
                    </Route>
                    <Route path="/set/:type" exact>
                        <CoinContainer />
                    </Route>
                    <Route path="/about" exact>
                        <CartContainer />
                    </Route>
                    <Route path="/contact" exact>
                        <CartContainer />
                    </Route>
                </Switch>
            </Router>













        </Main>
    );
}


export default App;
