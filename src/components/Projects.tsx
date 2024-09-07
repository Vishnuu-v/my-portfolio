import Image from "next/image";

const projects = [
    {name: 'TravelGram', description: "Rede social onde as personas mostram os registros de suas viagens pelo mundo", image: "/images/Thumbnail_Project-01.png"},
    {name: 'TravelGram', description: "Rede social onde as personas mostram os registros de suas viagens pelo mundo", image: "/images/Thumbnail_Project-01.png"},
    {name: 'TravelGram', description: "Rede social onde as personas mostram os registros de suas viagens pelo mundo", image: "/images/Thumbnail_Project-01.png"},
    {name: 'TravelGram', description: "Rede social onde as personas mostram os registros de suas viagens pelo mundo", image: "/images/Thumbnail_Project-01.png"},
    {name: 'TravelGram', description: "Rede social onde as personas mostram os registros de suas viagens pelo mundo", image: "/images/Thumbnail_Project-01.png"},
    {name: 'TravelGram', description: "Rede social onde as personas mostram os registros de suas viagens pelo mundo", image: "/images/Thumbnail_Project-01.png"},
];

export default function Projects() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[#16181D] py-10">
      <h2 className="text-3xl m-10 text-[#E3646E]">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-screen-lg w-full p-10 lg:p-0">
        {projects.map((project) => (
          <div key={project.name} className="bg-[#292C34] rounded-2xl shadow-lg p-6">
            <Image
              src={project.image}
              className="rounded-xl"
              alt={project.name}
              width={320}
              height={180}
              layout="responsive"
            />
            <h3 className="text-[#E2E4E9] text-xl mt-4">{project.name}</h3>
            <p className="text-[#C0C4CE] text-base mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
