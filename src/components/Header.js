import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="One">
        <Link to="/" className="One-W">
          일기 쓰기
        </Link>
      </div>
      <div className="Two">
        <Link to="/list" className="Two-W">
          일기 목록
        </Link>
      </div>
      <div className="egg">
        <div className="red"></div>
        <div className="blue"></div>
        <div className="green"></div>
        <div className="yellow"></div>
      </div>
    </div>
  );
};

export default Header;
