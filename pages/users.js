import User from "../components/user";

function UserList({ users }) {
    return (
        <>
            <h2>User List </h2><ul>
                {users.map((user) => (
                    <div key={user.id}>
                        <User user={user}/>
                    </div>
                ))}
            </ul>
        </>
    )
}
export default UserList;

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    
    const users = await res.json()

    return {
        props: {
            users
        }
    }
}