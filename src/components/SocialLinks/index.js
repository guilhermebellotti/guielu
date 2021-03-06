import * as S from "./styles"

import { Facebook } from "@styled-icons/boxicons-logos/Facebook"
import { Instagram } from "@styled-icons/boxicons-logos/Instagram"
import React from "react"
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp"

const SocialLinks = ({ hideMobile }) => {
  return (
    <S.Social hideMobile={hideMobile}>
      <S.SocialLinks
        href="https://web.facebook.com/guielufotos"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <Facebook />
      </S.SocialLinks>
      <S.SocialLinks
        href="https://wa.me/5511952393453?text=Olá,%20gostaria%20de%20falar%20sobre%20o%20ensaio%20fotográfico.%20Meu%20nome%20é%20"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
      >
        <Whatsapp />
      </S.SocialLinks>
      <S.SocialLinks
        href="https://www.instagram.com/guielu_fotografia/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <Instagram />
      </S.SocialLinks>
    </S.Social>
  )
}
export default SocialLinks
