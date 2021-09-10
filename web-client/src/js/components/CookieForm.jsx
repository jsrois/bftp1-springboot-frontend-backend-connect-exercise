import * as React from "react"
import {useState} from "react";
import {Form} from "react-bootstrap";

export const CookieForm = () => {
    const [cookie, setCookie] = useState({
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

        console.log("submitted")

    }


    return (<div>
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <label>Name</label>
                <input id="name"
                       type="text"
                       name="name"
                       placeholder="Name"
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <label>Cookie Type</label>
                <input id="type"
                       type="text"
                       name="type"
                       placeholder="type"
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <label>Calories</label>
                <input id="calories"
                       type="number"
                       name="calories"
                       placeholder="0"
                       onChange={handleInputChange}
                />
            </Form.Group>


            <button type="submit"
                   onClick={handleSubmit}>
                Create
            </button>

        </Form>

    </div>)
}