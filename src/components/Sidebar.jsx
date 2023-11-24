import React from "react";
import { AiOutlineHeart  } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FcReddit  } from "react-icons/fc";

const Sidebar = ({children}) => {

  const menuItem = [
    {
      path: "/",
      name: "Insights",
      icon: <RiLightbulbFlashLine size={20} />,
    },
    {
      path: "/",
      name: "Notifications",
      icon: <IoMdNotificationsOutline size={20} />,
    },
    {
      path: "/",
      name: "Recommendations",
      icon: <AiOutlineHeart size={20}/>,
    },
    {
      path: "/",
      name: "Support",
      icon: <MdOutlineLiveHelp size={20}/>,
    },
    {
      path: "/",
      name: "Settings",
      icon: <IoSettingsOutline  size={20}/>,
    },
  ];
  return (
    <div className="sidebar">
      <div className="top">        
        <div className="bars">
          <FcReddit size={35} />
        </div>
        <h1 className="text-xl font-bold pt-1">CHOWDECK</h1>
      </div>
      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="link"
          activeClassName="active"
        >
          <div className="">{item.icon}</div>
          <div className="">{item.name}</div>
        </NavLink>
      ))}
      <main>{children}</main>
      <div className=" team">
      <HiOutlineUserGroup size={20}/>
      <h1 className="">Team 43</h1>
      </div>
    </div>
  );
};

export default Sidebar;
