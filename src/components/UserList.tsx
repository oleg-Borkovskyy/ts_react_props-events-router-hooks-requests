import React, { FC } from 'react';
import { iUser } from '../types/types';
import UserItem from './UserItem';

interface UserListProps {
    users:iUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user =>
                <UserItem key={user.id} user={user}/>
                )}
        </div>
    );
};

export default UserList;