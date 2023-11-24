import React, {useState} from "react";
import { AiOutlineHeart  } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FcReddit  } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";

const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(true);
  const toggle = () => setIsOpen (!isOpen);
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
    <div className="sidebar" style={{width: isOpen ? "200px" : "70px"}}>
      <div className="ml-36">
      <IoIosClose onClick={toggle} style={{display: isOpen ? "block" : "none"}} size={20} />
      </div>
      <div className="top">        
        <div className="bars" style={{marginLeft: isOpen ? "10px" : "0px"}}>
          <FcReddit size={35} onClick={toggle} />
        </div>
        <h1 className="text-xl font-bold pt-1" style={{display: isOpen ? "block" : "none"}}>CHOWDECK</h1>
      </div>
      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="link"
          activeClassName="active"
        >
          <div className="">{item.icon}</div>
          <div style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
        </NavLink>
      ))}
      <main>{children}</main>
      <div className=" team">
      <HiOutlineUserGroup size={20}/>
      <h1 className="" style={{display: isOpen ? "block" : "none"}}>Team 43</h1>
      </div>
    </div>
  );
};

export default Sidebar;
