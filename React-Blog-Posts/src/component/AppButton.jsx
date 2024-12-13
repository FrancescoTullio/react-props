import style from "./AppButton.module.css"

const AppButton = (props) => {


    return(
        <button>{props.state ?("disponibile") : ("non disponibile")}</button>
    )
}

export default AppButton