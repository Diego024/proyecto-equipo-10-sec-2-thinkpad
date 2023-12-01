import React from "react";

const NavItem = ({ title, icon, url, alt }) => {
  return (
    <li className="nav-item">
      <a href={url}>
        <figure>
          <img src={icon} alt={alt} />
        </figure>
        {title}
      </a>
    </li>
  );
};

export default NavItem;
