import React from 'react'
import { HeaderPane, Bullet, Header } from './styles/blockTitle';

export default function BlockTitle({ title }) {
  return (
    <BlockTitle.HeaderPane>
      <BlockTitle.Bullet />
      <BlockTitle.Header>{title}</BlockTitle.Header>
    </BlockTitle.HeaderPane>
  );
}

BlockTitle.HeaderPane = function BlockTitleHeaderPane({ children, ...restProps }) {
  return <HeaderPane {...restProps}>{children}</HeaderPane>
}

BlockTitle.Bullet = function BlockTitleBullet({ ...restProps }) {
  return <Bullet {...restProps} />
}


BlockTitle.Header = function BlockTitleHeader({ ...restProps }) {
  return <Header {...restProps} />
}