import React, { useState, useEffect }  from 'react';

const Users = (props) => {

    const [users, setUsers] = useState(props.props.users);

    return (

        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <span>{user.name}</span><br/>
                        <span>{user.emailAddress}</span><br/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users;
