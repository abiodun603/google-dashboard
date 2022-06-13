import React from 'react'
import { LeftSidebarContainer, SidebarCenterContainer, SidebarListContainer } from './styled-left'
import add from "../../assets/image/add.png"
import { sidelist } from '../../utils/sidebarlist'
import { DataGrid} from '@mui/x-data-grid';
// icons
import { IoMdPhonePortrait } from 'react-icons/io'
import {HiUsers} from "react-icons/hi"
import { Chip } from '@mui/material';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'message', headerName: 'Massage',  width: 900},
  { field: 'time', headerName: 'time', },
];

const rows = [
  { id: 1, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '7:23', },
  { id: 2, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '4:56', },
  { id: 3, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:34', },
  { id: 4, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '5:23'},
  { id: 5, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '6:23' },
  { id: 6, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: "6:78"},
  { id: 7, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:67'},
  { id: 8, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '9:23'},
  { id: 9, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '10:56' },
  { id: 10, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '7:23', },
  { id: 11, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '4:56', },
  { id: 12, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:34', },
  { id: 13, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '5:23'},
  { id: 14, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '6:23' },
  { id: 15, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: "6:78"},
  { id: 16, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:67'},
  { id: 17, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '9:23'},
  { id: 18, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '10:56' },
  { id: 1, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '7:23', },
  { id: 2, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '4:56', },
  { id: 3, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:34', },
  { id: 4, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '5:23'},
  { id: 5, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '6:23' },
  { id: 6, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: "6:78"},
  { id: 7, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:67'},
  { id: 8, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '9:23'},
  { id: 9, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '10:56' },
  { id: 1, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '7:23', },
  { id: 2, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '4:56', },
  { id: 3, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:34', },
  { id: 4, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '5:23'},
  { id: 5, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '6:23' },
  { id: 6, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: "6:78"},
  { id: 7, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:67'},
  { id: 8, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '9:23'},
  { id: 9, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '10:56' },
  { id: 1, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '7:23', },
  { id: 2, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '4:56', },
  { id: 3, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:34', },
  { id: 4, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '5:23'},
  { id: 5, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '6:23' },
  { id: 6, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: "6:78"},
  { id: 7, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:67'},
  { id: 8, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '9:23'},
  { id: 9, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '10:56' },
  { id: 1, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '7:23', },
  { id: 2, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '4:56', },
  { id: 3, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:34', },
  { id: 4, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '5:23'},
  { id: 5, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '6:23' },
  { id: 6, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: "6:78"},
  { id: 7, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '2:67'},
  { id: 8, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '9:23'},
  { id: 9, message: 'V will never send you a link to external website or request for your digital bank profile credentials via any digital channel (e-mail, Telephone or via any social media platform, i.e. Twitter, Facebook, LinkedIn, WhatsApp, Instagram etc) or in person.', time: '10:56' },
];

const Left = () => {
  return (
    <LeftSidebarContainer>

      {/* composed button */}
      <div className='compose'>
        {/* icons */}
        <img src={add} alt= "" width={50} />

        {/* ttitle */}
        <h2>Compose</h2>
      </div>

      {/* sidebar links */}
      <SidebarList/>

      
    </LeftSidebarContainer>
  )
}

export default Left


// sidebar list component
const SidebarList  = () => {
  return (
    <SidebarListContainer>
      {
        sidelist.map((item, index) => {
          return (
            <div className='icon__title--container' key={index}>
              <div className='icon__title'>
                {/* icon & title */}
                <item.icon className='icon'/>
                {/* title */}
                <h3>{item.name}</h3>
              </div>
            
            {
              item.badge ? 
                <span className='bagde__total'>{item.badge}</span>
              : ""
            }
            
            </div>  
          )
        })
      }
     
    </SidebarListContainer>
  )
}

export const SidebarCenter = ( ) => {
  return (
    <SidebarCenterContainer>
        {/* tab panel */}
        <div className='tab__panel--container'>
          {/* primary */}
          <div className='tab__1'>
            {/* icon */}
            <IoMdPhonePortrait className='icon active'/>
            {/* title */}
            <p className='active'>Primary</p>
          </div>

          {/* social */}
          <div className='tab__2'>
            {/* icon */}
            <HiUsers className='icon'/>
            <div className="">
              {/*  */}
              <div className="tab__2--social" >
                <p>Socials</p>
                <Chip label="5 new" color="primary" style={{height: 20}}/>
              </div>
              <span  className='span'>Twitter, Facebook</span>
            </div>
          </div>

          {/* promotio */}
          {/* social */}
          <div className='tab__3'>
            {/* icon */}
            <HiUsers className='icon'/>
            <div className="">
              {/*  */}
              <div className="tab__3--promotions">
                <p>Promotions</p>
                <Chip label="5 new" color="success" className="" style={{height: 20}}/>
              </div>
              <span className='span'>Twitter, Facebook</span>
            </div>
          </div>
        </div>
        <div style={{ height: "100%", width: '100%' }}>
          <DataGrid
            // GridLinesVisibility="none"
            rows={rows}
            columns={columns}
            pageSize={30}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
    </SidebarCenterContainer>
  )
}