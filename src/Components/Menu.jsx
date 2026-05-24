import React, { useEffect, useState } from 'react'
import { assets } from '../assets/asset'
import { useAppContext } from '../context/AppContext';

const Menu = () => {

  const {openMenu, setOpenMenu, setSection} = useAppContext();
  const navItem = [
    {name: 'Home', id: 'Home'},
    {name: 'About', id: 'About'},
    {name: 'Skills', id: 'Skills'},
    {name: 'Projects', id: 'Projects'},
    {name: 'Contact', id: 'Contact'}
  ]

    const contact = [
      {
        img: assets.facebook_logo,
        link: 'https://www.facebook.com/phimphabut.torwai'
      },
      // {
      //   img: assets.github_logo,
      //   link: '',
      // },
    ]

  return (
    <div className={`fixed h-full w-full top-0 left-0 px-8 z-10 backdrop-blur-xl duration-300 md:hidden ${openMenu ? "translate-none" : "-translate-x-full"} `}>
      <div className='flex justify-between items-center py-4 border-b-2 border-border'>
        <p className='text-primary text-3xl font-bold'>
          Torwai<span className='text-blue'>.</span>
        </p>
        <button className='flex items-center justify-center cursor-pointer' onClick={() => setOpenMenu(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 15 15">
            <path fill="#69D9FE" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27" />
          </svg>
        </button>
      </div>

      <div className='py-6'>
        <ul className='flex flex-col items-center justify-center gap-3 text-primary text-2xl font-semibold'>
          {navItem.map((item, index) => (
            <li className='button-line relative cursor-pointer' key={index} onClick={() => {setSection(item.name), setOpenMenu(false)}}>
              <span>{item.name}</span>
              <span className='text-blue'>.</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex justify-center items-center gap-3 py-4 border-t-2 border-border'>
        {contact.map((item, index) => (
          <a className='flex items-center justify-center w-10 h-10 border-2 border-border rounded-md p-[2px] cursor-pointer duration-100 hover:bg-secondary-bg' href={item.link} target='_blank' key={index} dangerouslySetInnerHTML={{__html: item.img}}>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Menu
