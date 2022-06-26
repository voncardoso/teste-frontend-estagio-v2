import logo from "../../img/aiko.png";
import userImg from "../../img/userImg.png";
import iconeUser from "../../img/iconeUser.svg";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="" />
      <button>
        <img src={userImg} alt="" />
        <img src={iconeUser} alt="" />
      </button>
    </Container>
  );
};

export default Header;
