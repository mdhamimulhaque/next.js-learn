
import { fetchUserData } from '@/app/fetchApi/userApi'
import { User } from '@/app/interface/user';
import React from 'react'

const Team = async () => {
    const usersData: Promise<User[]> = await fetchUserData();
    const users = await usersData;
    return (
        <>
            <h2>Our Teams</h2>
            <div className='team_wrapper'>
                {users.map(user => <div className='team_card' key={user.id}>
                    <h4>{user?.name}</h4>
                    <p>{user?.email}</p>
                </div>
                )}
            </div>
        </>
    )
}

export default Team
