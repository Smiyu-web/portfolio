import React, { useState } from 'react'
import styled from 'styled-components';

const Div = styled.div`
 nav {
    position: fixed;
    bottom: 0;
    left: 0;
    margin-bottom: 40px;
    margin-left: 50px;
    text-align: start;
 }

 h6 {
    color: black;
    font-size: .7em;
    font-weight: 600;
    line-height: 2.5em;
    letter-spacing: .3em;
  }

 hr {
   width: 40px;
   margin: 15px 0;
 }
`

// const [colorCange, setColorChange] = useState('white');

const menus = [
  {link: '/about', text: 'WHO I AM'},
  {link: '/about', text: 'WORKS'},
  {link: '/about', text: 'BLOGS'},
  {link: '/about', text: 'CONTACT'},
]

const ListItem = menus.map((menu, index) => {
  return(
    <a href={menu.link} key={index}><h6>{menu.text}</h6></a>
  )
})

const Navbar = () => {
  return (
    <Div>
      <nav className="lg:w-15 all:hidden md:block">
        {ListItem}
        <hr/>
        <h6>Github</h6>
        <h6>LinkedIn</h6>
      </nav>
    </Div>
  )
}

export default Navbar
