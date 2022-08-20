import Link from "next/link"
function PostList({ posts }) {
    return (
        <>
            <h2>User List </h2><ul>
                {posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref>
                                <h2>
                                    <li>{post.id}{post.title}</li>
                                </h2>
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}
export default PostList;

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await res.json()

    return {
        props: {
            posts: data.slice(0, 5)
        }
    }
}