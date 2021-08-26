import React, { FC } from 'react';
import { iUser } from '../types/types';
interface UserItemProps {
    user:iUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div  style={{padding:'15px', border:'1px solid gray'}}>
        {user.id}. {user.name} lives in {user.address.city} on the street {user.address.street}
    </div>
);
};

export default UserItem;