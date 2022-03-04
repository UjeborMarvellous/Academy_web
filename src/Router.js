import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { Suspense } from "react";
import Setup from "./Setup";

const Route = () => {
    return ( 
        <Router>
            <Suspense>
                <Switch>
                    <Route exact path="/Setup" component={Setup}/>
                </Switch>
            </Suspense>
        </Router>
     );
}
 
export default Route;
