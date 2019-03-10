export default interface Props {
  readonly colors?: string[]
  readonly selectedColor?: string
  readonly onSelect?: (item: string) => void
  readonly horizontal?: boolean
  readonly shadow?: boolean
  readonly applyGradient?: boolean
  readonly sort?: boolean
  readonly columns?: number
  readonly itemSize?: number
  readonly marker?: 'border' | 'checkmark' | 'fade' | 'none'
}
