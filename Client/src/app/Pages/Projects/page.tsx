import NavBar from "@/app/Components/NavBar";

export default function Projects(){
    interface ProjectStruc{
        projectName: string,
        projectSummary: string,
        projectGithubLink: string,
        projectTechnologyUsed: string[],
        backgroundImage: string
    }
    const ProjectItems: ProjectStruc[] = [
        {
            projectName: "AlieSohn Pottery",
            projectSummary: "AlieSohn Pottery is a collaborative E-Commerce Site which leverages React, tailwind and more to create a seamless first come first serve store experience",
            projectGithubLink: "https://github.com/Sweattowel/AlieSohn-Pottery",
            projectTechnologyUsed: [
                "React",
                "tailwind CSS",
                "Multer", 
                "dotnet", 
                "node.JS", 
                "Bcrypt",
                "JWT",
                "Material UI", 
                "Framer-motion", 
                "Prettier",
                "Twin server scripts with JS and C#",
            ],
            backgroundImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoK7f3kT8IfsnUKn4Nnzhu6pRJkUUsy1QfzA&s"
        },
        {
            projectName: "JavaScript Connector",
            projectSummary: "A designed data transmitter used to take in SQL data as JSON, transform that data with the editing of columns and specific sets before return or asssigning said data to a new location.",
            projectGithubLink: "https://github.com/Sweattowel/connector",
            projectTechnologyUsed: [
                "JSON",
                "Next.js",
                "Tailwind",
                "Typescript",
            ],
            backgroundImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDggV27FRdskqVK9t7SHHULSDNREOVOBM_A&s"
        },
        {
            projectName: "Research and development",
            projectSummary: "A multitude of basic projects and components that seek to explore and create based on new concepts, this includes but does not limit itself to, 2D Engine rendering, 3D engine rendering, API experimentation, New and experimental design choices! Please visit github to find out more",
            projectGithubLink: "https://github.com/Sweattowel/3dEngineAndOtherExperiments",
            projectTechnologyUsed: [
                "2D rotation and movement using Math",
                "4D matrix rotation handling X, Y, Z and W adjustment in a 3D environment",
                "Full Coordinate to Screen pipeline",
                "Controlling data through components",
            ],
            backgroundImage: "https://img.freepik.com/premium-photo/3d-black-white-low-polygon-topographic-terrain_167650-1307.jpg"
        },
        {
            projectName: "Used Car Ecommerce platform",
            projectSummary: "Recreation of a public Ecommerce site, Primarily used to learn Next.js with its file based routing, No monetary gain was achieved via this recreation.",
            projectGithubLink: "https://github.com/Sweattowel/car-page",
            projectTechnologyUsed: [
                "Next.js",
                "Tailwind",
                "VS",
            ],
            backgroundImage : "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
        },
        {
            projectName: "C# RPG",
            projectSummary: "A Educational Hobby activity in which i design and playest a C# written console RPG, its purpose being to learn and reinforce C# programming and to reinforce the basics of programming",
            projectGithubLink: "https://github.com/Sweattowel/C--RPG",
            projectTechnologyUsed: [
                "C#"
            ],
            backgroundImage : "https://be.tricentis.com/media-assets/2024/03/intro-c.png"
        },
        {
            projectName: "Developer Portfolio",
            projectSummary: "A portfolio personally created and designed with an emphasis on colour standards, style and up to date standards. Hosted on Vercel.",
            projectGithubLink: "https://github.com/Sweattowel/Portfolio",
            projectTechnologyUsed: [
                "React.JS",
                "Nasa Photo API",
                "Tailwind",
                "ENV",
            ],
            backgroundImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrChvSSIHyokvkzP2T_-ND99sy85k4yG8LBA&s"
        },
        {
            projectName: "Updated developer Portfolio",
            projectSummary: "An updated portfolio with a focus on removing outdated visual design created and designed with an emphasis on colour standards, style and up to date standards. Hosted on Vercel.",
            projectGithubLink: "https://github.com/Sweattowel/Portfolio",
            projectTechnologyUsed: [
                "React.JS",
                "Nasa Photo API",
                "Tailwind",
                "ENV",
            ],
            backgroundImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScN5-zCTmNhGUgEpVP6jA1QWfXZSw0jbGMNQ&s"
        },
    ]

    return (
        <main className="text-white bg-black" >
            <NavBar />
            <section>
                <ul className="flex flex-wrap justify-evenly w-[100%] m-auto bg-black overflow-hidden flex-grow p-5" >
                    {ProjectItems.map((project : ProjectStruc, index : number) => (
                        <div className=" rounded-xl h-full md:h-[60vh] w-full md:w-[40%] md:hover:scale-110  transition-all ease-in-out duration-[1000ms] mb-10"
                            key={index}
                        >
                            <li className={`flex flex-col ${index % 2 != 0 && "flex-row-reverse"} bg-black bg-opacity-60 items-center h-full rounded-xl`}
                                style={{
                                    backgroundImage: `url(${project.backgroundImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <section className="bg-black bg-opacity-60 h-[15vh] md:h-[25%] w-full grow flex flex-col justify-center items-center" >
                                    <h2 className="text-4xl text-center w-[80%]">{project.projectName}</h2>
                                    <a className="border-b" href={project.projectGithubLink}>
                                        Github
                                    </a>                                
                                </section>
                                <section className="p-5 bg-black bg-opacity-60 h-full w-full grow flex flex-row justify-center items-center">
                                    <div className="w-[50%] h-full flex justify-center items-center text-center">
                                        {project.projectSummary}
                                    </div>
                                    <ul className="no-scrollbar overflow-auto overscroll-contain w-[50%] h-full  flex flex-col justify-center items-center text-center divide-y">
                                        {project.projectTechnologyUsed.map((tech: string, techIndex: number) => (
                                            <li className="w-[50%] p-1" key={techIndex}>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </li>
                        </div>

                    ))}                    
                </ul>
            </section>
        </main>
    )
}
