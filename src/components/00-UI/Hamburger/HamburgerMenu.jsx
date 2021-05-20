import React, { useState } from "react";
import Menu from "./Menu";
import "./hamburger.css";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="lg:hidden h-screen w-screen fixed z-40">
      {!menuOpen ? (
        <div
          className="menu_bar"
          style={{
            background: "linear-gradient(#2222221c, #22222267 30%, #222222)",
          }}
          onClick={handleMenuOpen}
        >
          MENU
        </div>
      ) : (
        <div className="text-bl menu_bar" onClick={handleMenuClose}>
          CLOSE
        </div>
      )}

      <Menu isOpen={menuOpen} />
    </div>
  );
};

export default HamburgerMenu;