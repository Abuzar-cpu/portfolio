import '../CSS/navbar.css'

function Contact() {
    return(
        <div id='main' className={"container p-4"}>
            <div className={"row d-flex justify-content-between"}>
                <div id='about' className="col-6 p-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Message</label>
                        <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your message" />
                    </div>
                    <button onClick={(e) => {e.preventDefault()}} type="submit" className="mt-3 px-3 py-2">Submit</button>
                </form>
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

export default Contact;