import React from 'react'
import styled from 'styled-components'
import teck from '../../images/teck.jpeg'


const blogs = [
  {
    title: 'How to handle Async code in JavaScript?', 
    date: '2021-02-09', 
    type: 'article', 
    img: '',
    url: 'https://miyuuu0728.medium.com/how-to-handle-async-code-in-javascript-a7c355465cc'
  },
  {
    title: 'How to handle Async code in JavaScript?', 
    date: '2021-02-09', 
    type: 'article', 
    img: '',
    url: 'https://miyuuu0728.medium.com/how-to-handle-async-code-in-javascript-a7c355465cc'
  },
  {
    title: 'How to handle Async code in JavaScript?', 
    date: '2021-02-09', 
    type: 'article', 
    img: '',
    url: 'https://miyuuu0728.medium.com/how-to-handle-async-code-in-javascript-a7c355465cc'
  },
  {
    title: 'How to handle Async code in JavaScript?', 
    date: '2021-02-09', 
    type: 'article', 
    img: '',
    url: 'https://miyuuu0728.medium.com/how-to-handle-async-code-in-javascript-a7c355465cc'
  }
]



// const ListItem = blogs.map((el, index) => {
//   return (
//     <hr />
//     <>
//   )
// })

const Blog = () => {
  return (
    <div className="flex">
      <div className="w-80 mr-10">
        <img src={teck} alt=""/>
        <h6 className="text-xs text-right mt-2 border-b tracking-wider">Article</h6>
        <h5 className="text-xs font-semibold mt-4">2021-02-09</h5>
        <h4 className="text-tiny font-light mt-4">How to handle Async code in JavaScript?</h4>
      </div>
      <div className="w-80 mr-10">
        <img src={teck} alt=""/>
        <h6 className="text-xs text-right mt-2 border-b">Article</h6>
        <h5 className="text-xs font-semibold mt-4">2021-02-09</h5>
        <h4 className="text-tiny font-light mt-4">How to handle Async code in JavaScript?</h4>
      </div>
    </div>
  )
}

export default Blog
