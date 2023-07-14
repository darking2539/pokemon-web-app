import React from 'react'
import Image from 'next/image'
import NotFound404 from '../assets/404.png'
import TeamRocket from '../assets/teamRocket.png'
import TeamRocketMob from '../assets/Team_Rocket.png'
import Link from "next/link";

type Props = {}

export default function Notfoundpage({ }: Props) {
  return (
    <div className='flex flex-col justify-center items-center bg-notfound-red min-h-screen md:px-[20%] px-[5%]'>
      <div className='flex flex-col justify-center items-center'>
        <Image src={NotFound404} alt='notFound' />
        <Image className='absolute hidden md:flex' src={TeamRocket} width={400} alt='notFound' />
        <Image className='absolute md:hidden' src={TeamRocketMob} width={200} alt='notFound' />
      </div>
      <div className='flex text-2xl mt-10 text-center'>The rocket team has won this time.</div>
      <div className='mt-10'>
        <div className='pb-2 bg-yellow-500 rounded-lg w-max'>
          <Link href="/"><button className='p-2 px-8 bg-yellow-400 rounded-lg md:text-xl'>Return</button></Link>
        </div>
      </div>
    </div>
  )
}