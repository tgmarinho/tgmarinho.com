import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"
import SkillsIcon from "../components/SkillsIcon"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor Thiago Marinho de Oliveira"
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Thiago Marinho de Oliveira, sou apaixonado por
        desenvolvimento de software.
      </p>

      <p>
        Sou formado em Ciência da Computação pela Uniderp/Campo Grande-MS,
        atualmente Anhanguera (2013).
      </p>

      <p>
        Sou especialista em Engenharia de Software pala Estácio de Sá (2015).
      </p>

      <p>Sou muito bem casado e feliz com minha esposa, amo minha família.</p>

      <p>
        No meu tempo livre, faço academia, gosto de caminhar, assitir um
        Netflix, compartilhar conhecimento através de blog ou vídeo e até mesmo
        presencial.
      </p>

      <h2>Habilidades</h2>

      <p>
        Em tantos anos de carreira como <i>Full Stack Informática</i>, desde os
        10 anos de idade aprendendo e tals, tive contato com muita tecnologia e
        diversas áreas da TI (design com Corel, Photoshop, Fireworks, manutenção
        de computadores, redes, etc), mas foi da área de desenvolvimento de
        software que mas gostei, já trabalhei com:
      </p>

      <SkillsIcon />

      <h2>Foco</h2>

      <p>
        Hoje estou focado no desenvolvimento Web/Mobile Full Stack com
        Javascript Node, React, React Native e todo ecossitema por volta dessas
        tecnologias.
      </p>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks />
    </MainContent>
  </Layout>
)

export default AboutPage
