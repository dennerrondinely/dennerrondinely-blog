import React from "react"

import * as S from "./styles"

import Icons from "./Icons"
import links from "./content"

function SocialLinks() {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map(({ label, url }) => {
          const Icon = Icons[label]

          return (
            <S.SocialLinksItem key={label}>
              <S.SocialLinksLink
                href={url}
                title={label}
                target="_blank"
                rel="noopeener noreferrer"
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
}

export default SocialLinks
