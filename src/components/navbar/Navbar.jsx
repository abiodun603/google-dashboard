import React from 'react'
import { NavbarContainer } from './styledNavbar'
import {FiMenu} from "react-icons/fi"
import navLogo from "../../assets/image/gmail.png"
import {IoMdOptions} from "react-icons/io"
import {TbSearch} from "react-icons/tb"
import {IoSettingsOutline} from "react-icons/io5"
import {MdOutlineContactSupport} from "react-icons/md"
import {TbGridDots} from "react-icons/tb"
import { IconButton, Tooltip } from '@mui/material'
const Navbar = () => {
  return (
    <NavbarContainer>
      {/* ==== navigation & logo ====== */}
      <div className="box__one">
        <div className='nav__logo--container'>
          <FiMenu className='icon'/>
          <div className='navLogo'>
            {/* logo */}
            <img src = {navLogo}  alt = "" width={50} />
            {/* name */}
            <h2>Gmail</h2>
          </div>
        </div>

        {/* ===== seach bar ========== */}
        <div className='search__container'>
          <input type="text" placeholder='Search mail' />
          {/*  seach icon */}
          <TbSearch className='icon search__icon'/>
          {/* filter icon */}
          <IoMdOptions className='icon search__icon-two'/>
        </div>
      </div>

      {/* ====== utilities ========== */}
      <div className='box__two'>
        {/* support */}
        <Tooltip title="Support">
          <IconButton>
            <MdOutlineContactSupport className='icon'/>
          </IconButton>
        </Tooltip>
        {/* setting icon */}
        <Tooltip title="Setting">
          <IconButton>
            <IoSettingsOutline className='icon'/>
          </IconButton>
        </Tooltip>
        {/* dots */}
        <Tooltip title="Google Map">
          <IconButton>
            <TbGridDots className='icon'/>
          </IconButton>
        </Tooltip>
        {/* circle avatar */}
        <div className="circle-avatar">
          <img src="https://media.istockphoto.com/vectors/pizza-chef-vector-id1182416349" alt="" className='avatar-image'/>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default Navbar