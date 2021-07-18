import Color from 'color'

// TODO refactor
export const checkColor = (item: string) => {
  const color = Color(item)

  return color[color.isDark() ? 'lighten' : 'darken'](0.5).toString()
}

// TODO refactor
export const darker = (item: string): string[] => [
  'transparent',
  Color(item).darken(0.5).alpha(0.6).toString(),
]

// TODO refactor
export const lighter = (item: string): string[] => [
  Color(item).lighten(0.5).alpha(0.6).toString(),
  'transparent',
]
