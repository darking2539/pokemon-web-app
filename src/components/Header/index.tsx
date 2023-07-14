"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link";
import MenuIcon from '../../assets/BurgenBtn.svg'
import CloseIcon from '../../assets/closeIcon.svg'
import PokemonIcon from '../../assets/Logo.svg'
import Modal from '../Modal'

export default function index() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const menuOpenClick = () => {
        setMenuOpen(true)
    }

    const menuCloseClick = () => {
        setMenuOpen(false)
    }

    return (
        <div className='flex justify-between p-5 bg-third shadow-black shadow-sm'>
            <div className="text-4xl font-extrabold">
                <Image
                    className='flex md:hidden'
                    src={PokemonIcon}
                    alt="Picture of the author"
                    width={100}
                />
                <Image
                    className='hidden md:flex'
                    src={PokemonIcon}
                    alt="Picture of the author"
                    width={150}
                />
            </div>

            <div className="hidden md:flex gap-6 md:gap-10 items-center">
                <Link href="/"><div className='font-sans text-xl text-black cursor-pointer mr-4'>Home</div></Link>
                <Link href="/pokedex"><div className='font-sans text-xl text-black cursor-pointer mr-4'>Pokédex</div></Link>
                <Link href="/lengendaries"><div className='font-sans text-xl text-black cursor-pointer mr-4'>Legendaries</div></Link>
                <Link href="/doc"><div className='font-sans text-xl text-black cursor-pointer mr-4'>Documentation</div></Link>
            </div>

            <div className='flex items-center md:hidden pt:5 cursor-pointer'>
                <Image
                    src={MenuIcon}
                    onClick={menuOpenClick}
                    alt="Picture of the author"
                />
            </div>


            <Modal
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

        </div>
    )
}