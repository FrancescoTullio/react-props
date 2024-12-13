import style from "./AppCard.module.css"
import posts from "../data/data"

const PrintCard = (array) =>{
    console.log (array)
    return array.map(curElem => {
        <img src={`./images/${curElem.image}`} alt="" />
    })
}

const AppCard = () => {
    return (
        <div className={style.card}>
            {PrintCard(posts)}
        </div>
    )
}

export default AppCard