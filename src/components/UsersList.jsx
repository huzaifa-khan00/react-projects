function UsersList({ users }) {
  let headings = ["First Heading", "Second Heading", "Third Heading"];
  return (
    <div>
      <h2>{headings.map(heading => heading)}</h2>
      <ul>
        {users.map((user) => (
         <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;