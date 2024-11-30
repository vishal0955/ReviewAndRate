import React from 'react'
import cars from "../assets/cars24.png"

const CompanyCard = () => {
  return (
    <div>
      <div>
        <img  className="h-8" src={cars} alt="company logo"></img>
      </div>
      <div>
        <h1>GraffersId Web and App Devolpment</h1>
        <p>Loca</p>
      </div>
    </div>
  )
}

export default CompanyCard