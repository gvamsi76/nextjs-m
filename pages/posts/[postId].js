/* eslint-disable @next/next/no-typos */
function Post({ post }) {
    return (
        <><h2>{post.id} {post.title}</h2>
        <p>{post.body}</p></>
    )
}

export default Post

export async function getStaticPaths() {
    return {
        paths: [
        {
            params: { postId: '1' }
        },
        {
            params: { postId: '2' }
        },
        {
            params: { postId: '3' }
        },
        {
            params: { postId: '4' }
        },
        {
            params: { postId: '5' }
        }
    ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data =await res.json()

    return {
        props: {
            post: data
        }
    }
}