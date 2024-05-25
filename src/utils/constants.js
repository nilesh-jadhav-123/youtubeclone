import React from "react";

import {
  AiFillHome,
  AiOutlineFlag,
  AiFillHome as AiFillHomeStr,
} from "react-icons/ai";
import {
  MdLocalFireDepartment,
  MdLiveTv,
  MdLocalFireDepartment as MdLocalFireDepartmentStr,
} from "react-icons/md";
import { CgMusicNote, CgMusicNote as CgMusicNoteStr } from "react-icons/cg";
import { FiFilm, FiFilm as FiFilmStr } from "react-icons/fi";
import {
  IoGameControllerSharp,
  IoGameControllerSharp as IoGameControllerSharpStr,
} from "react-icons/io5";
import { ImNewspaper, ImNewspaper as ImNewspaperStr } from "react-icons/im";
import {
  GiDiamondTrophy,
  GiEclipse,
  GiDiamondTrophy as GiDiamondTrophyStr,
  GiEclipse as GiEclipseStr,
} from "react-icons/gi";
import {
  RiLightbulbLine,
  RiFeedbackLine,
  RiLightbulbLine as RiLightbulbLineStr,
  RiFeedbackLine as RiFeedbackLineStr,
} from "react-icons/ri";
import {
  FiSettings,
  FiHelpCircle,
  FiSettings as FiSettingsStr,
  FiHelpCircle as FiHelpCircleStr,
} from "react-icons/fi";

export const categories = [
  { name: "New", icon: AiFillHomeStr, type: "home" },
  { name: "Trending", icon: MdLocalFireDepartmentStr, type: "category" },
  { name: "Music", icon: CgMusicNoteStr, type: "category" },
  { name: "Films", icon: FiFilmStr, type: "category" },
  { name: "Live", icon: IoGameControllerSharpStr, type: "category" },
  { name: "Gaming", icon: IoGameControllerSharpStr, type: "category" },
  { name: "News", icon: ImNewspaperStr, type: "category" },
  { name: "Sports", icon: GiDiamondTrophyStr, type: "category" },
  { name: "Learning", icon: RiLightbulbLineStr, type: "category" },
  {
    name: "Fashion & beauty",
    icon: GiEclipseStr,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: FiSettingsStr, type: "menu" },
  { name: "Report History", icon: AiOutlineFlag, type: "menu" },
  { name: "Help", icon: FiHelpCircleStr, type: "menu" },
  { name: "Send feedback", icon: RiFeedbackLineStr, type: "menu" },
];


// import React from "react";

// import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
// import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
// import { CgMusicNote } from "react-icons/cg";
// import { FiFilm } from "react-icons/fi";
// import { IoGameControllerSharp } from "react-icons/io5";
// import { ImNewspaper } from "react-icons/im";
// import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
// import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
// import { FiSettings, FiHelpCircle } from "react-icons/fi";

// export const categories = [
//     { name: "New", icon: <AiFillHome />, type: "home" },
//     { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
//     { name: "Music", icon: <CgMusicNote />, type: "category" },
//     { name: "Films", icon: <FiFilm />, type: "category" },
//     { name: "Live", icon: <MdLiveTv />, type: "category" },
//     { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
//     { name: "News", icon: <ImNewspaper />, type: "category" },
//     { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
//     { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
//     {
//         name: "Fashion & beauty",
//         icon: <GiEclipse />,
//         type: "category",
//         divider: true,
//     },
//     { name: "Settings", icon: <FiSettings />, type: "menu" },
//     { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
//     { name: "Help", icon: <FiHelpCircle />, type: "menu" },
//     { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
// ];
