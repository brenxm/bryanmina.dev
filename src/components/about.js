import portrait from "../portrait.png";
import "../App.css";
import NavBar from "./nav"


function AboutPage() {

    return (
        <div className="about-page">
            <div className="portrait-section">
                <img src={portrait}></img>
            </div>
            <div className="info-section">
                <p id="one">
                    Hello, I'm
                </p>

                <p id="two">
                    Bryan Mina
                </p>

                <p id="three">
                    Welcome to my developer portfolio! I am thrilled to showcase my passion and skills in computation and design as I strive towards my goal of becoming a Junior Developer. As a self-taught individual, I have honed my abilities through hard work and determination and am eager to continue learning and growing in the field. In these pages, you'll find examples of my innovative and functional solutions, and I am excited about the opportunity to join a team as a Junior Developer and deliver exceptional results.
                </p>

            </div>
        </div>
    );
}

export default AboutPage;