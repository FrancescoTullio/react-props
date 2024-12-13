import style from "./AppCard.module.css"
import posts from "../data/data"



const AppCard = (props) => {
    const {id, title, image, content, tags, state} = props; 
    return (
        <div className="card">
            <img src="{`../images/${props.image}`" alt="" />
        </div>
            
    )
}

export default AppCard