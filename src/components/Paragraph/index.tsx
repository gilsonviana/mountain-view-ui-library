import React from 'react';
import { Text } from "react-native"

interface Props {
  children: string
}

export const Paragraph = ({ children }: Props) => {
  return (
    <Text>{children}</Text>
  )
}