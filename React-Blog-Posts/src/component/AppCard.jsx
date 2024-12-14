import style from "./AppCard.module.css"
import AppButton from "./AppButton";



const AppCard = (props) => {
    const { id, title, image, content, tags, state } = props;

    const PrintTag = (array) => {
        return array.map((curElem, index) => {
            return <span className={style.curElem} key={index}>{curElem}  </span>
        })
    }


    return (
        <div className={style.card} key={id}>

            <div className="img-card">
                <img src={`../images/${image}`} alt="" />
            </div>
            <div className={style.CardBody}>
                <h3>{title}</h3>
                {PrintTag(tags)}
                <p>{content}</p>
                {state && <AppButton state={state} />}
            </div>

        </div>

    )
}

export default AppCard