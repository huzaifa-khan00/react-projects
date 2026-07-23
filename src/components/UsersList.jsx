import UserCard from "./UserCard";

function UsersList({ users }) {
  let headings = ["First Heading", "Second Heading", "Third Heading"];


  
  return (
    <div>
      <h2>{headings.map(heading => heading)}</h2>
      <ul>
        {users.map((user, index) => (
         <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;