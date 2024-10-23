import "./Header.css";

const Header = ({urlLogo, children}) => {
  return (
    <header className="header">
      <img src={urlLogo} alt="logo" className="logo" />
      <div>{children}</div>
    </header>
  );
};

export default Header;
