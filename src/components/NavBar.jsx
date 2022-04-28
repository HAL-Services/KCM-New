import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logo">KCM.</div>
      <div className="titles">
        <nav>
          <ul>
            <li>
              Services<span></span>
            </li>
            <li>
              About<span></span>
            </li>
            <li>
              Testimonial<span></span>
            </li>
            <li>
              Contact Us<span></span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="login-btn">
        <button type="submit">Login</button>
      </div>
    </header>
  );
};

export default NavBar;
