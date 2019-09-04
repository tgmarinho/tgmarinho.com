import React from "react"

import * as S from "./styled"
import Icons from "../SocialLinks/Icons"
import links from "../SocialLinks/content"

import { Github } from "styled-icons/boxicons-logos/Github"
import { Twitter } from "styled-icons/boxicons-logos/Twitter"
import { Youtube } from "styled-icons/boxicons-logos/Youtube"
import { Linkedin as LinkedIn } from "styled-icons/boxicons-logos/Linkedin"
import { Instagram } from "styled-icons/boxicons-logos/Instagram"

const IconsNew = {
  Github,
  Twitter,
  Youtube,
  LinkedIn,
  Instagram,
}

const SocialImageLinks = () => {
  return (
    <S.ImageArea>
      <S.ImageWrapper>
        <S.Photo
          src="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Atul Prajapati"
        />
        <S.Name>Thiago Marinho</S.Name>
        <S.ListWrapper>
          {links.map((link, i) => {
            const Icon = IconsNew[link.label]
            return (
              <S.ListItem key={i}>
                <S.ListItemLink
                  href={link.url}
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.IconWrapper>
                    <Icon />
                  </S.IconWrapper>
                </S.ListItemLink>
              </S.ListItem>
            )
          })}
        </S.ListWrapper>
      </S.ImageWrapper>
    </S.ImageArea>
  )
}

export default SocialImageLinks
