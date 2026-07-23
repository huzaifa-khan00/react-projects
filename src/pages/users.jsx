import UsersList from "../components/UsersList";

function Users(){
      let users = [{name: "khan"}, {name: "ali"}, {name: "rabbit"}];

    return(
        <>
            <UsersList users={users}/>
        </>
    )
}

export default Users;