import style from "./AppCard.module.css"
import posts from "../data/data"



const AppCard = (props) => {
    const { id, title, image, content, tags, state } = props;
    return (
        <div className={style.card} key={id}>
            
            <div className="img-card">
                <img src={`../images/${image}`} alt="" />
            </div>
            <div className={style.CardBody}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>

        </div>

    )
}

export default AppCard