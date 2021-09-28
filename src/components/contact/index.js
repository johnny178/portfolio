import React from 'react'
import { Container, Content, Form, LeftPane, Input, RightPane, Textarea, Alert } from './styles/contact';

export default function Contact({ children }) {
  return children;
}

Contact.Container = function ContactContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Contact.Content = function ContactContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Contact.Form = function ContactForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>
}

Contact.LeftPane = function ContactLeftPane({ children, ...restProps }) {
  return <LeftPane {...restProps}>{children}</LeftPane>
}

Contact.RightPane = function ContactRightPane({ children, ...restProps }) {
  return <RightPane {...restProps}>{children}</RightPane>
}

Contact.Input = function ContactInput({ ...restProps }) {
  return <Input {...restProps} />
}

Contact.Textarea = function ContactTextarea({ ...restProps }) {
  return <Textarea {...restProps} />
}

Contact.Alert = function ContactAlert({ ...restProps }) {
  return <Alert {...restProps} />
}