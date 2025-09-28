function Person({userData}){

    const{firstName,lastName,email}=userData //destructuring
// function Person({firstName,lastName,email}){
    {/*return(
        <div className="container">
            <h1>Person Details :</h1>
            <p>First Name : {firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>email : {email}</p>
        </div>
    )*/}

    {/*return(
        <div className="container">
            <h1>Person Details:</h1>
            <p>FirstName : {userData.firstName}</p>
            <p>LastName : {userData.lastName}</p>
            <p>email : {userData.email}</p>
        </div>
    )*/}

    return(
        <div className="container">
            <h1>Person Details:</h1>
            <p>FirstName : {firstName}</p>
            <p>LastName : {lastName}</p>
            <p>email : {email}</p>
        </div>
    )

}

export default Person