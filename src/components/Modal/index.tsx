"use client"
import React, { useEffect } from 'react'
import { useSwipeable } from 'react-swipeable';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image'
import PokemonIcon from '../../assets/Logo.svg'
import Link from "next/link";

type Props = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ menuOpen, setMenuOpen }: Props) {

  const [position, setPosition] = useSpring(() => ({
    y: -100,
    config: { tension: 200, friction: 20 }
  }));

  const handleSwipeUp = async (eventData: any) => {
    setPosition({ y: -100 });
    await timeout(300);
    setMenuOpen(false);
    setPosition({ y: -100 });
  };

  const handlers = useSwipeable({
    onSwipedUp: handleSwipeUp
  });

  function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
  }

  useEffect(() => {

    if (menuOpen) {
      setPosition({ y: -5});
    }

  }, [menuOpen])
  

  return (
    <>
      {menuOpen && (<div style={{ top: "0px", left: "0px", position: "fixed", zIndex: 20, backgroundColor: "rgba(0,0,0,0.4)", width: "100%", height: "100%" }}>
        <animated.div
          style={{
            transform: position.y.to(y => `translateY(${y}%)`)
          }}
        >
          <div {...handlers} style={{ zIndex: 40, background: "linear-gradient(#FFFF00, #FFFAA0)", width: "100%", borderRadius: "0px 0px 20px 20px", marginBottom: "20px" }}>
            <div className='flex flex-col pt-10 justify-center items-center mb-10'>
              <Image
                src={PokemonIcon}
                alt="Picture of the author"
                width={150}
              />
              <Link href="/" onClick={handleSwipeUp}><div className='font-sans text-2xl text-black cursor-pointer mt-5'>Home</div></Link>
              <Link href="/pokedex" onClick={handleSwipeUp}><div className='font-sans text-2xl text-black cursor-pointer mt-5'>Pokédex</div></Link>
              <Link href="/legendaries" onClick={handleSwipeUp}><div className='font-sans text-2xl text-black cursor-pointer mt-5'>Legendaries</div></Link>
              <Link href="/doc" onClick={handleSwipeUp}><div className='font-sans text-2xl text-black cursor-pointer mt-5 mb-10'>Documentation</div></Link>
            </div>
          </div>
        </animated.div>

      </div>)}
    </>
  )
}