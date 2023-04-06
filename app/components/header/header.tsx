import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/about/team">Team</Link></li>
            </ul>
        </header>
    );
};

export default Header;