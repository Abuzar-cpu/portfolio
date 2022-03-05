import "../CSS/navbar.css"
function GalleryItem(props) {
    return(
        <div className={"project-container container"}>
            <img alt={"project"} id={"project-pic"} src={require("../assets/index.jpg")}/>
            <div id={"project-name"} className={"text-center"}>
                <p>{props.projectName}</p>
            </div>
        </div>
    )
}

export default GalleryItem;