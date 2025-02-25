import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-orange-200 rounded-md'>
      <ul className='flex'>
        <li className='mx-3'>
          <Link href='/'>Home</Link>
        </li>
        <li className='mx-3'>
          <Link href='/'>About</Link>
        </li>
        <li className='mx-3'>
          <Link href='/'>Service</Link>
        </li>
        <li className='mx-3'>
          <Link href='/'>Menu</Link>
        </li>
        <li className='mx-3'>
          <Link href='/'>Pages</Link>
        </li>
        <li className='mx-3'>
          <Link href='/'>Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar