import React from 'react'

const Title = (props) => {
  return (
    <div className="flex font-bold md:pt-8">
      <div className="text-sm md:text-lg lg:text-2xl pr-5">{props.no}/</div>
      <h2 className="text-3xl md:text-4xl lg:text-7xl">{props.title}</h2>
    </div>
  )
}

export default Title
