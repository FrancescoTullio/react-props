import posts from "./data";

const tags = [];

posts.forEach(curElem => {
    return curElem.posts.forEach(curTag => {
        if(tags.includes(curTag)){
            tags.push(curTag);
        }
        })
})

export default tags