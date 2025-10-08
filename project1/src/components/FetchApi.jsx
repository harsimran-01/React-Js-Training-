import { useState } from "react"
import { useEffect } from "react"

function FetchApi() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`count:${count}`)
    },[])
    const handlesubmit=()=>{
        setCount(count+1)
    }

    return (
        <div>
            <h1>Good morning babyy</h1>
            <button onClick={handlesubmit}>Click Me</button>
        </div>
    )
}
export default FetchApi