import React from "react";
import Image from "next/image";
import axios from 'axios';
import { typeToColor } from "@/utils/colorSelection";
import BackButton from "../../../assets/backButton.svg"
import PokeballBG from "../../../assets/pokeballBG.svg"
import { addLeadingZeros, firstUpper } from "@/utils/stringPayload";
import { ChipElement } from "@/components";
import Link from "next/link";

type Props = {
    params: any;
};

export default async function PokemonDetail({ params }: Props) {
    const { id } = params;
    const data: any = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const jsonDetail: any = data.data;
    //console.log(data);
    const imgUrl: any = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const types: string[] = [];
    await jsonDetail.types.map((data: any) => {
        types.push(data.type.name)
    })
    const abilities: string[] = [];
    await jsonDetail.abilities.map((data: any) => {
        abilities.push(data.ability.name)
    })
    const pokemonType: string = jsonDetail.types[0].type.name;
    const colorCode: string = typeToColor[pokemonType];
    const weight: string = jsonDetail.weight;
    const height: string = jsonDetail.height;

    return (
        <div className="h-screen" style={{ backgroundColor: colorCode }}>
            <div className="flex items-center justify-between px-10 pt-10">
                <div className="flex flex-row">
                    <Link href="/pokedex"><Image alt="backButton" src={BackButton} /></Link>
                    <div className="text-3xl text-white font-bold ml-5">{firstUpper(jsonDetail.name)}</div>
                </div>
                <div className="text-base font-bold text-white">{`#${addLeadingZeros(id)}`}</div>
            </div>
            <Image className="absolute top-[20px] left-[45%]" alt="backButton" src={PokeballBG} />
            <div className="flex justify-center mt-10">
                <Image className="z-10" alt="pokemon" width={250} height={250} src={imgUrl} />
            </div>

            <div className="px-5 mt-[-70px]">
                <div className="bg-white h-[300px] rounded-2xl" style={{ boxShadow: "0 0 10px rgb(0 0 0 / 20%)" }}>
                    <div className='grid grid-flow-col gap-1 justify-center pt-[70px]'>
                        {types.map((type: any, index: number) => {
                            return <ChipElement
                                key={index}
                                typeName={type} />
                        })}
                    </div>
                    <div className="flex justify-center mt-3">
                        <div className="text-lg font-bold items-center" style={{ color: colorCode }}>About</div>
                    </div>

                    <div className="flex flex-row justify-evenly mt-2">
                        <div className="flex flex-col grow basis-0 justify-end justify-self-start items-center px-3 border-r">
                            <div className="text-sm mb-3">{`${weight} kg`}</div>
                            <div className="text-xs text-gray-500">Weight</div>
                        </div>
                        <div className="flex flex-col justify-end items-center px-[10%]">
                            <div className="text-sm mb-3">{`${height} m`}</div>
                            <div className="text-xs text-gray-500">Height</div>
                        </div>
                        <div className="flex flex-col grow basis-0 justify-end justify-self-end items-center px-3 border-l">
                            {abilities.map((ability: string) => {
                                return (<div className="text-sm">{firstUpper(ability)}</div>);
                            })}
                            <div className="text-xs text-gray-500 mt-1">Abilities</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}