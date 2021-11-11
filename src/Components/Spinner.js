import React from 'react'
import spinner from "../img/spinner.gif"

const Spinner = () => {
    return (
       <img src={spinner}
       style={{width:"320px", margin:"auto", display:"block"}} alt="loading" />
    )
}

export default Spinner
