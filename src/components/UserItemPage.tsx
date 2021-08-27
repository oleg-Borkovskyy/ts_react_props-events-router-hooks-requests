import axios from "axios";
import { FC, useEffect, useState } from "react";
import { iUser } from "../types/types";
import { useParams,useHistory } from "react-router";

interface UserItemPageParams {
    id:string
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<iUser|null>(null);
  const params=useParams<UserItemPageParams>();
  const history= useHistory()

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get<iUser>(
        "https://jsonplaceholder.typicode.com/users/"+params.id
      );
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
        <button onClick={()=>history.push('/users')}>Back</button>
        <h1>User page {user?.name}</h1>
        <div>
            {user?.email}
        </div>
        <div>
            {user?.address.city} {user?.address.street} {user?.address.zipcode}
        </div>

    </div>
  );
};

export default UserItemPage;
