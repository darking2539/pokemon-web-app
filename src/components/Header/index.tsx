"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link";
import MenuIcon from '../../assets/BurgenBtn.svg'
import CloseIcon from '../../assets/closeIcon.svg'
import PokemonIcon from '../../assets/Logo.svg'
import Modal from '../Modal'
import { debounce } from '@/utils/debounce';


export default function Header() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    const navbarStyles: any = {
        position: 'sticky',
        top: 0,
        transition: 'top 0.6s',
      }

    const menuOpenClick = () => {
        setMenuOpen(true)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    
        setPrevScrollPos(currentScrollPos);
      }, 100);

    // new useEffect:
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);


    return (
        <div className='flex justify-between p-5 bg-third shadow-black shadow-sm z-10' style={{...navbarStyles, top: visible ? '0' : '-200px'}}>
            <div className="text-4xl font-extrabold">
                <Image
                    className='flex md:hidden'
                    src={PokemonIcon}
                    alt="Picture of the author"
                    width={100}
                    onClick={scrollToTop}
                />
                <Image
                    className='hidden md:flex'
                    src={PokemonIcon}
                    alt="Picture of the author"
                    width={150}
                    onClick={scrollToTop}
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