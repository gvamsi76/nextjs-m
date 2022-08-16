import { useRouter } from "next/router"

function Doc() {
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params);
    if (params.length === 2) {
        return <h2> viewing doc fro {params[0]}  and concept {params[1]}</h2>
    } else if (params.length === 1) {
        <h2> viewing docs for featuring {params[0]}</h2>
    }
    return (
        <h2>Docs details Page</h2>
    )
}
export default Doc