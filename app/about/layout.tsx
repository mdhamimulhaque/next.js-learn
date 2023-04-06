import Link from 'next/link'
import React from 'react'

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='aboutLayout'>
            <div className='sidebar'>
                <h2>About page layout</h2>
                <Link href="/"><button>back to Home</button></Link>
            </div>
            <div className='team'>
                {children}
            </div>

        </div>
    )
}

export default AboutLayout
