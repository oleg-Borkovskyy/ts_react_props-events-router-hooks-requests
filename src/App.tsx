import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import EventExample from "./components/EventExample";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import { ITodo, iUser } from "./types/types";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import DragDropPage from "./components/DragDropPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/todos'>List of TODO</NavLink>
            <NavLink to='/dragDrop'>Drag Drop</NavLink>

          </div>
          <Route path="/users" exact>
            <UserPage />
          </Route>
          <Route path="/user/:id">
            <UserItemPage />
          </Route>

          <Route path="/todos" exact>
            <TodosPage />
          </Route>
          <Route path="/todo/:id">
            <TodoItemPage />
          </Route>

          <Route path="/dragDrop" exact>
            <DragDropPage />
          </Route>

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
