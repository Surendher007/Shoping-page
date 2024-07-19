import React, { useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Product from './components/Product'
import shoe from "./assets/shoes-1.jpg"
import shoe1 from "./assets/shoes-2.jpg"
import shoe2 from "./assets/shoes-3.jpg"
import shoe3 from "./assets/shoes-4.jpg"
import shoe4 from "./assets/shoes-5.jpg"
import shoe5 from "./assets/shoes-6.jpg"
import shoe6 from "./assets/shoes-7.jpg"
import shoe7 from "./assets/shoes-8.jpg"

function App() {
let [count,setCount] = useState(0)

  let data = [
    {
      tittle:"Shoes",
      img:shoe,
      price:"$500"
    },
    {
      tittle:"Brown Shoes",
      img:shoe1,
      price:"$3800"
    },
    {
      tittle:"Black Shoes",
      img:shoe2,
      price:"$3500"
    },
    {
      tittle:"Bink Shoes",
      img:shoe3,
      price:"$900"
    },
    {
      tittle:"White shoes",
      img:shoe4,
      price:"$2000"
    },
    {
      tittle:"Green Shoes",
      img:shoe5,
      price:"$1500"
    },
    {
      tittle:"blak hight Shoes",
      img:shoe6,
      price:"$7500"
    },
    {
      tittle:"royal brown",
      img:shoe7,
      price:"$8500"
    }
  ]
  return <>
  <Nav count={count}/>
  <Header/>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                    data.map((e,i)=>{
                      return <Product data={e} key={i} count={count} setCount={setCount}/>
                    })
                  }
                </div>
            </div>
        </section>
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2024</p></div>
        </footer>
  </>
}

export default App
