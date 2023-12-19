/*Type for dialog options types*/
export type OptionType = {
  title?: string,
  buttonText?: string,
  customButtonHandler?: () => void,
  cancelOnBackgroundClick?: boolean,
  hideCustomButton?: boolean
}
