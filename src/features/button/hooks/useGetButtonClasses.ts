import { ButtonProps, ButtonSize, ButtonVariant } from "../Button";

const baseButtonClasses = "flex justify-between items-center rounded-2xl font-medium"

const getButtonPaddingClasses = (buttonProps: ButtonProps) => new Map([
  [ButtonSize.Large, "p-4"],
  [ButtonSize.Medium, "p-4"],
  [ButtonSize.Small, "p-4"],
]).get(buttonProps.size)

const getButtonVariantClasses = (buttonProps: ButtonProps) => new Map([
  [ButtonVariant.Primary, "bg-primary text-white"],
  [ButtonVariant.Success, "bg-success text-white text-white"],
  [ButtonVariant.Dark, "bg-dark text-white text-white"],
  [ButtonVariant.LightGrey, "bg-light-grey text-dark"],
  [ButtonVariant.Alert, "bg-alert text-white"],
  [ButtonVariant.Warning, "bg-warning text-white"],
  [ButtonVariant.White, "bg-white border-2 border-light-grey"],
  [ButtonVariant.AccentOne, "bg-accent-01 text-white"],
  [ButtonVariant.AccentTwo, "bg-accent-02 text-white"],
  [ButtonVariant.AccentThree, "bg-accent-03 text-white"],
  [ButtonVariant.ChartPrimary, "bg-chart-primary text-white"],
  [ButtonVariant.ChartSecondary, "bg-chart-secondary text-white"],
  [ButtonVariant.GradientPrimary, "bg-gradient-to-b from-[#D080FF] to-[#6C5DD3] text-white"],
  [ButtonVariant.GradientSecondary, "bg-gradient-to-b from-[#86E1A0] to-[#4FBF67] text-white"],
]).get(buttonProps.variant)

const getButtonMiscClasses = (buttonProps: ButtonProps) => {
  let classes = '';

  if (buttonProps.isStyleguideButton) classes += 'w-full'

  return classes.trim()
}

export const useGetButtonClasses = (props: ButtonProps) => ([
  baseButtonClasses,
  getButtonVariantClasses(props),
  getButtonMiscClasses(props),
  getButtonPaddingClasses(props)
].join(' '))
