import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global"
import SideBar from "../SideBar"

import { LayoutWrapper, LayoutMain } from "./styles"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <SideBar />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
