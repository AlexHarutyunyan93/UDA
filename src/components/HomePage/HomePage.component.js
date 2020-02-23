import React from 'react';
import Button from "@material-ui/core/Button";

const HomePageComponent = ({user, logout}) => {
    return (
        <div className="col-md-6 col-md-offset-3">
            <h1>{`${user.firstName} ${user.lastName}`}</h1>

            <p>
                <Button color="primary" onClick={ logout }>Logout</Button>
            </p>
        </div>
)};
export default HomePageComponent;