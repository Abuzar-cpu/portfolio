import '../CSS/navbar.css'
import GalleryItem from './GalleryItem';
function Gallery(params) {
    return(
        <div id='main' className={"container p-4"}>
            <div className={"row d-flex justify-content-between"}>
                <div id='gallery' className="col-md-8 col-12 p-3">
                    <h3 className='text'>Gallery </h3>
                    <hr/>
                    <div className={"container d-flex justify-content-start flex-row flex-wrap"}>
                        <GalleryItem projectName={"project name"}/>
                        <GalleryItem projectName={"project name"}/>
                        <GalleryItem projectName={"project name"}/>
                        <GalleryItem projectName={"project name"}/>
                        <GalleryItem projectName={"project name"}/>
                        <GalleryItem projectName={"project name"}/>
                    </div>
                </div>

                <div id='socials' className="col-md-3 col-12 p-3">
                    <h3 className='text'>Connect With Me</h3>
                    <hr />
                    <div className='container d-flex justify-content-between'>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a target={"_blank"} href={"https://github.com/Abuzar-cpu"} rel="noreferrer"><i id='github-link' className="fab fa-github fa-3x" aria-hidden="true"/></a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a target={"_blank"} href={"https://www.linkedin.com/in/abuzarcpu/"} rel="noreferrer"><i id='linkedin-link' className="fab fa-linkedin-in fa-3x" aria-hidden="true"/></a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a target={"_blank"} href={"https://stackoverflow.com/users/12798432/abuzar-karimzada"} rel="noreferrer"><i id='stack-link' className="fab fa-stack-overflow fa-3x" aria-hidden="true"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gallery;