import { useState,useEffect } from 'react'
import axios from 'axios'
import Home from './Pages/Home'
import Todos from './Pages/todos'


function App() {
  const [tododata,settododata] = useState([])

    const fetchdata = async()=>{
      try{
       const res = await axios.get('/todos')
      //  console.log(res)
       if(res.status == 200){
          console.log(res.data)
         settododata(res.data)
        //  setlistdata(res.data)
       }
      }
      catch(err){
          console.log("something went wrong",err)
      }
     }
    useEffect(()=>{
       fetchdata();
    },[])

  return (
    <>
   <div>
    <Home settododata={settododata}/> 
    <Todos tododata={tododata}/>
    </div>
    </>
  )
}

export default App
