import * as React from "react"
import {useDebugValue, useState} from "react";
import {Form} from "react-bootstrap";
import {CookieApi} from "../services/CookieApi";
import {Redirect, useLocation, useParams} from "react-router-dom";

export const CookieForm = (props) => {

    const locationData = useLocation()

    const [enviado, setEnviado] = useState(false)

    const [cookie, setCookie] = useState(locationData.state?.cookie || {
        name: '',
        type: '',
        calories: ''
    })


    const handleInputChange = (event) => {
        setCookie({
            ...cookie,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const cookieApi = new CookieApi()
        cookieApi
            .createCookie(cookie)
            .then(() => setEnviado(true))
            .then(props.onSuccess)

    }

    if (enviado) {
        return <Redirect to="/"/>
    }

    return (<div>
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <label>Name</label>
                <input id="name"
                       type="text"
                       name="name"
                       placeholder="Name"
                       value={cookie.name}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <label>Cookie Type</label>
                <input id="type"
                       type="text"
                       name="type"
                       placeholder="type"
                       value={cookie.type}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <label>Calories</label>
                <input id="calories"
                       type="number"
                       name="calories"
                       value={cookie.calories}
                       placeholder="0"
                       onChange={handleInputChange}
                />
            </Form.Group>


            <button type="submit"
                   onClick={handleSubmit}>
                {locationData.state ? "Update": "Create"}
            </button>

        </Form>

    </div>)
}