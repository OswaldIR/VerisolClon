import React from 'react'

const Main = () => {
  return (
    <main className='mt-[80px] w-full relative text-white -z-40'>
      <div className='fixed'>
        <img className='static -z-40 w-full' src="./img/panel.webp" alt="" />
        <div className=' w-[60%] mx-auto absolute'>
          <h1 className='font-montserrat font-bold text-4xl'>Una mejor manera de suministrarle energía a su hogar, empresa o negocio</h1>
          <p className='text-lg pb-8'>Nosotros nos encargamos de la instalación fotovoltaica con estándares muy altos de calidad. 
          Somos el único proveedor que usted va a requerir, desde que pide la instalación de los paneles 
          solares hasta que están inteconectados con CFE.
          </p>
          <a className='bg-white/10 rounded-full border-2 p-2 hover:bg-white hover:text-black duration-200' href="/">Pedir una cotización</a>
        </div>
      </div>
    </main>
  )
}

export default Main