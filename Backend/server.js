import express from 'express'
import cors from 'cors'
import fs from 'fs'
const app = express()
const port = process.env.port || 8080;

// app.use(cors({origin:'*'}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello this is home page of todo app")
})

// getting the data
app.get('/todos',(req,res)=>{
    fs.readFile('./DB/todo.json','utf-8',(err,data)=>{
      if(err){
        res.status(404).send('file not found')
      }
      else{
        console.log("reading")
        res.status(200).json(JSON.parse(data))
      }
    })
  })

app.post('/todos', (req,res)=>{
    console.log(req.body)
    const newData = req.body
    console.log(newData)
    fs.readFile('./DB/todo.json','utf-8',(err,data)=>{
        if(err){
            res.status(404).send("File not Found")
        }
        else{
            // console.log(data)
          
           const old_data = JSON.parse(data)

           newData['id']= old_data.length + 1;
            old_data.push(newData)
            
            
            fs.writeFile('./DB/todo.json', JSON.stringify(old_data), 'utf-8', (err) => {
                if (err) {
                   res.send(404).send("Not able to add in new todo")
                } else {
                    res.status(200).json({"msg":"Todo added successfully",
                      data:newData
                    })
                }
            });

        }
    })
    
  })


app.listen(port,()=>{
    console.log(`Server is running http://localhost:${port}`)
})

