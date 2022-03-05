import '../CSS/navbar.css';

function NavBar(props) {
    return (
        <div id='navbar' className={"container-fluid"}>
            <div className={"row d-flex justify-content-around"}>
                <div className="col-3 p-4 d-flex justify-content-center" id='name'>
                    <h3 id='name-text'>{props.name}</h3>
                </div>

                <div className={"col-5 d-flex justify-content-end"}>
                    <ul id='links-container' className="h-100 container d-flex align-items-center justify-content-end">
                        <li id={props.active === "home" ? "active" : null} onClick={() => props.changePage("home")} className='links p-2'><h4>About</h4></li>
                        <li id={props.active === "gallery" ? "active" : null} onClick={() => props.changePage("gallery")} className='links p-2'><h4>Gallery</h4></li>
                        <li id={props.active === "contact" ? "active" : null} onClick={() => props.changePage("contact")} className='links p-2'><h4>Contact</h4></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;