import React, { Component } from 'react';
import {BrowserRouter as Router, 
        Route, 
        Routes,
        Link, 
        Redirect
    } from "react-router-dom";
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';

export default class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<p>This is home</p>} />
                    <Route path="/join" element={<RoomJoinPage/>} />
                    <Route path="/create" element={<CreateRoomPage/>} />
                </Routes>
            </Router>
        );
    }
}