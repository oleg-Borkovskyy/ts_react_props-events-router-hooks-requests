import { BrowserRouter, NavLink, Route } from "react-router-dom";
import UserPage from "./components/UsersPage";
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
          <Route path="/todos" exact>
            <TodosPage />
          </Route>
          <Route path="/users/:id">
            <UserItemPage />
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
