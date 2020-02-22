import React from 'react';
import Button from "@material-ui/core/Button";

const HomePageComponent = ({user, users, logout}) => (
    <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.firstName}!</h1>
        <p>You're logged in with React & JWT!!</p>
        <h3>Users from secure api end point:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.items &&
        <ul>
            {users.items.map((user, index) =>
                <li key={user.id}>
                    {user.firstName + ' ' + user.lastName}
                </li>
            )}
        </ul>
        }
        <p>
            <Button color="primary" onClick={ logout }>Logout</Button>
        </p>
    </div>
);
export default HomePageComponent;