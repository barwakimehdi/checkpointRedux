import React,{useState} from 'react'
import{useDispatch}from "react-redux"
import { Button,FormControl,InputGroup } from 'react-bootstrap'
import { addTask } from '../JS/Actions/ActionsTasks'
 

const AddItems = () => {
    const [myinput, setMyinput] = useState("")
const dispatch = useDispatch()
const add=()=>{
    dispatch(addTask({type:myinput, id:Math.random(),isDone:false}))
}
    return (
        <div>
            <h1>TO DO APP</h1>
             <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={(e)=> setMyinput(e.target.value)}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" onClick={add}>Button</Button>
    </InputGroup.Append>
  </InputGroup>

        </div>
    )
}

export default AddItems
