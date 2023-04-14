import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div style={{ background: "red", width: "100vw", height: "100vh" }}>
            <h3>Post data is not found</h3>
            <Link href='/'><button>Back to home</button></Link>
        </div>
    );
};

export default NotFound;