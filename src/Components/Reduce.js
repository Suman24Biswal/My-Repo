import React from 'react'

function Reduce() {

    const Num = [23,45,67,89,90]
  return (
    <div>{
        Num.reduce((prev,curr) => {
            return(
            <h2>{prev + curr}</h2>
            )
        })
        
        }</div>
  )
}

export default Reduce