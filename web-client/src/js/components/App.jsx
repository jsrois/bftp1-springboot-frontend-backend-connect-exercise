import * as React from "react"
import {TopNavigationBar} from "./TopNavigationBar";
import {Route, Switch} from "react-router-dom";
import {CookiesTable} from "./CookiesTable";
import {CookieForm} from "./CookieForm";
import {CookieApi} from "../services/CookieApi";
import {useEffect, useState} from "react";


export const App = () => {

    const [cookies, setCookies] = useState([])

    const load = () => {
        new CookieApi().getCookies().then(setCookies)
    }

    useEffect(load, [])

    return <>
        <TopNavigationBar/>
        <Switch>
            <Route exact path="/">
                <CookiesTable
                    cookies={cookies}
                    onDeleteSuccess={load}/>
            </Route>
            <Route path="/add">
                <CookieForm onSuccess={load} />
            </Route>
            <Route path="/edit/:id">
                <CookieForm onSuccess={load}/>
            </Route>
        </Switch>

    </>
}