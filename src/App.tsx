import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import UserItem from './components/UserItem';
import UserList from './components/UserList';
import { iUser } from './types/types';

const App = () => {
  const [users,setUsers]=useState<iUser[]>([])

  useEffect(()=>{
    fetchUsers();
  },[])
  const  fetchUsers=async ()=>{
    try {
        const response= await axios.get<iUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <Card onClick={(number)=>console.log(number)} width='200px' height='200px' variant={CardVariant.outline}>
        <button>button</button>
      </Card>
      {/* <UserList users={users}/> */}
      <List items={users} renderItem={(user:iUser)=><UserItem user={user} key={user.id}/>}/>
    </div>
  );
};

export default App;