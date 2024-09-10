import NavBar from "@/app/Components/NavBar";

export default function Contact(){
    return(
        <main className="bg-black text-white " >
            <NavBar />
            <section className="absolute w-full h-[95vh] flex justify-center items-center" 
                style={{
                    backgroundImage: `url(https://media.istockphoto.com/id/678859938/photo/old-home-phone.jpg?s=612x612&w=0&k=20&c=bTsHgwCNDXbDzkDqpxTdhRr4a19OgaCns22I9gfvyIQ=)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="bg-black bg-opacity-60 h-[50%] w-[50%] rounded" >
                    <h1 className="font-serif text-2xl p-5 text-center h-[20%] border-b">
                        Get in touch
                    </h1>
                    <ol
                        className="flex flex-col justify-evenly items-center h-[80%]"
                    >
                        <button className="hover:bg-opacity-60 rounded-2xl bg-white text-black p-2 border transition ease-in-out duration-500" >With LinkedIn</button>
                        <button className="hover:bg-opacity-60 rounded-2xl bg-white text-black p-2 border transition ease-in-out duration-500" >With Github</button>  
                    </ol>                   
                </div>
            </section>
        </main>
    )
}
/*

*/