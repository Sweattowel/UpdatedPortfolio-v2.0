import Link from "next/link";
import NavBar from "./Components/NavBar";

interface fileStruc {
  DirectoryName: string ,
  Link: string,
  SubDirectories: fileStruc[]

}

// test change
const filePaths : fileStruc[] = 
[
  {
    DirectoryName: "/",
    Link : "/",
    SubDirectories: 
    [
      {
        DirectoryName: "Pages",
        Link : "/",
        SubDirectories: 
        [
          {
            DirectoryName: "Index",
            Link : "/",
            SubDirectories : []
          },
          {
            DirectoryName: "Landing page",
            Link : "/Pages/LandingPage",
            SubDirectories : []
          },
          {
            DirectoryName: "Projects",
            Link : "/Pages/Projects",
            SubDirectories : []
          },
          {
            DirectoryName: "Contact",
            Link : "/Pages/Contact",
            SubDirectories : []
          },
        ]
      },
    ]
  },
  {
    DirectoryName: "GITHUB PAGES",
    Link : "/Pages",
    SubDirectories: [
      {
        DirectoryName: "Pottery",
        Link : "https://github.com/Sweattowel/AlieSohn-Pottery",
        SubDirectories : []
      },
      {
        DirectoryName: "Connector",
        Link : "https://github.com/Sweattowel/connector",
        SubDirectories : []
      },
      {
        DirectoryName: "R&D",
        Link : "https://github.com/Sweattowel/3dEngineAndOtherExperiments",
        SubDirectories : []
      },
      {
        DirectoryName: "Car market",
        Link : "https://github.com/Sweattowel/car-page",
        SubDirectories : []
      },
      {
        DirectoryName: "C# RPG",
        Link : "https://github.com/Sweattowel/C--RPG",
        SubDirectories : []
      },
      {
        DirectoryName: "Portfolio",
        Link : "https://github.com/Sweattowel/Portfolio",
        SubDirectories : []
      },
      {
        DirectoryName: "Updated Portfolio",
        Link : "https://github.com/Sweattowel/UpdatedPortfolio",
        SubDirectories : []
      },
    ]
  }
];

export default function Home() {


  return (
    <main
      className="bg-black text-white h-[100vh]"
    >
      <NavBar />
      <h1
        className="ml-[20px]"
      >
        Recursive Site file structure
      </h1>
      <ul
        className="border-t p-5"
      >
        <SubDirectoryRender files={filePaths} />        
      </ul>

    </main>
  );
}

const SubDirectoryRender = ({ files }: { files: fileStruc[] })  => {
  return (
    <ul
      className={`ml-[10px]`}    
    >
      {files.map((file: fileStruc, index: number) => (
        <li
          key={index}
        >
          <Link
            href={file.Link}
          >
            {file.DirectoryName}
          </Link>
          <ul>
            <SubDirectoryRender files={file.SubDirectories} />
          </ul>
        </li>
      ))}
    </ul>
  )
}