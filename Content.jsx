import React from "react";
import MyRadioForm from "./Radio Button";
import tab from "./tab";

function Content() {
  return (
    <div>

    {/* Section-1 */}

    <div className="row vector-Image">
     <img src="/images/img-1.png" alt="img 1" className="col-lg-12 image-1" />
     <img src="/images/vector-t.png" alt="img 2" className="col-lg-12 vector-t" />
     <img src="/images/vector-3.png" alt="img 3" className="col-lg-12 vector-3" />
     </div>
     <div className="row col-md-12 logo-img2">
     <img src="/images/frame.png" alt="3T-LOGO" class="img-fluid frame col-sm-4" />
     </div>

     {/* Section-2 */}

     <div className="row col-lg-6 basket-img ">
     <img src="/images/playing-img.png" alt="Basket Ball" class="img-fluid playing-img col-md-6" />
     </div>
     <div className="row col-md-6 row-text">
      <p className="text-1">Where our community turns to, for children in</p>
      <p className="text-2">challenging family situations.</p>
      <p className="text-3">T3 brings tutors and big brothers to children from complex family situations going through a difficult period.</p> <br/>
      <p className="text-3"> A few times a week, depending on the situation, the tutor arrives at the boy's house or local shul to Learn with him, spend time with him, and give him the academic help that he needs.</p><br/>
      <p className="text-3"> Like a big brother, he connects, takes him on fun outings, and gives him the attention that he is Lacking.</p>
      <button type="button" class="btn btn-light donate-btn2">Donate</button>
     </div>

     {/* Section-3 */}

     <div className="about-section">
     <button type="button" class="btn btn-light btn-about"><span className="about-bold">About</span> Us</button>
     <p className="director-heading">Director</p>
     <p className="director-name"><span className="rabbi">Rabbi</span> Binyamin Haddad</p>
     <img src="/images/line-vector.png" alt="Line Under Name" class="img-fluid col-md-4 line-img" />
     <p className="direct-content col-md-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu</p>
     </div>
     <div className="row col-md-6 right-circle">
     <img src="/images/circle.png" alt="Circle-bg" class="img-fluid col-xl-12 circle" />
     <img src="/images/colored circle.png" alt="Circle-bg" class="img-fluid col-md-1 clr-circle" />
     <img src="/images/frame.png" alt="3T-LOGO" class="img-fluid frame-2 col-sm-4" />
     <div className="col-md-6 right-text">
     <div className="col-md-12 content-1">
      <p className="content-1-text">“I have seen how the T3 program truly helped uplift many downtroden families. Please open your hearts and support this important organization that brings a smile to so many children.”</p>
      <img src="/images/sig-1.png" alt="Signatures" class="img-fluid sig-1 col-sm-4" />
      </div>
      <div className="col-lg-12 content-2">
      <p className="director-name director-2"><span className="rabbi">Rabbi</span> Yosef Ozeri</p>
      <img src="/images/line-vector.png" alt="Line Under Name" class="img-fluid col-md-4 line-img2" />
      <p className="content-2-text">“The T3 program has a tremendous outreaching effect on families that are in need of our help. It is a truly worthy organization to support.”</p>
      <img src="/images/sig-2.png" alt="Signatures" class="img-fluid sig-2 col-sm-4" />
      </div>
     <div className="col-lg-12 content-3">
     <p className="director-name director-3"><span className="rabbi">Rabbi</span> Meyer Yedid</p>
     <img src="/images/line-vector.png" alt="Line Under Name" class="img-fluid col-md-4 line-img3" />
     <p className="content-3-text">“The T3 program has a tremendous outreaching effect on families that are in need of our help. It is a truly worthy organization to support.”</p>
     <img src="/images/sig-3.png" alt="Signatures" class="img-fluid sig-3 col-sm-4" />
    </div>
     </div>
     </div>
    
    {/* Section-4 */}

     <div className="col-md-2 section-4">

     <ul className="list row">

     <p className="list-heading">
     Brooklyn:
     </p>
     <a class="list-link" href="#home"><li className="heading-content">YDE</li></a>

     <a class="list-link" href="#home"><li className="heading-content">Mekor Chaim </li></a>

     <a class="list-link" href="#home"><li className="heading-content">Ateret Torah</li></a>

     <a class="list-link" href="#home"><li className="heading-content">Shaare Torah</li></a>
   
     <div className="list-right col-md-2">     
     <a class="list-link" href="#home"><li className="heading-content">Magen David</li></a> 
     <a class="list-link" href="#home"><li className="heading-content">Barkai</li></a>
     <a class="list-link" href="#home"><li className="heading-content">Lev Torah</li></a>
     <a class="list-link" href="#home"><li className="heading-content">Ohr Hatorah</li></a>
    </div>

     </ul>

     <ul className="list row">

     <p className="list-heading">
     Lakewood:
     </p>

     <a class="list-link" href="#home"><li className="heading-content"> Ohr Hachaim</li></a>
     
     <a class="list-link" href="#home"> <li className="heading-content">Yagdil Torah</li></a>

     </ul>
     <div className="text-right col-md-6">
      <p className="school-text">We currently <span className="boys">help boys</span> from the following schools in our community:</p>
     </div>
     </div>
     <div className="">
     <img src="/images/Mask-group.png" alt="Mask-Group" class="img-fluid col-md-6 mask-img" />
     <img src="/images/circle.png" alt="Circle" class="img-fluid circle-mask col-md-5" />
     </div>
     <div className="process">
     <button type="button" class="btn btn-light btn-process"><span className="the">The</span> Process</button>
     <div className="col-md-4">
     
     {/* Tabs  */}
     
       <div className="tab col-lg-12">
       
     <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="tab-link1 active" aria-current="page" href="#">01</a><hr></hr>
  </li>
  <li class="nav-item">
    <a class="tab-link" href="#">02</a><hr></hr>
  </li>
  <li class="nav-item">
    <a class="tab-link" href="#">03</a><hr></hr>
  </li>
  <li class="nav-item">
    <a class="tab-link " href="#" tabindex="-1">04</a><hr></hr>
  </li>
</ul>
</div>

     <img src="/images/number-1.png" alt="Number-1" class="img-fluid number-1" />
     <p className="number-text">We speak to the boy’s parents and teachers /Rebbis to make sure we know everything about him: his nature, his struggles, and his strengths. This way we know what to focus on.</p>
     </div>
    </div>

     {/* Section-5 */}

     <div className="section-5">
      <p className="help-text col-lg-12">NO CHILD WILL BE LEFT BEHIND.<span className="help-us">HELP US HELP THEM!</span></p>
     <div className="goal-left">
     <h1 className="goal-heading col-md-2"><span className="our">Our</span> Goal</h1>
     </div>
     <div className="">
     <p className="goal-content col-md-6">While the boys enrolled in T3 are flourishing, so many more are waiting to be paired up. They are children sitting next to you in shul or playing on your block. They are our community children. Unfortunately, challenges occur. With your assistance T3 will be able to help and care for all such children and families in our community.</p>
    </div>
    <div className="goal-right">
    <img src="/images/frame.png" alt="Frame-3T" class="img-fluid col-md-4" />
    </div>
    <div className="img-2 col-md-6">
    <img src="/images/img-2.png" alt="Customers" class="img-fluid" />
    </div>
    <div className="radio-section">
    <MyRadioForm />
    </div>
     </div>
  {/* Section-6 */}

  <div className="col-lg-12 row section-6">
  <p className="ways">Other ways to <span className="light-donate">donate:</span></p>
  <p className="donate-sub">Check, made out to</p>
  {/* <img src="/images/line-vector.png" alt="Line0Vector" class="img-fluid col-sm-3 line-6" />
  <img src="/images/line-vector.png" alt="Line0Vector" class="img-fluid col-sm-3 line-6" /> */}
  <h2 className="name-heading">Keren Lev David</h2>
  <p className="mail-to">Mail to:</p>
  <p className="address">1668 East 3rd Street, Brooklyn NY, 11230</p>
  </div>
   
   {/* section-7 */}

  <div className="section-7 row">
  <img src="/images/logo.png" alt="Customers" class="img-fluid img-7" />
  <div className="info">
    <p className="for-more">For more information please reach out to:</p>
    <img src="/images/line-vector.png" alt="Line0Vector" class="img-fluid line-7" />
    <div className="contact-names">
    <p className="binyamin">Rabbi Binyamin Haddad <br/> <span className="contact-number1">917-627-1011</span></p>
    <p className="judah">or Judah Haddad <br/> <span className="contact-number2">347-325-4334</span></p>
    </div>
  </div>
  </div>
    </div>
  );
}

export default Content;
