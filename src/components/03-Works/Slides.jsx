import React from 'react'
import styled from 'styled-components'
import premiere from '../../images/premiere.png'
import yuco from '../../images/yuco.png'
import am from '../../images/11am.png'

const Wrapper = styled.div`
  position: relative;
  height: 250px;

  div {
    background-color: #fff;
  }
  img {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .5);
  }
  h2 {
   line-height: 1.1;
   font-size: 40px;
   font-weight: 700;
   color: rgba(0,0,0,0);
   background-size: 150px;
   -webkit-background-clip: text;  
  }
  #premiere {
    background-image: url(${premiere}); 
  }
  #yuco {
    background-image: url(${yuco}); 
    background-size: 20px;
  }

  #am {
    background-image: url(${am});
  }
`

const projects = [
  {title: 'PREMIERE', id: 'premiere', image:premiere, type: 'E-commerce'},
  {title: 'yu + co.', id: 'yuco', image:yuco, type: 'website'},
  {title: '11am', id: 'am', image:am, type: 'website'},
]

const ListProject = projects.map((el, index) => {
  if ( index % 2　== 0 ) {
      return (
        <Wrapper className="my-16" key={index}>
          <div className="absolute w-52 h-52"></div>
          <img 
            src={el.image} 
            alt={el.title}
            className="absolute w-40 top-14 left-6"
          />
          <h2 id={el.id} className="absolute left-36 top-40">{el.title}</h2>
          <p className="absolute text-left font-light text-xs top-52">{el.type}</p>
        </Wrapper> 
      )
  } else {
    return (
      <Wrapper className="my-16" key={index}>
        <div className="absolute w-52 h-52 right-0"></div>
        <img 
          src={el.image} 
          alt={el.title}
          className="absolute w-40 top-14 right-6"
        />
        <h2 id={el.id} className="absolute right-36 top-40">{el.title}</h2>
        <p className="absolute font-light text-xs top-52 right-0">{el.type}</p>
      </Wrapper>
    )
  }
})

const Slides = () => {
  return (
    <div className="w-full">
      {ListProject}
    </div>
  )
}

export default Slides
