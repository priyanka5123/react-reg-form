import React from "react";
function UsersTable({users}){
    return(
        <div className="container my-5">
            <h2>Users</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>                                                             <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                         </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}
export default UsersTable;