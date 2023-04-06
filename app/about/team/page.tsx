
import { fetchUserData } from '@/app/fetchApi/userApi'
import { User } from '@/app/interface/user';
import React from 'react'

const Team = async () => {
    const users: User[] = await fetchUserData();
    return (
        <div className='team_wrapper'>
            {users.map(user => <div className='team_card' key={user.id}>
                <h4>{user?.name}</h4>
                <p>{user?.email}</p>
            </div>
            )}
        </div>
    )
}

export default Team
