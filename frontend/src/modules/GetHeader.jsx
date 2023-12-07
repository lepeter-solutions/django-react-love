function GetHeader(){
    return (
    <header id = "header" className="d-flex bg-primary-new flex-wrap justify-content-center py-3 ">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4" id = "header-name"> Danube Computers Europe</span>
        </a>
  
        <ul className="nav nav-pills pt-1">
          <li className="nav-item"><a href="#" className="third-text-color header-btn m-1 p-3" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="#" className="third-text-color header-btn m-1 p-3">Features</a></li>
          <li className="nav-item"><a href="#" className="third-text-color header-btn m-1 p-3">Pricing</a></li>
          <li className="nav-item"><a href="#" className="third-text-color header-btn m-1 p-3">FAQs</a></li>
          <li className="nav-item"><a href="#" className="third-text-color header-btn m-1 p-3">About</a></li>
        </ul>
      </header>
    );
  }


export default GetHeader;