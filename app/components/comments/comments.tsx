import { commentsType } from '@/app/interface/comments';
import React from 'react';

type Props = {
    comments: commentsType[]
}

const Comments = ({ comments }: Props) => {

    return (
        <div>
            <h2>all comments {comments?.length}</h2>
            {comments?.map(comment =>
                <div key={comment?.id} style={{ background: "skyblue", marginBottom: "20px", padding: "20px" }}>
                    <small>{comment?.name}</small>
                    <p>{comment?.body}</p>
                    <h4>{comment?.email}</h4>
                </div>)}
        </div>
    );
};

export default Comments;