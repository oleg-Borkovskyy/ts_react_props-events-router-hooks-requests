import React, { FC, useState } from 'react';



const EventExample:FC = () => {
const [value,setValue]=useState <string>('')
const[isDrag,setIsDrag]=useState<boolean>(false)
const [isDrop,setIsDrop]=useState<boolean>(false)


const changeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(event.target.value);
}

const dragHandler = (event:React.DragEvent<HTMLDivElement>)=>{

}

const dropHandler =(event:React.DragEvent<HTMLDivElement>)=>{
    event.preventDefault()
    setIsDrag(false)
    console.log('Drop')
    setIsDrop(true)
}

const leaveHandler =(event:React.DragEvent<HTMLDivElement>)=>{
    event.preventDefault()
    setIsDrag(false)
    setIsDrop(false)
}

const overHandle =(event:React.DragEvent<HTMLDivElement>)=>{
    event.preventDefault()
    setIsDrag(true)
}

const clickHandler = (event:React.MouseEvent)=>{
    console.log(value)
}


    return (
        <div>
            <input type='text' onChange={changeHandler}/>
            <button onClick={clickHandler}>Get Value</button>
            <div onDrag={dragHandler} draggable style={{width:200,height:200, background:'red'}}></div>
            <div 
            onDrop={dropHandler} 
            onDragLeave={leaveHandler} 
            onDragOver={overHandle}
            style={{width:200,height:200, background:isDrag?isDrop?'green':'blue':'red', marginTop:100}}
            >
            </div>

        </div>
    );
};

export default EventExample;