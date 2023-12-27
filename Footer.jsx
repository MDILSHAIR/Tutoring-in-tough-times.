import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="copyright">Copyright ⓒ {currentYear} Tutoring in Tough Times All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
