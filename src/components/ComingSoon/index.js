import * as S from "./styles"

import BgSlider from "./BgSlider"
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare"
import { Instagram } from "@styled-icons/boxicons-logos/Instagram"
import Logo from "../Logo"
import React from "react"
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp"

// import { graphql, useStaticQuery } from "gatsby"

const ComingSoon = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     pills: file(relativePath: { eq: "001.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1920, quality: 60) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }To doido para ver como fez/fará o menu
  // `)
  return (
    <S.Wrapper>
      {/* <S.Background fluid={data.pills.childImageSharp.fluid} /> */}
      <BgSlider />
      <S.Infos>
        <Logo white large center />
        <S.Description>
          Estamos atualizando algumas coisas... <br />
          Enquanto isso, fale conosco pelos canais abaixo:
        </S.Description>
        <S.SocialLinks>
          <S.Links
            href="https://instagram.com/guielu_fotos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </S.Links>
          <S.Links
            href="https://wa.me/5511952393453?text=Olá,%20gostaria%20de%20falar%20sobre%20o%20ensaio%20fotográfico.%20Meu%20nome%20é:%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsapp />
          </S.Links>
          <S.Links
            href="https://web.facebook.com/guielufotos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookSquare />
          </S.Links>
        </S.SocialLinks>
      </S.Infos>
    </S.Wrapper>
  )
}

export default ComingSoon
