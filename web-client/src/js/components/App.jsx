import * as React from "react"
import {TopNavigationBar} from "./TopNavigationBar";
import {Route, Switch} from "react-router-dom";
import {CookiesList} from "./CookiesList";
import {CookieForm} from "./CookieForm";


export const App = () => {


    return <>
        <TopNavigationBar/>

        <Switch>
            <Route exact path="/">
                <CookiesList cookies={[]} />
            </Route>
            <Route path="/add">
                <CookieForm />
            </Route>
            <Route exact path="/edit/:id">
                <CookieForm />
            </Route>

        </Switch>

    </>
}