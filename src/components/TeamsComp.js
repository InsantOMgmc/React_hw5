import React from 'react'

const Info = (props) => {
    return (
        <div>
            <h3>Состав команды</h3>
            <h4>Нап: {props.CF}</h4>
            <h4>Центр. полузащит.: {props.CM1}</h4>
            <h4>Центр. полузащит.: {props.CM2}</h4>
            <h4>Центр. полузащит.: {props.CM3}</h4>
            <h4>Центр. полузащит.: {props.CM4}</h4>
            <h4>Центр. полузащит.: {props.CM5}</h4>
            <h4>Левый Защит.: {props.FB1}</h4>
            <h4>Центр. Защит.: {props.CB1}</h4>
            <h4>Центр. Защит.: {props.CB2}</h4>
            <h4>Правый Защит.: {props.FB2}</h4>
            <h4>Вратарь: {props.GK}</h4>
        </div>
    )
}

export default function TeamsComp() {
    return (
        <Info CF='Роберт Левандовски' CM1='Френки де Йонг' CM2='Ферран Торрес' CM3='Фермин Лопес' CM4='Гави' CM5='Серджи Роберто' FB1='Алекс Бальде' CB1='Маркос Алонсо' CB2='Иньиго Мартинес' FB2='Пау Кубарси' GK='Марк-Андре тер Стеген'></Info>
    )
}
