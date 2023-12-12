
function GetHeader(){
  return (
    <nav id = "header" className="navbar navbar-expand-md navbar-dark bg-primary-new ">
      <div className="container">
      <a className="navbar-brand" href="#">Danube Computers Europe</a>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        
        <div className="collapse navbar-collapse " id="n_bar">
          
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Careers</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Links</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Join Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
  }


export default GetHeader;