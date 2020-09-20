import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SidePannel from './components/SidePannel'
import AllPanelView from './components/AllPanelView'
import Practice from './components/practice'

const Page = () =>{
    return(
        <div>
            <Router>
                <div className="Wrapper">    
                    <Switch>
                        <Route exact path="/">
                            <SidePannel name = {'inbox'} />
                        </Route>
                        <Route exact path="/inbox"> 
                            <SidePannel name = {'inbox'}/>
                        </Route>
                        <Route exact path = "/spam">
                            <SidePannel name = {'spam'}/>
                        </Route>
                        <Route exact path = '/trash'>
                            <SidePannel name = {'trash'}/>
                        </Route>
                        <Route exact path = "/inbox/view">
                            <AllPanelView name = {'inbox'} />
                        </Route>
                        <Route path = "/:boxName/:gid" component={Practice}/>
                        <Route path = "/:boxName/:gid" component={Practice}/>
                        <Route path = "/:boxName/:gid" component={Practice}/>
                        <Route path = "/spam/view">
                            <AllPanelView name = {'spam'}/>
                        </Route>
                        <Route path = "/trash/view">
                            <AllPanelView name = {'trash'}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
ReactDOM.render(<Page />, document.querySelector("#root"))