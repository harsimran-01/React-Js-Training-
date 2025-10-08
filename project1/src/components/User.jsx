import { useState } from "react"
function User({userData}){
    // const{email}=userData
    // const[firstName,setFirstName] = useState("Harsimran")
    // const[lastName,setLastName] = useState("kaur")
    // const[email,setEmail] = useState("harsimrankaur68694@gmail.com")

    
    // const[full_name,setFullname]=useState("admin")

    // const updateFullname=()=>{
    //     setFullname("guest")
    // }

    // return(
    //     <div className="container-sm">
    //         <h1>Welcome : {full_name}</h1>
    //         <button onClick={updateFullname}>Update Fullname</button>

    //     </div>
    // )

    const [user, setUser] = useState({
        firstName: "Harsimran",
        lastName: "Kaur",
        email: "harsimrankaur68694@gmail.com"
    })
    const updateFirstname=()=>{
        setUser({...user, 
            firstName:user.firstName === "Harsimran" ? "Sagardeep" : "Harsimran"})
    }
    const updateLastname=()=>{
        setUser({...user, 
            lastName: user.lastName==="Kaur"?"Singh":"Kaur"})
    }
    const updateEmail=()=>{
        setUser({...user, 
            email: user.email === "harsimrankaur68694@gmail.com"?"sagardeepsingh68694@gmail.com":"harsimrankaur68694@gmail.com"})
    }

    return(
        <div className="container">
            <h1>Person Details:</h1>
            <p>FirstName : {user.firstName}</p>
            <p>LastName : {user.lastName}</p>
            <p>email : {user.email}</p>
            
          <button onClick={updateFirstname}>Update Firstname</button>
          <button onClick={updateLastname}>Update Lastname</button>
          <button onClick={updateEmail}>Update Email</button>
        </div>
    )
}
export default User
