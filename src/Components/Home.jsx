import '../CSS/navbar.css'

function Home(params) {
    return(
        <div id='main' className={"container p-4"}>
            <div className={"row d-flex justify-content-between"}>
                <div id='about' className="col-6 p-3">
                    <h3 className='text'>About me</h3>
                    <hr/>
                    <div>
                        <img id="profile-pic" className="container" src={require("../assets/profile.jpg")} />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti eveniet ratione recusandae magnam quidem earum aliquam delectus officia, unde perferendis rem natus, provident similique omnis laborum. Quis natus porro a odio, enim sapiente ea ipsa? Rem, asperiores sed, modi, reiciendis ad mollitia fuga aliquid ipsum eaque perspiciatis ratione debitis quam. Deleniti a blanditiis quo doloribus, odit impedit libero officia similique et aliquid necessitatibus magnam tenetur labore voluptate iusto velit cum fugiat neque eaque, error alias perspiciatis assumenda? Omnis, at facilis? Dolore, maxime omnis voluptas culpa eaque in, incidunt atque non eos molestiae modi eius nisi similique officiis facilis illum inventore!</p>
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

export default Home;