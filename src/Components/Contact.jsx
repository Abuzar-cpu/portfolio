import '../CSS/navbar.css'

function Contact() {
    return(
        <div id='main' className={"container p-4"}>
            <div className={"row d-flex justify-content-between"}>
                <div id='about' className="col-md-8 col-12 p-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nameField">Name</label>
                        <input type="text" className="form-control" id="nameField" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" placeholder="Enter your message" />
                    </div>
                    <button id={"submit-button"} onClick={(e) => {e.preventDefault()}} type="submit" className="mt-3 px-3 py-2">Submit</button>
                </form>
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

export default Contact;