import * as React from "react"
import {Table} from "react-bootstrap";
import {CookieApi} from "../services/CookieApi";

export const CookiesTable = (props) => {
    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Calories</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {props.cookies.map(c =>
            <tr>
                <td>{c.name}</td>
                <td>{c.type}</td>
                <td>{c.calories}</td>
                <td>
                    <button
                        onClick={() =>
                            new CookieApi()
                                .deleteCookieById(c.id)
                                .then(props.onDeleteSuccess)
                        }
                    >❌</button>
                    <button
                        onClick={() => {}                        }
                    >✏️</button>
                </td>
            </tr>)}
        </tbody>
    </Table>;
}