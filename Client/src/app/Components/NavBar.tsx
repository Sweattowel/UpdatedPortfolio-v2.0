"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface linkStruc {
    title: string,
    directory: string
}

const Links : linkStruc[] = [
    {
        title: "Index",
        directory: "/"
    },
    {
        title: "Landing",
        directory: "/Pages/LandingPage"
    },
    {
        title: "Projects",
        directory: "/Pages/Projects"
    },
    {
        title: "Contact",
        directory: "/Pages/Contact"
    }
]

export default function NavBar(){
    const [screenWidth, setScreenWidth] = useState(768);
    
    useEffect(() => {
        setScreenWidth(window.innerWidth)
    },[])
    
    return (
        <main className="bg-black text-white flex flex-row justify-around items-center p-2 h-[5vh] z-[-100]" >

            <h1 className="font-bold font-serif text-xs md:text-2xl " >
                Thomas Moloney
            </h1>
            {screenWidth > 768 ? (
                <HomeComputerMenu />
            ) : (
                <MobileMenu />
            )}
            
            
            <FunButton />
        </main>
    )
}

const HomeComputerMenu = () => {
    return (
        <ul
            className="w-[60%] border h-full flex flex-row justify-evenly items-center"
        >
            {Links.map((link: linkStruc, index: number) => (
                <Link  className="hover:scale-110 transitions ease-in-out duration-500 text-sm md:text-lg"
                    href={link.directory}
                    key={index}
                >
                    {link.title}
                </Link>
            ))}
        </ul>
    )
}
const MobileMenu = () => {
    const [appear, setAppear] = useState(false);

    return (
        <div className=" fixed top-[0.5vh] right-0 w-[15vw] h-[5vh] z-[100]">
            <button className="rounded-full bg-white text-black p-1"
                onClick={() => setAppear(!appear)}
            >
                MENU
            </button>
            
            <div
                className={`top-[5vh] transition-all duration-1000 ease-in-out fixed bg-white divide-y text-black w-[25vw] flex flex-col justify-evenly ${
                    appear ? 'h-[50vh] opacity-100' : 'h-0 opacity-0'
                } overflow-hidden right-0`}
            >
                <ul className="w-full h-full divide-y ">
                    {Links.map((link: linkStruc, index: number) => (
                        <Link
                            className="hover:scale-110 transitions ease-in-out duration-500 text-sm md:text-lg flex justify-center items-center h-[25%]"
                            onClick={() => setAppear(false)}
                            href={link.directory}
                            key={index}
                        >
                            {link.title}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const FunButton = () => {
    const colours: string[] = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen"
    ];
    
    
    const [textColour, setTextColour] = useState("black");
    const [bgColour, setBgColour] = useState("white");
    
    function handleNewColour(){
        setTextColour(colours[Math.floor(Math.random() * colours.length)]);
        setBgColour(colours[Math.floor(Math.random() * colours.length)]);
    }

    return (
        <button style={{color: textColour, backgroundColor: bgColour}} className={`bg-${bgColour} text-${textColour} w-[50px] p-1 rounded-2xl hover:bg-gray-600 transition ease-in-out duration-500`}
            onClick={() => handleNewColour()}
        >
            Fun
        </button>        
    )
}

