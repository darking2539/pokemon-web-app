import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PokemonBanner from '../../assets/banner.png'
import PokemonBannerMobile from '../../assets/BannerComplete.png'

type Props = {}

export default function Page({ }: Props) {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between items-center bg-third shadow-2xl pb-5' style={{ background: "linear-gradient(#F6E24D, #F5DB13)", minHeight: "90vh" }}>
      <div className='flex flex-col p-5 md:pl-[10%] items-center md:items-start'>
        <div className='text-5xl'>Find all your</div>
        <div className='text-5xl'>favorite</div>
        <div className='text-5xl'>Pokemon</div>
        <div className='mt-10 text-lg text-center md:text-start'>
          You can know the type of Pokemon, its strengths, disadvantages and abilities
        </div>
        <div className='mt-10'>
          <div className='pb-2 bg-green-500 rounded-lg w-max'>
            <Link href="/pokedex"><button className='p-2 px-8 bg-green-400 rounded-lg md:text-xl'>See Pokemons</button></Link>
          </div>
        </div>
      </div>
      <div className='flex'>
        <Image
          className='flex md:hidden mt-10'
          alt="Picture of the author"
          src={PokemonBannerMobile} />
        <Image
          className='md:flex hidden'
          alt="Picture of the author"
          src={PokemonBanner} />
      </div>
    </div>
  )
}