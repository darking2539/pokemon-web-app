"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ChipElement from '../ChipElement';
import axios from 'axios';

type Props = {
    number: string;
    name: string;
    imgUrl: string;
    detailUrl: string;
}

function addLeadingZeros(number: string) {
    const desiredLength = 3;
    const paddedNumber = number.toString().padStart(desiredLength, '0');
    return paddedNumber;
}

function firstUpper(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function PokemonCard({ number, name, imgUrl, detailUrl }: Props) {

    const [types, setTypes] = useState<string[]>([]);

    useEffect(() => {
        axios.get(detailUrl).then((resp: any) => {
            var typesBuffer: string[] = [];
            resp.data.types.map((data: any) => {
                typesBuffer.push(data.type.name)
            })
            setTypes(typesBuffer);
        })
    }, [detailUrl])

    return (
        <div className='relative flex flex-col bg-slate-100 w-[150px] rounded-lg border-black cursor-pointer'>
            <div className='z-[1]'>
                <div className='absolute bottom-0 bg-slate-200 w-[100%] h-[50%] rounded-lg z-[-1]' />
                <div className='p-3'>
                    <div className='flex justify-end text-gray-500'>{`#${addLeadingZeros(number)}`}</div>
                    <div className='flex justify-center'><Image className='' alt='dummy' width={150} height={150} src={imgUrl} priority={true} /></div>
                    <div className='grid grid-flow-col gap-1 justify-center mt-2 scale-75'>
                        {types.map((type: any, index: number) => {
                            return <ChipElement
                                key={index}
                                typeName={type} />
                        })}
                    </div>
                    <div className='flex justify-center text-lg mt-1'>{firstUpper(name)}</div>
                </div>
            </div>
        </div>
    )
}