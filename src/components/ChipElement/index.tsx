import React from 'react'

type Props = {
    typeName: string;
}

function firstUpper(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const typeToIcon: Record<string, any> = {
    fire: "🔥",
    water: "💧",
    grass: "🍃",
    electric: "⚡",
    psychic: "🔮",
    bug: "🐛",
    flying: "🦅",
    poison: "☠️",
    normal: "⚪️",
    fairy: "🧚",
    ground: "🏔️",
    fighting: "🥊",
    rock: "🪨",
    steel: "🔧",
    ice: "❄️",
    ghost: "👻",
    dragon: "🐉",
    dark: ""
};


const typeToColor: Record<string, any> = {
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

export default function ChipElement({ typeName }: Props) {

    const icon = typeToIcon[typeName];
    const color = typeToColor[typeName];

    return (
        <span className="flex justify-center w-max bg-blue-100 text-blue-800 text-xs font-medium py-0.5 px-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
            style={{ backgroundColor: color, color: "white" }}>
            <div className='mr-1'>{icon}</div>
            <div>{firstUpper(typeName)}</div>
        </span>
    )
}