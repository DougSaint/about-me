import React from 'react'

export default function IconBrand({src, name, url}) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
    <div className="flex flex-col justify-center items-center">
      <img
        src={src}
        className="w-[42px]"
        alt="{name} logo"
      />
      <p className="text-purple-200 text-lg hover:text-white duration-500">{name}</p>
    </div>
  </a>
  )
}
