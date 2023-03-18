import React from "react";


export default function ProjectCard({
  name,
  image,
  technologies,
  deploy,
  repository,
}) {
  console.log(repository);
  return (
    <div data-aos="flip-right" data-aos-duration="1000" className="w-3/4">
      <h1 className="text-purple-100 text-center text-xl mb-3"> {name} </h1>
      <img src={image} alt={name} />
      <div className="flex w-full justify-around mt-3">
        <a target="_blank" href={deploy} className="text-purple-300 underline decoration-white" >Deploy</a>
        <a target="_blank" href={repository} className="text-purple-300 underline decoration-white" >Repository</a>
      </div>
    </div>
  );
}
