"use client"
import NavBar from "@/app/Components/NavBar";



export default function LandingPage(){
    return (
        <main>
            <NavBar />
            <Top />
            <Middle />
            <Bottom />
        </main>
    )
}

const Top = () => {
    return (
        <section
            className="flex h-[70vh] md:h-[50vh] text-white flex justify-center items-center"
            style={{
                backgroundImage: "url(https://i0.wp.com/picjumbo.com/wp-content/uploads/dark-tech-glowing-background-free-photo.jpg?w=2210&quality=70)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div
                className="md:bg-black  md:bg-opacity-60 md:w-[50%] md:mr-[25%] md:mb-[25%] h-full md:h-[50%] flex flex-col justify-center items-center p-16"
            >
                <h2
                    className="text-4xl w-full text-center opacity-100 font-serif"
                >
                    Beauty by design
                </h2>
                <p
                    className="text-center"
                >
                    Web development
                </p>
            </div>

        </section>        
    )
}
const Middle = () => {
    interface cardStruc {
        title: string,
        descriptors: string[]
    }
    const Cards : cardStruc[] = [
        {
            title: "Our Core Principles",
            descriptors: [
                "Built to maintain",
                "Ease of use",
                "Progressive design",
            ]
        },
        {
            title: "Responsive Web Design",
            descriptors: [
                "Responsive layouts",
                "SEO-friendly",
                "Cross-browser compatibility",
            ]
        },
        {
            title: "Mobile Optimization",
            descriptors: [
                "Optimized performance",
                "Mobile-first approach",
                "Accessibility compliance",
            ]
        },
        {
            title: "Best Practices",
            descriptors: [
                "Scalable architecture",
                "Clean code structure",
                "Semantic HTML",
            ]
        },
        {
            title: "User-Centered Design",
            descriptors: [
                "Customizable templates",
                "Intuitive navigation",
                "Engaging user experience",
            ]
        },
        {
            title: "Modern Web Standards",
            descriptors: [
                "Modular components",
                "Consistent UI design",
                "Modern CSS techniques",
            ]
        },
    ];
    
    return (
        <section className="h-full md:h-[50vh] bg-black flex justify-between text-white" >
            <div className="flex flex-row w-full flex-wrap justify-center items-center grid grid-rows-2 grid-cols-2 md:grid-cols-3" 
                        style={{
                            backgroundImage: "url(https://us.123rf.com/450wm/samotrebizan/samotrebizan1603/samotrebizan160300242/53072599-portrait-of-beautiful-blonde-woman-in-darkness-with-soft-light-on-her-face-pensive-silhuette-in-on.jpg?ver=6",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
            >
                {Cards.map((card, index: number) => (
                    <div className="bg-black shadow-inner shadow-white h-[90%] md:h-[80%] w-[80%] flex flex-col justify-evenly text-center items-center p-5 m-2"
                        key={index}
                    >
                        <h2 className="text-2xl"  >
                            {card.title}
                        </h2>
                        <ul className="h-[80%] flex flex-col justify-evenly" >
                            {card.descriptors.map((desc : string, descIndex: number) => (
                                <li
                                    key={descIndex}
                                >
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>        
    )
}
const Bottom = () => {
    return (
        <section  className="bg-black h-[70vh] text-white" >
            <h2 className="text-4xl text-center font-serif pt-10" >
                Continue?
            </h2>
            <img 
                onClick={() => window.scrollTo(0, 0)}
                className="min-w-full hover:cursor-pointer" 
                src="https://www.icegif.com/wp-content/uploads/icegif-485.gif" 
                alt="Black hole" 
            />
        </section>
    )
}