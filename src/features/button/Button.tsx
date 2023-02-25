import React from "react";
import { useGetButtonClasses } from "./hooks/useGetButtonClasses";

export enum ButtonSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export enum ButtonVariant {
  Primary = 'primary',
  Success = 'success',
  Alert = 'alert',
  Warning = 'warning',
  Dark = 'dark',
  LightGrey = 'light-grey',
  White = 'white',
  AccentOne = 'accent-01',
  AccentTwo = 'accent-02',
  AccentThree = 'accent-03',
  ChartPrimary = 'chart-primary',
  ChartSecondary = 'chart-secondary',
  GradientPrimary = 'gradient-primary',
  GradientSecondary = 'gradient-secondary',
}

export interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  children: string | JSX.Element | JSX.Element[];
  isStyleguideButton?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const classes = useGetButtonClasses(props);

  return (
    <button className={classes}>
      { props.children }
    </button>
  )
}
