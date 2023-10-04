import React from 'react'
import Logo from './images/FC.png'
const Info = (props) => {
    return (
        <div className='team-info'>
            <h2>Название клуба: {props.teamName}</h2>
            <h4>Город: {props.cityName}</h4>
            <h4>Дата основания: {props.date}</h4>
            <img src={props.logo} className='logo'/>
        </div>
    )
}

export default function ShortInfo() {
  return (
    <Info teamName='Barcelona' cityName='Barcelona/Spain' date='29 ноября 1899г' logo={Logo}/>
  )
}
