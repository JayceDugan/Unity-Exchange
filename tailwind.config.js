/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#355DFF',
      'dark': '#1B1D21',
      'white': '#FFFFFF',
      'light-grey': '#E4E4E4',
      'accent-01': '#6C5DD3',
      'accent-02': '#3F8CFF',
      'accent-03': '#FF98E5',
      'success': '#4FBF67',
      'alert': '#FF6628',
      'warning': '#FF9F38',
      'chart-primary': '#FF7A68',
      'chart-secondary': '#3DBAA2',
      'gradient-primary': '#3DBAA2',
      'gradient-secondary': '#FF6628',
    }
  }
}
