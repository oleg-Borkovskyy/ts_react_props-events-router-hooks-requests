import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Card, { CardVariant } from './components/Card';
import EventExample from './components/EventExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import UserList from './components/UserList';
import { ITodo, iUser } from './types/types';

const App = () => {
  const [users,setUsers]=useState<iUser[]>([])
  const [todos,setTodos]=useState<ITodo[]>([])

  useEffect(()=>{
    fetchUsers();
    fetchTodos();
  },[])

  const  fetchUsers=async ()=>{
    try {
        const response= await axios.get<iUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }

  const  fetchTodos=async ()=>{
    try {
        const response= await axios.get<ITodo[]>('http://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(response.data)
    } catch (error) {
      alert(error)
    }
  }


  return (
    <div>
      <EventExample/>
      <Card onClick={(number)=>console.log(number)} width='200px' height='200px' variant={CardVariant.outline}>
        <button>button</button>
      </Card>
      {/* <UserList users={users}/> */}
      <List items={users} renderItem={(user:iUser)=><UserItem user={user} key={user.id}/>}/>
      <List items={todos} renderItem={(todo:ITodo)=><TodoItem todo={todo} key={todo.id}/>}/>
    </div>
  );
};

export default App;