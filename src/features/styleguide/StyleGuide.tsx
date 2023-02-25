import React from "react";
import { motion } from "framer-motion"
import logo from "../../logo.svg";
import { Button, ButtonSize, ButtonVariant } from "../button/Button";

const ButtonGroup = (heading: string, variants: ButtonVariant[]) => {
  const buttonSubtextMap = new Map([
    [ButtonVariant.Primary, "355DFF"],
    [ButtonVariant.Dark, "1B1D21"],
    [ButtonVariant.LightGrey, "E4E4E4"],
    [ButtonVariant.White, "FFFFFF"],
    [ButtonVariant.AccentOne, "6C5DD3"],
    [ButtonVariant.AccentTwo, "3F8CFF"],
    [ButtonVariant.AccentThree, "FF98E5"],
    [ButtonVariant.Success, "4FBF67"],
    [ButtonVariant.Alert, "FF6628"],
    [ButtonVariant.Warning, "FF9F38"],
    [ButtonVariant.ChartPrimary, "FF7A68"],
    [ButtonVariant.ChartSecondary, "3DBAA2"],
    [ButtonVariant.GradientPrimary, ""],
    [ButtonVariant.GradientSecondary, ""],
  ])

  return (
    <section>
      <h3 className="text-3xl mb-4 font-bold">{ heading }</h3>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 justify-start">
        { variants.map((variant, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <Button variant={variant} size={ButtonSize.Medium} isStyleguideButton={true}>
              <span className="capitalize">
                { variant }
              </span>
                <span>
                { buttonSubtextMap.get(variant)}
              </span>
            </Button>
          </motion.div>
        ))}
      </section>
    </section>
  )
}

export const StyleGuide = () => {
  return (
    <section className="container mx-auto text-left py-10">
      <motion.div
        initial={{ opacity: 0, translateX: '-100%' }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 2 }}
      >
        <section className="flex items-center gap-2 mb-20">
          <img src={logo} className="App-logo w-20" alt="logo" />
          <h1 className="text-7xl font-bold">Unity<span className="bg-accent-01 w-2 h-2 inline-block"></span></h1>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <section className="flex flex-col gap-20">
          { ButtonGroup('Main Colors', [ButtonVariant.Primary, ButtonVariant.Dark, ButtonVariant.LightGrey, ButtonVariant.White])}
          { ButtonGroup('Accent Colors', [ButtonVariant.AccentOne, ButtonVariant.AccentTwo, ButtonVariant.AccentThree])}
          { ButtonGroup('Meaning Colors', [ButtonVariant.Success, ButtonVariant.Alert, ButtonVariant.Warning])}
          { ButtonGroup('Chart Colors', [ButtonVariant.ChartPrimary, ButtonVariant.ChartSecondary])}
          { ButtonGroup('Gradient Colors', [ButtonVariant.GradientPrimary, ButtonVariant.GradientSecondary])}
        </section>
      </motion.div>
    </section>
  )
}
