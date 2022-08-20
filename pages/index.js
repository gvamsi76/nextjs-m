import Link from "next/link"
import { useRouter } from "next/router";
function Home() {
    const router = useRouter()
    const handleCLick =()=>{
        console.log('placing Order here');
        router.push('/product')
     
    }
    return (
        <div>
            <h2> Home Page</h2>
            {/* <Link href='/blog'>
                <a>Blog</a>
            </Link><br />
            <Link href='product'><a>Products</a></Link><br /> */}
            <Link href='/posts'><a>Posts</a></Link><br />

            {/* <button onClick ={handleCLick}>Place Order</button> */}
        </div>
    )
}
export default Home