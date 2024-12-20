import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Todos({tododata}) {
    
  return (
    <div>
     {
tododata.map(({id,description,Title,Completed})=>{
    return(
        <div>
           <span>{id}</span>
           <span>{Title}</span>
           <span>{description}</span>
           <span>{Completed}</span>
        </div>
    )
})
     }
    </div>
  )
}

export default Todos
