import * as React from "react"
import {Table} from "react-bootstrap";

export const CookiesList = (props) => {
    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Calories</th>
        </tr>
        </thead>
        <tbody>
        {props.cookies.map(c =>
            <tr>
                <td>{c.name}</td>
                <td>{c.type}</td>
                <td>{c.calories}</td>
            </tr>)}
        </tbody>
    </Table>;
}