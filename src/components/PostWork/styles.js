import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`
export const Title = styled.h1``
export const WorkWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
  `}
`
export const WorkItem = styled(AniLink)`
  width: 100%;
  height: 450px;
  text-decoration: none;
  overflow: hidden;
  position: relative;
`
export const WorkBackground = styled(Img)`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  position: absolute !important;
  z-index: -1;
`
export const WorkInfos = styled.div`
  width: calc(100% - 20px);
  background-color: rgba(0, 0, 0, 0.85);
  height: calc(100% - 20px);
  opacity: 0;
  transition: opacity 0.125s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  &:hover {
    opacity: 1;
  }
`
export const WorkInfosTitle = styled.h2`
  color: #fff;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.3;
`
export const WorkInfosDescription = styled.p`
  color: #fff;
  font-size: 1.125rem;
`
export const ButtonMore = styled(AniLink)`
  margin: 40px auto;
  text-decoration: none;
  background-color: var(--color-secondary);
  padding: 8px 28px;
  color: #fff;
  display: block;
  width: max-content;
  transition: background-color 0.125s;
  &:hover {
    background-color: var(--color-tertiary);
  }
`
