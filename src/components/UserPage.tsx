import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { ITodo, iUser } from "../types/types";
import Card, { CardVariant } from "./Card";
import EventExample from "./EventExample";
import List from "./List";
import TodoItem from "./TodoItem";
import UserItem from "./UserItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<iUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<iUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  };


  return (
    <div>
      {/* <UserList users={users}/> */}
      <List
        items={users}
        renderItem={(user: iUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  );
};

export default UserPage;
