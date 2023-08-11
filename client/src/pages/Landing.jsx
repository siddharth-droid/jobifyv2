import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span>App
          </h1>
          <p>
            Im baby selvage plaid butcher lomo tattooed sus biodiesel ramps
            gentrify man braid actually messenger bag. Fanny pack skateboard
            chambray irony asymmetrical truffaut narwhal. Fingerstache seitan
            cray, copper mug woke ramps live-edge farm-to-table chambray
            sriracha ugh.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
