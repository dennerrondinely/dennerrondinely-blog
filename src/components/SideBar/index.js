import React from "react"

import Profile from "../Profile"
import SocialLinks from '../SocialLinks'

import { SidebarWrapper } from "./styles"

function SideBar() {
  return (
    <SidebarWrapper>
      <Profile />
      <SocialLinks />
    </SidebarWrapper>
  )
}

export default SideBar
