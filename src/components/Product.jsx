import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function Product({data,count,setCount}) {
    let [toggle,setToggle] = useState(true)
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
      }
  return <>
  <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={data.img} alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{data.tittle}</h5>
                                    {data.price}
                                </div>
                                <Rating onClick={handleRating} initialValue={rating} size={25} />
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {
                                    toggle?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        setCount(count+=1)
                                        setToggle(!toggle)
                                    }} >Add to card</button></div>:
                                    <div className="text-center"><button className="btn btn-dark mt-auto" onClick={()=>{
                                        setCount(count-=1)
                                        setToggle(!toggle)
                                    }} >Remove From Card</button></div>
                                }
                                
                            </div>
                        </div>
                    </div>
  </>
}

export default Product
