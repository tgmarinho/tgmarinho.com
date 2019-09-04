import styled from "styled-components"

export const ImageArea = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

export const ImageWrapper = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 180%;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    z-index: 1;
    transform: skew(45deg);
    transition: 0.5s;
  }

  &:hover:before {
    left: -180%;
  }
`
export const Photo = styled.img`
  height: 400px;
  width: 300px;
  filter: grayscale(100%);
  transition: 2s;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
  }
`
export const Name = styled.h2`
  background: tomato;
  /* font-family: Poppins; */
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: perspective(400px) rotateY(90deg);
  transform-origin: right;
  transition: 1s;

  ${ImageWrapper}:hover & {
    transform: perspective(400px) rotateY(0deg);
  }
`
export const ListWrapper = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background: rgba(255, 255, 255, 0);
`
export const ListItem = styled.li`
  background: #333;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  transform: perspective(800px) rotateY(90deg);
  transition: 0.5s;
  transform-origin: left;

  ${ImageWrapper}:hover & {
    transform: perspective(800px) rotateY(0deg);
  }

  ${ImageWrapper}:hover:nth-child(1) & {
    transition-delay: 0.2s;
  }

  ${ImageWrapper}:hover:nth-child(2) & {
    transition-delay: 0.6s;
  }

  ${ImageWrapper}:hover:nth-child(3) & {
    transition-delay: 0.8s;
  }

  ${ImageWrapper}:hover:nth-child(4) & {
    transition-delay: 0.1s;
  }
`
export const ListItemLink = styled.a`
  color: tomato;
  background: rgba(255, 255, 255, 0);
`

export const IconWrapper = styled.i`
  color: tomato;
  background: rgba(255, 255, 255, 0);

  ${ImageWrapper}:hover & {
    color: #fff;
    background: rgba(255, 255, 255, 0);
  }
`
