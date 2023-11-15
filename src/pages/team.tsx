import Navbar from "@/components/Navbar";
import React from "react";

function TeamMember({
  name,
  title,
  description,
  imageUrl,
}: {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 animate-fade-in-up">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{title}</p>
      </div>
      <div className="px-6 pb-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function Page() {
  const teamMembers = [
    {
      name: "Miro Sourial",
      title: "CEO",
      description: "LuxFlo's vision was birthed from Miro's imagination.",
      imageUrl: "/team/miro_sourial.jpeg",
    },
    // {
    //   name: "Patrick Devaney",
    //   title: "CTO",
    //   description:
    //     "Patrick's experience with AVM and EVM development is unparalleled.",
    //   imageUrl: "/team/Patrick_Devaney.png",
    // },
    {
      name: "Julio M Cruz",
      title: "Architect",
      description: "Julio is our cloud architect.",
      imageUrl: "https://avatars.githubusercontent.com/u/62020?v=4",
    },
    {
      name: "Tad Duval",
      title: "COO",
      description: "Tad is responsible for partnerships and marketing.",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E03AQFeaPTgFLJQSA/profile-displayphoto-shrink_800_800/0/1693350818487?e=2147483647&v=beta&t=CcSWxYbN0ndAgW27J_52nYTkfzc3f2kpOaplFVi_zE0",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Meet Our Team
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              A group of passionate individuals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
