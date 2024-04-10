import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';




function App() {


  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleEdit = (e,id)=>{
    let editTodo = todos.filter(item=>{
      return item.id===id
    })
    setTodo(editTodo[0].todo)
    let index = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(index);

    
  }

  const handleDelete = (e,id)=>{

    let index = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(index);
  }

  const handleCheckbox = (e)=>{
    let id = e.target.name;
    let index = todos.findIndex(item =>{
      return item.id===id;
    })
    let newTodos = [...todos];
    newTodos[index].isComplete=!newTodos[index].isComplete;
    setTodos(newTodos);

  }




  const handleAdd = ()=>{

    setTodos([...todos, {id:uuidv4(),todo, isComplete:false}])
    setTodo("")
    
   
    
    

  }

  return (
    <>


      <div>

        <div className='bg-[#F1F2F6] w-1/2 pb-5 min-h-[35rem] mx-auto my-[5rem] rounded-xl'>
          <h1 className='font-bold text-[2rem] text-center pt-4'>TO DO LIST</h1>
          <div className='bg-white  w-3/4 mx-auto flex justify-evenly mt-5 p-4 rounded-2xl gap-3 flex-col lg:flex-row'>
            <input onChange={handleChange} value={todo} type="text" name="" placeholder='Add Your To Do Task...' className=' h-10 border-2 border-gray-200 rounded-lg pl-4 focus:outline-none w-full text-sm lg:w-3/4 sm:text-lg' />
            <button onClick={handleAdd} className='px-6 bg-violet-500 text-white font-semibold rounded-2xl hover:cursor-pointer hover:bg-violet-600'>Add</button>
          </div>


          <div className='todos bg-white w-3/4 min-h-[20rem] mt-5 p-4 rounded-2xl mx-auto'>
           {todos.map(item=>{
            return <div key={todo.id} className='todo flex flex-wrap justify-between pt-4 flex-col lg:flex-row'>
              <span className='flex'>
              <input onChange={handleCheckbox} name={item.id} value={item.isComplete} type="checkbox"  className='mr-2'/>
              <p className={item.isComplete?'line-through':""}>{item.todo}</p>
              </span>
              
            <div className="buttons">
              <button onClick={(e)=>{handleEdit(e,item.id)}} className='px-4 bg-violet-500 text-white font-semibold rounded-lg hover:cursor-pointer hover:bg-violet-600 mr-[1rem] '>Edit</button>
              <button onClick={(e)=>{handleDelete(e,item.id)}} className='px-2 bg-violet-500 text-white font-semibold rounded-lg hover:cursor-pointer hover:bg-violet-600'>Delete</button>
            </div>
          </div>
           })}
            

          </div>


        </div>

      </div>



    </>
  )
}

export default App
