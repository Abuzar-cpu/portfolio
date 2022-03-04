import '../CSS/navbar.css'
import GalleryItem from './GalleryItem';
function Galery(params) {
    return(
        <div id='main' className={"container p-4"}>
            <div className={"row d-flex justify-content-between"}>
                <div id='about' className="col-6 p-3">
                    <h3 className='text'>Galery </h3>
                    <hr/>
                    <div>
                        <GalleryItem></GalleryItem>
                    </div>
                </div>

                <div id='socials' className="col-3 p-3">
                    <h3 className='text'>Connect With Me</h3>
                    <hr />
                    <div className='container d-flex justify-content-between'>
                        <i id='github-link' className="fab fa-github fa-3x" aria-hidden="true"></i>
                        <i id='linkedin-link' className="fab fa-linkedin-in fa-3x" aria-hidden="true"></i>
                        <i id='stack-link' className="fab fa-stack-overflow fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Galery;