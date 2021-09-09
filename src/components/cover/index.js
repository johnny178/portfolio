import React from 'react'
import { Container, ImageBackground, Video, Name, Description, More } from './styles/cover'

export default function Cover({ children }) {
  return children;
}

Cover.Container = function CoverContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Cover.ImageBackground = function CoverImageBackground({ ...restProps }) {
  return <ImageBackground {...restProps} />
}

Cover.Video = function CoverVideo({ ...restProps }) {
  return <Video {...restProps} />
}

Cover.Name = function CoverName({ ...restProps }) {
  return <Name {...restProps} />
}

Cover.Description = function CoverDescription({ ...restProps }) {
  return <Description {...restProps} />
}

Cover.More = function CoverMore({ ...restProps }) {
  return <More {...restProps} />
}
