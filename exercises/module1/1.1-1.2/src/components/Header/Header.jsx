import logo from "./LOGO HE VINCI.png";
const Header = (props) => {
  return (
    <div>
      <img src={logo} alt="logo Vinci"></img>
      <h1>{props.course}</h1>
    </div>
  );
};

export default Header;
