import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='nav'>
        <p className='logo'><strong>SamBlog</strong></p>
        <div>
          <Link href="/">
           Home
          </Link>
        </div>
    </div>
  )
}