import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import GlobalStyles from "../styles/global"

const Container = styled.section`
  align-items: center;
  background-image: url("https://tgmarinho.com/assets/img/star-404.gif");
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 800px;
  color: #111;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "San Francisco",
    "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial,
    sans-serif;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  width: 100vw;
  @media screen and (max-width: 768px) {
    background-size: 280px;
  }
`

const Title = styled.h1`
  background: var(--background);
  color: var(--texts);
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`

const Text = styled.p`
  background: var(--background);
  color: var(--texts);
  font-family: Courier, monospace;
`

const Button = styled(Link)`
  background: var(--background);
  border: 1px solid var(--borders);
  border-radius: 6px;
  color: var(--texts);
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.06em;
  line-height: 32px;
  margin-top: 1rem;
  padding: 0 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.6;
  }
`

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <GlobalStyles />
    <Title>404</Title>
    <Text>Ué? Cadê? Parece que não tem o que você procura.</Text>
    <Button to="/">De volta ao blog!</Button>
  </Container>
)

export default NotFoundPage
