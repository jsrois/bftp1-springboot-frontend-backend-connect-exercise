import * as React from 'react'
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export const TopNavigationBar = () => (
    <Nav
        activeKey="/home"
    >
        <Nav.Item >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/add">Create Cookie</Nav.Link>
        </Nav.Item>
    </Nav>
)