import axios from "axios";
import { FC, useEffect, useState } from "react";
import List from "./List";
import UserItem from "./UserItem";
import { useHistory } from "react-router";
import { iUser } from "../types/types";

const UsersPage: FC = () => {
  const [users, setUsers] = useState<iUser[]>([]);
  const history=useHistory();

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
      <List
        items={users}
        renderItem={(user: iUser) => <UserItem onClick={(user)=>history.push('/users/'+user.id)} user={user} key={user.id} />}
      />
    </div>
  );
};

export default UsersPage;
