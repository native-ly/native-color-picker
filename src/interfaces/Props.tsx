export default interface Props {
  colors?: string[]
  selectedColor?: string
  onSelect: (item: string) => void
  horizontal?: boolean
  applyGradient?: boolean
  columns?: number
  itemSize?: number
  marker?: 'border' | 'checkmark' | 'fade' | 'none'
}
