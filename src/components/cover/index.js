import React from 'react'
import { CoverContainer, ImageBackground, Name, Description, More } from './styles/cover'

export default function Cover({ children }) {
  return children;
}

Cover.CoverContainer = function HeaderCoverContainer({ children, ...restProps }) {
  return <CoverContainer {...restProps}>{children}</CoverContainer>
}

Cover.ImageBackground = function HeaderImageBackground({ ...restProps }) {
  return <ImageBackground {...restProps} />
}

Cover.Name = function HeaderName({ ...restProps }) {
  return <Name {...restProps} />
}

Cover.Description = function HeaderDescription({ ...restProps }) {
  return <Description {...restProps} />
}

Cover.More = function HeaderMore({ ...restProps }) {
  return <More {...restProps} />
}
