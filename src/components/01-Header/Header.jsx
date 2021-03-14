import React from 'react'

const Header = () => {
  return (
    <div id="header" className="layout h-screen">
      <div className="pl-100 pt-300 md:pt-100">
        <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
          <h1 className="mb-8">miyu</h1>
          <h1 className="pl-200">setoyama</h1>
        </div>
        <h5 className="font-medium pl-200 pt-10 text-xsC md:text-baseC">
          Front End <span className="border-b pb-1">Developer</span><br />
          Base in Vancouver. Born in Japan.
        </h5>
      </div>
      <div id="line" className="line bottom-0 left-24 md:left-56"/>
    </div>
  )
}

export default Header
