import React from 'react'
import Image from 'next/image'
import Bulbasaur from '../../assets/Bulbasaur.png'

type Props = {
    number: string;
    name: string;
    imgUrl: string;
}

function addLeadingZeros(number: string) {
    const desiredLength = 3;
    const paddedNumber = number.toString().padStart(desiredLength, '0');
    return paddedNumber;
}

function firstUpper(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function PokemonCard({ number, name, imgUrl }: Props) {
    return (
        <div className='flex flex-col bg-white w-[150px] rounded-lg border-black drop-shadow-xl'>
            <div className='absolute bottom-0 bg-gray-100 w-[100%] h-[50%] rounded-lg z-[-1]'/>
                <div className='p-3'>
                    <div className='flex justify-end text-gray-500'>{`#${addLeadingZeros(number)}`}</div>
                    <div className='flex justify-center'><Image className='' alt='dummy' width={150} height={150} src={imgUrl} /></div>
                    <div className='flex justify-center text-lg mt-1'>{firstUpper(name)}</div>
                </div>
     
        </div>
    )
}