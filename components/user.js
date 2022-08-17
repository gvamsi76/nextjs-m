function User({user}) {
    return (
        <>
            <h2>Child Coponent</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>

        </>
    )
}

export default User