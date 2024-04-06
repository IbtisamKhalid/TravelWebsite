import React from 'react'
import "./C.css"
import Ik from '../../assets/Ik.png'
const h = () => {
  return (
    <div className="img11">
      <div className="container container1">
        <div className="img1">
          <img id="im" src={Ik} alt="" />
          <div className="divbtn btndiv1">
            <br /><button className="btn btngallery btnn1"></button><br /><button
              className="btn btn-cart btn1"
            ></button>
          </div>
          <div className="product-desc">
            <p >
              IBTISAM KHALID <br />
              MY Summer Project 1
              <br/>21-Arid-720
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default h
