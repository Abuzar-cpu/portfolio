import "../CSS/navbar.css"
function GalleryItem(params) {
    return(
        // <div className="container border border-primary" id="item-container">
        //     <img className="container" src={require("../assets/index.jpg")}></img>
        //     <div id="project-name" className="p-3 container text-center">Project Name</div>
        // </div>

        <div className="card col-6 m-3" id="card-body">
            <img src={require("../assets/index.jpg")} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">Project name</h5>
            </div>
        </div>
    )
    
}
export default GalleryItem;