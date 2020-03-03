import React from 'react';
import {Header} from "../Header";

const HomePageComponent = ({user}) => {
    return (
        <div className="col-md-6 col-md-offset-3">
            <Header />
            <h1>{`${user.firstName} ${user.lastName}`}</h1>
        </div>
)};
export default HomePageComponent;