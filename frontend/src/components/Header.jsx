
function Header(){

  return(
    <header className="header">
      <h1>My Website</h1>
      <nav className="nav-container">
        <div className="nav-list">
          <li><a href="">Home</a></li>
          <li><a href="log-in">Login</a></li>
          <li><a href="character-creation">Creator</a></li>
          <li><a href="about">About</a></li>
        </div>
        <ul>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Header