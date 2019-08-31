import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import SideBar from "../SideBar"
import MenuBar from "../MenuBar"

import * as S from "./styled"
import Global from "../../styles/global"

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <Global />
    <TransitionPortal level="top">
      <SideBar />
    </TransitionPortal>
    <S.LayoutMain>{children}</S.LayoutMain>
    <TransitionPortal level="top">
      <MenuBar />
    </TransitionPortal>
  </S.LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
