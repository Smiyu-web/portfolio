import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #FFF;
  color: black;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  position: relative;
  background-color: #F2F2F2;
`


const Footer = () => {
  return (
    <Container>
      
      <Wrapper className="w-3/4 h-3/4">
        <h5 className="absolute bottom-1/2 right-32">miyuuu0728@gmail.com</h5>
        <h3 className="absolute bottom-4 right-2 text-right w-2/3">Let's make something <span className="border-b-2">awesome</span> together!</h3>
      </Wrapper>
      <h5 className="absolute bottom-6 right-2">&copy;2021 miyu setoyama</h5>
    </Container>
  )
}

export default Footer
