import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://www.sgclimaterally.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          sgclimaterally.com
        </a>{" "}
        <span> | </span>
        <a
          href="https://www.instagram.com/sgclimaterally/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @sgclimaterally
        </a>
        <span> | </span>
        <a
          href="https://heckinunicorn.com/pages/ge2020-email-your-politician-lgbt#top"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo
        </a>
        <span> | </span>
        <span> Inspired by: </span>
        <a
          href="https://heckinunicorn.com/pages/ge2020-email-your-politician-lgbt#top"
          target="_blank"
          rel="noopener noreferrer"
        >
          heckinunicorn.com
        </a>
      </div>
      <div className="footer-copyright">© 2023 by SG Climate Rally</div>
    </footer>
  );
};

export default Footer;
