import React from 'react'





function Map() {
    const Students = [
        {
            id:1,
            name:"suman",
        },
        {
            id:1,
            name:"rohan",
        },
        {
            id:1,
            name:"aman",
        },
        {
            id:1,
            name:"Rahul",
        },
    ] 

  return (
    <div>
    {
        
        Students.map((user) => {
            return(
            
           <h1> "users are :"  {user.name}</h1>
            )
        })

        }

    </div>
  )
}

export default Map