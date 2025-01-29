import *  as React from 'react'

import './App.css'

const products = [
  {
    id: 1,
    name: 'React Book',
    price: 32.5
  },{
    id: 2,
    name: 'JS Book',
    price: 45.99
  },
  {
    id: 3,
    name: 'Vue Book',
    price: 39.99
  },
  {
    id: 4,
    name: 'C# Book',
    price: 29.99
  },
  {
    id: 5,
    name: 'Aangular Book',
    price: 34.50
  },
  {
    id: 6,
    name: 'Python Book',
    price: 42.00
  },
  {
    id: 7,
    name: 'Php Book',
    price: 37.99
  },
  {
    id: 8,
    name: 'Django Book',
    price: 28.50
  },
  {
    id: 9,
    name: 'Macchine Learning Book',
    price: 44.99
  },
  {
    id: 10,
    name: 'HTML and CSS Book (Responsive Design)',
    price: 49.99
  }
]


function getAsyncProducts(){
  const asyncProducts = new Promise((resolve, reject) => {
    setTimeout(
      resolve({data : { information : products}}, 5000)
    )
  })
}

function App() {
  const intialProducts = {
    result : [],
    isLoading : false,
    isError: false 
  }
  return (
    <>
      
    </>
  )
}

export default App
