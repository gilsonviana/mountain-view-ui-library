import { useStyles } from '@src/misc/hooks/useStyles/hook';
import type { ColorKeys } from '@src/misc/theme';
import React from 'react';
import { Text, TextProps } from "react-native"

type SizeVariations = 'sm' | 'md' | 'lg'

interface Props extends TextProps {
  children: string
  size?: SizeVariations
  bold?: boolean
  color?: Partial<ColorKeys>
}

export const Paragraph = ({ children, size = 'md', color = 'body', style, ...rest }: Props) => {
  const s = useStyles(({ getColor, getVariable }) => ({
    paragraph: {
      color: getColor({ color }),
      // @ts-expect-error {key} does not accept a string
      ...getVariable({ key: 'paragraph-' + size }),
    }
  }))

  return (
    <Text style={[s.paragraph, style]} {...rest}>{children}</Text>
  )
}