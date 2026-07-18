function UsersList({ users }) {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
         <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;