import React from 'react'
import styled from 'styled-components'
import Blog from './Blog'
import Title from '../00-UI/Title'

const Line = styled.div`
  width: 1px;
  position: absolute;
`

const Conatiner = styled.div`
  width: 100vw;
  position: relative;
  text-align: left;
  img {
    z-index: 10;
  }

  h3 {
    font-weight: 500;
  }

  span {
    border-bottom: 2px solid #FFF;
    padding-bottom: 5px;
  }
`

const Blogs = () => {
  const no = '03';
  const title = 'blogs';
  return (
    <Conatiner className="h-full px-8 md:pl-40 xl:pl-64 pt-4 pb-32 lg:pd-36 lg:py-38 lg:flex">
      <Title no={no} title={title} />
      <h3 className="text-2xl my-20">Catch up <span>what</span> is going on!</h3>
      <Blog />
    </Conatiner>
  )
}

export default Blogs
