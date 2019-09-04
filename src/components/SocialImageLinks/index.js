import React from "react"
import * as S from "./styled"

import Icons from "../SocialLinks/Icons"
import links from "../SocialLinks/content"

const SocialImageLinks = () => {
  return (
    <S.Container>
      <div class="container">
        <div class="image-area">
          <div class="img-wrapper">
            <img
              src="/assets/img/thiago-marinho.jpeg"
              alt="Thiago Marinho"
            ></img>
            <h2>Thiago Marinho</h2>
            <ul>
              {links.map((link, i) => {
                const Icon = Icons[link.label]
                return (
                  <li>
                    <a href={link.url}>
                      <i>
                        <Icon size={18} />
                      </i>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </S.Container>
  )
}

export default SocialImageLinks
