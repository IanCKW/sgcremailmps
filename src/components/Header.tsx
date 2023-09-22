import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div id="inner_top">
        <a
          href="https://www.sgclimaterally.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="sgcrLogo" src="/sgcrLogo.png" alt="Logo" />
        </a>
      </div>
      <h1 data-text="Email your MPs">Email your MPs</h1>
    </header>
  );
};

export default Header;
