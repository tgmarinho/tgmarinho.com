import React from "react"
import { Container } from "./teste"

import Icons from "../SocialLinks/Icons"
import links from "../SocialLinks/content"

const Teste2 = () => {
  return (
    <Container>
      <div class="image-area">
        <div class="img-wrapper">
          <img
            src="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Atul Prajapati"
          ></img>
          <h2>David james</h2>
          <ul>
            {links.map((link, i) => {
              const Icon = Icons[link.label]
              return (
                <li>
                  <a href="https://github.com/atuljustano">
                    <i>
                      <Icon size={18} />
                    </i>
                  </a>
                </li>
              )
            })}

            {/* <li>
              <a href="https://www.instagram.com/atulkprajapati2000/">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/atuljustano">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw">
                <i class="fab fa-youtube"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Teste2
