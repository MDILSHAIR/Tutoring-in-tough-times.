import React from "react";


function Header() {
  return (
 <header id="header" class="">
 <div class="container d-flex row">
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home"><img src="/images/logo.png" alt="3T-LOGO" class="img-fluid logo-img" /></a>
    <div className="nav-right">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#home">How it all began</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#home">Contact Us</a>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-outline-primary donate-btn">Donate</button>
        </li>
      </ul>
    </div>
  </div>
  </div>
</nav>
 </div>
</header>

  );
}

export default Header;
