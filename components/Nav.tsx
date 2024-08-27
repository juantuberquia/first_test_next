import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='px-5 py-4 flex justify-between'>
      <p className='font-semibold text-white' > Cloud Corp</p>
      <div className="flex gap-x-2 text-white">
        <Link href="/" className="">Home Page</Link>
        <Link href="/performance" className="">performance</Link>
        <Link href="/scale" className="">scale</Link>
        <Link href="/reliability" className="">reliability</Link>
      </div>
    </nav>
  )
}

export default Nav