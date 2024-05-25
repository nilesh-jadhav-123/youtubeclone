import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { Context } from "../context/Contex";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

const LeftNav = () => {
     const categories = [
        { id: 1, name: 'New', icon: <AiFillHome />, type: 'home' },
        { id: 2, name: 'Trending', icon: <MdLocalFireDepartment />, type: 'category' },
        { id: 3, name: 'Music', icon: <CgMusicNote />, type: 'category' },
        { id: 4, name: 'Films', icon: <FiFilm />, type: 'category' },
        { id: 5, name: 'Live', icon: <MdLiveTv />, type: 'category' },
        { id: 6, name: 'Gaming', icon: <IoGameControllerSharp />, type: 'category' },
        { id: 7, name: 'News', icon: <ImNewspaper />, type: 'category' },
        { id: 8, name: 'Sports', icon: <GiDiamondTrophy />, type: 'category' },
        { id: 9, name: 'Learning', icon: <RiLightbulbLine />, type: 'category' },
        { id: 10, name: 'Fashion & beauty', icon: <GiEclipse />, type: 'category', divider: true },
        { id: 11, name: 'Settings', icon: <FiSettings />, type: 'menu' },
        { id: 12, name: 'Report History', icon: <AiOutlineFlag />, type: 'menu' },
        { id: 13, name: 'Help', icon: <FiHelpCircle />, type: 'menu' },
        { id: 14, name: 'Send feedback', icon: <RiFeedbackLine />, type: 'menu' },
      ];

  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          By BharatChavhan@2024
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
