import React from 'react'
import { PokedexComponents } from '@/components'
import axios from 'axios';

type Props = {}

function delay(timeout: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

export default async function Pokedex({ }: Props) {


    var resp = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000");
    var pokemonAllData: any[] = [];
    
    await resp.data.results.map((result: any) => {

        var urlData: string = result.url
        const trimmedString: string = urlData.endsWith("/") ? urlData.slice(0, -1) : urlData;
        const idNumber: string = trimmedString.substring(trimmedString.lastIndexOf("/") + 1);
        var payload: any = {
            id: idNumber,
            name: result.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idNumber}.png`,
            detailUrl: urlData,
        }

        pokemonAllData.push(payload);
    })

    return (
        <>
            <PokedexComponents
                pokemon={pokemonAllData} />
        </>
    )
}