import { useEffect, useState } from "react";
// const url = '    ';
let dataForLoad = {
    skip: 0,
    limit: 8
};
const apiUrl = 'https://dummyjson.com/users';
export default function UsersList() {
    const [users, setUsers] = useState([]);
    // using useEffect
    //invoke when the always visualisation
    useEffect(() => {
        console.log("Effect invoke!!!!");
        return ()=>{
            console.log("Effect invoke before the component is unmounted (deleted)!!!!");
        }
    });

    //invoke when the users property is changed
    useEffect(() => {
        console.log("Effect invoke when the users property is changed!!!");
    }, [users]);

    // invoke only when component is rendered
    useEffect(() => {
        console.log("Effect invoke only when component is rendered!!!!");
        loadUsers();
    }, []);


    const loadUsers = () => {
        //https://dummyjson.com/users?limit=8&skip=0
        let url = apiUrl + `?limit=${dataForLoad.limit}&skip=${dataForLoad.skip}`;
        dataForLoad.skip += dataForLoad.limit;
        console.log(dataForLoad);
        fetch(url)
            .then(res => res.json())
            .then(dataUsers => {
                console.log(dataUsers.users);
                setUsers([...users, ...dataUsers.users]);
            })
            .catch(err => {
                console.warn(err);
            });
    }
    return (
        <>
            <h2>User List</h2>
            <div style={{ "width": "90%", "textAlign": "start" }}>
                <ol>
                    {users.map(user =>
                        // <li key={user.id}>{user.name} Address: {user.address.city}</li>)}
                        <li key={user.id}>{user.lastName} {user.firstName} Address: {user.address.city}</li>)}
                </ol>
                <button onClick={loadUsers}>Load Users</button>
            </div>
        </>
    );

}