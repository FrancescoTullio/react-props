import style from "./AppMain.module.css"
import AppCard from "./AppCard";

const AppMain = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <AppCard />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AppMain;