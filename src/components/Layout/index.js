import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import * as S from "./styled"
import Global from "../../styles/global"

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <Global />
    <aside>
      <Profile />
    </aside>
    <S.LayoutMain>{children}</S.LayoutMain>
  </S.LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
