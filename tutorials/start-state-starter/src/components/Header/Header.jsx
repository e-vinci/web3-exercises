import "./Header.css";

  
  const Header = (props) => {
    return (
      <header>
        <h1 className="animate__animated animate__bounce">{props.title}</h1>
        <h4>Version: {props.version}</h4>
      </header>
    );
  };

  export default Header;