import React from 'react'

const Header = () => {
  return (
    <header className='p-2.5 flex w-full items-center justify-between fixed top-0 z-50 bg-white'>
      <nav className='flex-grow basis-0  mx-4'>
        <a href="/"><img className='max-h-[60px] max-w-[195px]' src="./img/logo.png" alt="Logo" /></a>
      </nav>
      <nav className=''>
        <ul className='font-montserrat font-bold text-lg flex [&>li>a]:inline-block [&>li>a]:px-6 text-green-veri'>
          <li><a className='hover:text-blue-veri hover:text-xl duration-200' href="/">Instalaciones</a></li>
          <li><a className='hover:text-blue-veri hover:text-xl duration-200' href="/1">Acerca de</a></li>
          <li><a className='hover:text-blue-veri hover:text-xl duration-200' href="/2">Contáctanos</a></li>
        </ul>
      </nav>
      <nav className='flex flex-grow basis-0 justify-end mx-4'>
        <ul className='flex'>
          <li><a href="/"><img src="./img/whats.webp" alt="" /></a></li>
          <li className='ml-4'><a  href="/"><img src="./img/email.webp" alt="" /></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header