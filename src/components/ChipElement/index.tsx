import React from 'react'
import Image from 'next/image'
import FlyingIcon from '../../assets/type/flying.svg'
import FireIcon from '../../assets/type/fire.svg'
import GrassIcon from '../../assets/type/grass.svg'
import PoisonIcon from '../../assets/type/poison.svg'
import WaterIcon from '../../assets/type/water.svg'
import BugIcon from '../../assets/type/bug.svg'
import RockIcon from '../../assets/type/rock.svg'
import GroundIcon from '../../assets/type/ground.svg'
import ElectricIcon from '../../assets/type/electric.svg'
import PhysicIcon from '../../assets/type/psychic.svg'
import NormalIcon from '../../assets/type/normal.svg'
import FairyIcon from '../../assets/type/fairy.svg'
import SteelIcon from '../../assets/type/steel.svg'
import DragonIcon from '../../assets/type/dragon.svg'
import FightingIcon from '../../assets/type/fighting.svg'
import DarkIcon from '../../assets/type/dark.svg'
import IceIcon from '../../assets/type/ice.svg'
import GhostIcon from '../../assets/type/ghost.svg'

type Props = {
    typeName: string;
}

function firstUpper(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const typeToIcon: Record<string, any> = {
    fire: FireIcon,
    water: WaterIcon,
    grass: GrassIcon,
    electric: ElectricIcon,
    psychic: PhysicIcon,
    bug: BugIcon,
    flying: FlyingIcon,
    poison: PoisonIcon,
    normal: NormalIcon,
    fairy: FairyIcon,
    ground: GroundIcon,
    fighting: FightingIcon,
    rock: RockIcon,
    steel: SteelIcon,
    ice: IceIcon,
    ghost: GhostIcon,
    dragon: DragonIcon,
    dark: DarkIcon
};


const typeToColor: Record<string, string> = {
    fire: "#FF9D55",
    water: "#5090D6",
    grass: "#63BC5A",
    electric: "#F4D23C",
    psychic: "#FA7179",
    bug: "#91C12F",
    flying: "#89AAE3",
    poison: "#B567CE",
    normal: "#919AA2",
    fairy: "#EC8FE6",
    ground: "#D97845",
    fighting: "#CE416B",
    rock: "#C5B78C",
    steel: "#5A8EA2",
    ice: "#73CEC0",
    ghost: "#5269AD",
    dragon: "#0B6DC3",
    dark: "#5A5465"
};


function GetIcon(srcName: string) {
    return <Image className='m-0.5' alt="icon" src={srcName}/>
}

export default function ChipElement({ typeName }: Props) {

    const icon = typeToIcon[typeName];
    const color = typeToColor[typeName];

    return (
        <span className="flex justify-center items-center w-max bg-blue-100 text-blue-800 text-xs font-medium py-0.5 px-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
            style={{ backgroundColor: color, color: "white" }}>
            <div className='flex justify-center items-center w-[18px] h-[18px] p-[0.6 px] my-1 mr-1 bg-white rounded-[50%]'>
                {GetIcon(icon)}
            </div>
            <div className=''>{firstUpper(typeName)}</div>
        </span>
    )
}