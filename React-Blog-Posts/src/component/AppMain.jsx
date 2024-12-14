import style from "./AppMain.module.css"
import AppCard from "./AppCard";
import posts from "../data/data.jsx"
// import tags from "../data/datatag.jsx"




const PrintCard = (array) => {
    return array.map(curElem => {
        const {id, title, image, content, tags, published} = curElem;
        return <AppCard id={id} title= {title} image={image} content={content} tags={tags} state={published} />
    })

}

// const PrintTag = (array) => {
//     array.map((curTag, index) => {
//         return 
//         <span key={index}>{curTag}</span>
//         
//     })
// }

const AppMain = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {PrintCard(posts)}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AppMain;