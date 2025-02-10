import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    // const[count,setCount]=React.useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(100);
    //     },4000)
    //     document.title="MRU";
    // },[count])
    const [users,setusers]=useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => response.json().then(data=>{
                setusers(data);
            })
        ).catch(err=>console.log(err))
    })
  return (
    // <div>UseEffect
    //     <h1>{count}</h1>
      
    // </div>
    <div className='parent'>
        {
            users.map((user,index)=>{
                return(
                    <React.Fragment key={index}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                    </React.Fragment>
                )})
        }
    </div>
    
  )
}

export default UseEffectEx