import React from 'react'
import Title from '../00-UI/Title'
import History from './History'
import AboutImg from './AboutImg'


// const BackRec = styled.div`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: 0;
//   height: 0;
//   border-style: solid;
//   border-width: 0 0 150px 300px;
//   border-color: transparent transparent #c4c4c4 transparent;
//   line-height: 0px;
//   z-index:0;
// `

const About = () => {
  const no = '01';
  const title = 'who i am';

  return (
    <div id="about" className="layout h-full lg:h-screen">
      <div id="line" className="hidden md:block line top-0 left-56"/>

      <div className="lg:w-1/2">
        <Title no={no} title={title} />
        <div className="flex flex-col items-center">
          <h4 className="text-xs md:text-base my-12 md:my-10 lg:my-16 mx-4 md:mx-6">
            My dream is that making something amaizing to people happy. 
            Contact me if you have a same dreame as me.
          </h4>
          <History />
        </div>
      </div>
      <AboutImg />
      <div className="line bottom-0 left-20 md:left-72 lg:left-lg"></div>
    </div>
  )
}

export default About
