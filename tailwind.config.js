/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        // text_purple : "#8246FD", //purple
        // text_gray : "#212121", //gray
        // blue_text : "#57A4F2", //blue
        // gray_light : "#F9F8F8", //gray
        // pink : "#FE5BAC", //pink
        // light_green : "#D1FAE5", //green
        // dark_green : "#059669",//green
        // purple_light : "#F7F3FF", //purple
        // red_light : "#EF4444",
        // gray_lightest : "#9E9E9E", //gray
        // light_blue : "#E4F2FF", //blue
        // pink_light : "#C9BCE3", //pink
        purple : {
          dark : "#8246FD",
          light : "#F7F3FF"
        },
        gray : {
          dark : "#21212",
          medium : "#F9F8F8",
          light : "#9E9E9E",
        },
        blue : {
          dark : "#57A4F2",
          light : "#E4F2FF",
        },
        pink : {
          dark : "#FE5BAC",
          light : "#C9BCE3"
        },
        green : {
          dark : "#059669",
          light : "#D1FAE5",
        },
        red : {
          dark : "#B91C1C",
          medium : "#EF4444",
          light : "#FEE2E2",
        },
        black : {
          light : "rgba(0, 0, 0, 0.30)"
        },
      },
      boxShadow: {
        modal : "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",
        shadow_light : "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
        nav : "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
        card : "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
