import React from 'react'

const Main = () => {
  return (
    <main className='mt-[80px] w-full relative text-white -z-40'>
      <div className='fixed h-full'>
        <img className='w-full absolute -z-50' src="./img/panel.webp" alt="" />
        <div className='ml-[5%] mt-[10%] mx-auto'>
          <h2 className='font-montserrat font-bold text-[45px]'>Una mejor manera de suministrarle energía a su hogar, empresa o negocio</h2>
          <p className='text-lg pb-8'>Nosotros nos encargamos de la instalación fotovoltaica con estándares muy altos de calidad. 
          Somos el único proveedor que usted va a requerir, desde que pide la instalación de los paneles 
          solares hasta que están inteconectados con CFE.
          </p>
          <a className='bg-white/10 rounded-full border-2 p-2 hover:bg-white hover:text-black duration-200' href="/">Pedir una cotización</a>
        </div>
      </div>
      <section id='arrays'>
        <h1>
          Instalaciones
        </h1>
        <div className='flex'>
          <div className='flex'>1</div>
          <div className='flex'>2</div>
        </div>
      </section>
    </main>
  )
}

export default Main