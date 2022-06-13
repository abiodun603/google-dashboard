import { IoMdPhonePortrait } from 'react-icons/io'
import {AiFillFile, AiTwotoneStar} from "react-icons/ai"
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { IoSendSharp } from 'react-icons/io5'
import {RiPriceTagFill} from "react-icons/ri"
export const sidelist = [
  {
    name: "Inbox",
    icon: IoMdPhonePortrait,
    badge: "2,242"
  },
  {
    name: "Starred",
    icon: AiTwotoneStar,
  },
  {
    name: "Snoozed",
    icon: MdOutlineAccessTimeFilled,
  },
  {
    name: "Sent",
    icon: IoSendSharp,
  },
  {
    name: "Drafts",
    icon: AiFillFile,
    badge: "10"
  },
  {
    name: "Conversation",
    icon: RiPriceTagFill,
  }
]