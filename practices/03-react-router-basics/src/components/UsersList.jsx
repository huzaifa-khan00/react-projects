import UserCard from "./UserCard";
import "./Userslist.css";

function UsersList({ users }) {
  let headings = ["First Heading", "Second Heading", "Third Heading"];


  
  return (
    <div className="users-list">
      <h2>{headings.map(heading => heading)}</h2>
      <ul>
        {users.map((user, i) => (
         <li key={i}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;