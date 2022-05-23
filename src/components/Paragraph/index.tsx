import { useStyles } from '@src/misc/hooks/useStyles/hook';
import { ITheme } from '@src/misc/theme';
import React from 'react';
import { Text, TextStyle, TextProps } from "react-native"

type SizeVariations = 'sm' | 'md' | 'lg'

interface Props extends TextProps {
  children: string
  size?: SizeVariations
  bold?: boolean
}

export const Paragraph = ({ children, size = 'md', style, ...rest }: Props) => {
  const getProps = (theme: ITheme): Record<SizeVariations, Pick<TextStyle, 'fontSize' | 'lineHeight'>> => {
    return {
      'sm': theme.config.variables['paragraph-sm'],
      'md': theme.config.variables['paragraph-md'],
      'lg': theme.config.variables['paragraph-lg']
    }
  }

  const s = useStyles((theme) => ({
    paragraph: {
      color: theme.color.body.light,
      ...getProps(theme)[size]
    }
  }))
  return (
    <Text style={[s.paragraph, style]} {...rest}>{children}</Text>
  )
}