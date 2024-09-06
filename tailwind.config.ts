import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-layer': "url(/assets/images/webp/footer-layer.webp)",
        'section-layer': "url(/assets/images/webp/section-layer.webp)",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        },
      },
      lineHeight: {
        'custom-xl': "60px",
      },
      colors: {
        'lightGreen': "#7A9E9F",
        'darkGreen': "#4F6367",
        'offGreen': "#2A3739",
        'coolGreen': "#88ADAE",
        'mediumGreen': "#B8D8D8",
        'lightSky': "#BBFFFF4D",
        'lightGray': "#00000033",
        'offGray': "#738184",
      },
      dropShadow: {
        'gray-sm': "1px 1px 0px #5F5F5F",
      },
      boxShadow: {
        'border-md': "0px 0px 0px 1px white, 2px 2px 0px 1px #7A9E9F",
      },
      fontSize: {
        'custom-xs': "8px",
        'custom-sm': "10px",
      }
    },
  },
  plugins: [],
};
export default config;