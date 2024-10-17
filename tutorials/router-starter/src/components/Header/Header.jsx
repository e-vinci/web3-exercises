import "./Header.css";

const Header = ({urlLogo, children}) => {
  return (
    <footer className="header">
      <img src={urlLogo} alt="logo" className="logo" />
      <div>{children}</div>
    </footer>
  );
};

export default Header;
