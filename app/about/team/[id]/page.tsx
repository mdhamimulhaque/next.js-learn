import { Suspense } from 'react';
import Comments from '@/app/components/comments/comments';
import { fetchPostComments, fetchUserPosts } from '@/app/fetchApi/userApi';
import { commentsType } from '@/app/interface/comments';
import { post } from '@/app/interface/post';
import React from 'react';

type UserID = {
    params: {
        id: string
    }
}

const TeamMemberPosts = async ({ params: { id } }: UserID) => {
    const postsData: Promise<post> = await fetchUserPosts(id);
    const post = await postsData;

    const commentsData: Promise<commentsType[]> = await fetchPostComments(id);
    const comments = await commentsData;
    return (
        <div style={{ background: "gray", padding: "20px", textAlign: "center" }}>
            <div>
                <h2 style={{ color: "yellow" }}>Title : {post?.title}</h2>
                <p>{post?.body}</p>
            </div>
            <Suspense fallback={<div className='loading'>Loading...</div>}>
                <Comments comments={comments} />
            </Suspense>
        </div>
    );
};

export default TeamMemberPosts;