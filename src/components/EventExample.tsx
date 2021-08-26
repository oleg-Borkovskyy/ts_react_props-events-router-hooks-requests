import React, { FC, useRef, useState } from 'react';



const EventExample:FC = () => {
const [value,setValue]=useState <string>('')
const[isDrag,setIsDrag]=useState<boolean>(false)
const [isDrop,setIsDrop]=useState<boolean>(false)
const inputRef=useRef<HTMLInputElement>(null)


const changeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(event.target.value);
}

const dragHandler = (event:React.DragEvent<HTMLDivElement>)=>{

}

const dropHandler =(event:React.DragEvent<HTMLDivElement>)=>{
    event.preventDefault()
    setIsDrag(false)
    console.log('Drop')
    !isDrop?setIsDrop(true):setIsDrop(false)
    
}

const leaveHandler =(event:React.DragEvent<HTMLDivElement>)=>{
    event.preventDefault()
    setIsDrag(false)

}

const overHandle =(event:React.DragEvent<HTMLDivElement>)=>{
    event.preventDefault()
    setIsDrag(true)
}

const clickHandler = (event:React.MouseEvent)=>{
    console.log(inputRef.current?.value)

}


    return (
        <div>
            <input type='text' onChange={changeHandler} placeholder='controlled'/>
            <input ref={inputRef} type='text' placeholder='notControlled'/>
            <button onClick={clickHandler}>Get Value</button>
            <div onDrag={dragHandler} draggable style={{width:200,height:200, background:'red'}}></div>
            <div 
            onDrop={dropHandler} 
            onDragLeave={leaveHandler} 
            onDragOver={overHandle}
            style={{width:200,height:200, background:isDrop?'green':isDrag?'blue':'red', marginTop:100}}
            >
            </div>

        </div>
    );
};

export default EventExample;