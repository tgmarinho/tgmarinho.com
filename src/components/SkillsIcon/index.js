import React from "react"

import Icons from "./Icons"
import links from "./content"

import * as S from "./styled"

const SkillsIcon = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label + "Icon"]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href="#"
              title={link.label}
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SkillsIcon
