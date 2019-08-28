import React from "react"
import PropTypes from "prop-types"
import SideBar from "../SideBar"
import MenuBar from "../MenuBar"

import * as S from "./styled"
import Global from "../../styles/global"

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <Global />
    <SideBar />
    <S.LayoutMain>{children}</S.LayoutMain>
    <MenuBar />
  </S.LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
