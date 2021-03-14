import React from 'react'
import Title from '../00-UI/Title'
import Slides from './Slides'


const Works = () => {
  const no = '02';
  const title = 'works';
  return (
    <div className="relative px-8 md:pl-40 xl:pl-64 py-20 pb-16 lg:py-38 lg:flex">
      <Title no={no} title={title} />
      <div id="slides" className>
        <Slides />

      </div>
    </div>
  )
}


export default Works
