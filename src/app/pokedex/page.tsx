"use client"
import React, { useState, useEffect } from 'react'
import Pokeball from '../../assets/Pokeball.svg'
import Image from 'next/image'
import PokemonCard from '../../components/PokemonCard'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import "./pokemon.css"

type Props = {}

function checkSubstring(string: string, substring: string) {
    return string.includes(substring);
}

export default function Pokedex({ }: Props) {

    const [search, setSearch] = useState("");
    const [limit, setLimit] = useState(60);
    const [pokemon, setPokemon] = useState<any>([]);
    const [filterPokemon, setFilterPokemon] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    const handleSearchChange = (evt: any) => {
        setSearch(evt.target.value);
        setLimit(40);
    }

    const filterArray = () => {

        var pokemonArrayBuffer: any = [];
        var count = 0;
        pokemon.map((data: any) => {
            if (count < limit && (checkSubstring(data.name, search.toLowerCase()) || data.id == search)) {
                pokemonArrayBuffer.push(data);
                count++;
            }
        })

        setFilterPokemon(pokemonArrayBuffer);

    }

    const fetchDataMore = () => {
        setLimit(limit + 40);
    }

    const FetchData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000").then(res => {

            var pokemonBuffer: any = [];
            res.data.results.map((result: any) => {

                var urlData: string = result.url
                const trimmedString: string = urlData.endsWith("/") ? urlData.slice(0, -1) : urlData;
                const idNumber: string = trimmedString.substring(trimmedString.lastIndexOf("/") + 1);

                var payload: any = {
                    id: idNumber,
                    name: result.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idNumber}.png`
                }

                pokemonBuffer.push(payload);
            })
            setPokemon(pokemonBuffer);
            setTimeout(()=>{setLoading(false)}, 1000);
        })
    }

    useEffect(() => {
        setLoading(true);
        FetchData();
    }, [])

    useEffect(() => {
        filterArray();
    }, [pokemon, search, limit])

    return (
        <div className='flex flex-col text-center md:px-[15%] px-[5%] bg-red-dex min-h-screen'>
            <div className='flex flex-row mt-10'>
                <Image alt='pokeball' src={Pokeball} />
                <div className='text-3xl font-bold text-white md:text-3xl ml-3'>
                    Pokédex
                </div>
            </div>

            <input
                type="text"
                className='mt-5 border-2 rounded-3xl py-2 px-4 text-sm w-full bg-white-gray'
                placeholder='Find your pokemon...'
                value-={search}
                onChange={handleSearchChange} />

            <div className='bg-white mt-5 mb-5 rounded-xl drop-shadow-xl'>
                <InfiniteScroll
                    dataLength={filterPokemon.length} //This is important field to render the next data
                    next={fetchDataMore}
                    hasMore={true}
                    loader={<div />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="grid gap-2 grid-cols-fluid justify-items-center my-5">
                        {filterPokemon.map((data: any, index: number) => {
                            return (<PokemonCard
                                key={index}
                                number={data?.id}
                                name={data?.name}
                                imgUrl={data?.image} />)
                        })}
                    </div>
                </InfiniteScroll>
            </div >

            {loading && (
                <div style={{ top: "0px", left: "0px", position: "fixed", zIndex: 20, backgroundColor: "rgba(0,0,0,0.6)", width: "100%", height: "100%" }}>
                    <div className='fixed top-[50%] left-[50%] ml-[-58px]'>
                        <div style={{ border: "8px solid black", borderRadius: "50%" }}>
                            <div className='pokemon' />
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}