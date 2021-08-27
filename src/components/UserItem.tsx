import React, { FC, MouseEventHandler } from 'react';
import { iUser } from '../types/types';
interface UserItemProps {
    user:iUser;
    onClick:(user:iUser)=> void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={()=>onClick(user)} style={{padding:'15px', border:'1px solid gray'}}>
        {user.id}. {user.name} lives in {user.address.city} on the street {user.address.street}
    </div>
);
};

export default UserItem;