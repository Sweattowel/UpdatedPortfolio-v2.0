'use client'

import NavBar from "@/app/Components/NavBar";
import { useEffect, useState } from "react";
import {CollectPosts} from "../../../../Server/MainServer"

export default function Projects(){
    interface ProjectStruc{
        projectName: string,
        projectSummary: string,
        projectGithubLink: string,
        projectTechnologyUsed: string[],
        backgroundImage: string
    }

    const [projects, setProjects] = useState<ProjectStruc[]>([
        {
            projectName: "",
            projectSummary: "",
            projectGithubLink: "",
            projectTechnologyUsed: [],
            backgroundImage: ""
        },
        {
            projectName: "",
            projectSummary: "",
            projectGithubLink: "",
            projectTechnologyUsed: [],
            backgroundImage: ""
        },
        {
            projectName: "",
            projectSummary: "",
            projectGithubLink: "",
            projectTechnologyUsed: [],
            backgroundImage: ""
        },
        {
            projectName: "",
            projectSummary: "",
            projectGithubLink: "",
            projectTechnologyUsed: [],
            backgroundImage: ""
        },
    ])
    const handleGetPosts = async () => {
        try {
            const response = await CollectPosts()
            if (response.length){
                sessionStorage.setItem("TempProjectData", JSON.stringify(response))
                setProjects(response)
            }
            
        } catch (error) {
            console.log("Failed to collect Projects", error)
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("TempProjectData") !== null){
            let newProjects = sessionStorage.getItem("TempProjectData")
            setProjects(JSON.parse(newProjects!))
        } else {
            handleGetPosts();
        }
    },[])

    return (
        <main className="text-white bg-black" >
            <NavBar />
            <section className="h-[100vh]">
                <ul className="flex flex-wrap justify-evenly w-[100%] m-auto bg-black overflow-hidden flex-grow p-5" >
                    {projects.map((project : ProjectStruc, index : number) => (
                        <div className={`${!project.projectName && "transition ease-in-out duration-500 animate-pulse bg-gray-200 "} rounded-xl h-full md:h-[60vh] w-full md:w-[40%] md:hover:scale-110  transition-all ease-in-out duration-[1000ms] mb-10`}
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
                                        {project.projectGithubLink ? "Github" : ""}
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
