import React, { useState } from 'react'
import axios from 'axios'
const Home = ({settododata}) => {
  const [data, setdata] = useState({
    Title: "",
    description: "",
    Completed: false
  })

  const handlechange = (e) => {

    const { name, value } = e.target || e;
    setdata({ ...data, [name]: value })
  }
  // const handlecheckbox = (e) => {
  //   setdata({ ...data, Completed: !data.Completed })
  // }

  const handlesubmit = async (e) => {
    e.preventDefault();
    // const res = await fetch('http://localhost:8080/todos',{
    //   method:'POST',
    //   body: JSON.stringify(data),
    //   headers:{'Content-Type': 'application/json'}
    // })
    try{
    const res = await axios.post('/todos',data)
  if(res.status == 200){
   console.log(res?.data?.data)
   settododata((old)=>{
    return [...old,res?.data?.data]
   })
  }
}
catch(err){
  console.log(err)
}

  }
  return (
    <div>
      <p className=''>This is home page of todo app</p>
      <div className='flex items-center justify-center  h-[80vh]'>
        <form
          action=""
          className="flex flex-col h-[300px] bg-yellow-200 p-5 rounded border-bl"
          onSubmit={handlesubmit}
        >
          <div className="flex items-center mb-3">
            <label
              htmlFor="name"
              className="w-1/4  mr-4"
            >
              Title:
            </label>
            <input
              type="text"
              id="name"
              name='Title'
              value={data.Title}
              onChange={(e) => handlechange(e)}
              className="w-3/4 border-black-400 border-2 outline-none rounded px-2 py-1"
            />
          </div>

          <div className="flex items-center mb-3">
            <label
              htmlFor="description"
              className="w-1/4 text-right mr-4"
            >
              Description:
            </label>
            <input
              type="text"
              id="description"
              name='description'
              value={data.description}
              onChange={handlechange}
              className="w-3/4 border-black-400 border-2 outline-none rounded px-2 py-1"
            />
          </div>

          <div className="flex items-center mb-3">
            <label
              htmlFor="completed"
              className="w-1/4 text-right mr-4"
            >
              Completed:
            </label>
            <input
              type="checkbox"
              id="completed"
              className="w-auto border-black-400 border-2 outline-none rounded"
              checked={data.Completed}
              onChange={(e)=>handlechange({name:"Completed", value:!data.Completed})}
            />
          </div>

          <button
            type="submit"
            className="w-[100%] self-center bg-red-300 text-white py-1 px-6 rounded"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}
export default Home;