import { useState } from "react"

function ReactForm() {

    // const[fullName,setFullName]=useState("")
    // const[email,setEmail]=useState("")
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(`Full Name : ${fullName}`)
    //     console.log(`Email : ${email}`)
    //     setFullName = ""
    //     setEmail = ""
    // }

    const [userData, setUserData] = useState({
        fullName: "",
        email: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prevData) => {
           return ({ ...prevData, [name]: value })
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userData)
        setFullName = ""
        setEmail = ""
    }

    return (
        <div className="container-sm">
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <input type="text" className="form-control" placeholder="Full Name" onChange={handleChange} value={userData.fullName} name="fullName" />
                </div>
                <div className="my-3">
                    <input type="email" className="form-control" placeholder="Email" onChange={handleChange} value={userData.email} name="email" />
                </div>
                <div className="my-3">
                    <button className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReactForm