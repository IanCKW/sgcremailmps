import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div id="inner_top">
        <img id="sgcrLogo" src="/sgcrLogo.png" alt="Logo" />
      </div>
      <h1 data-text="Email your MPs">Email your MPs</h1>
    </header>
  );
};

export default Header;
