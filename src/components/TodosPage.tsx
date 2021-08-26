import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';

const TodosPage:FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);


    useEffect(() => {
        fetchTodos();
      }, []);
    
      const fetchTodos = async () => {
        try {
          const response = await axios.get<ITodo[]>(
            "http://jsonplaceholder.typicode.com/todos?_limit=10"
          );
          setTodos(response.data);
        } catch (error) {
          alert(error);
        }
      };
    
    return (
        <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    );
};

export default TodosPage;