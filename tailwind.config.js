/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('~/assets/images/mobile/image-header.jpg')",
        "hero-desktop": "url('~/assets/images/desktop/image-header.jpg')",

        "transform-mobile": "url('~/assets/images/mobile/image-transform.jpg')",
        "transform-desktop":
          "url('~/assets/images/desktop/image-transform.jpg')",

        "standout-mobile": "url('~/assets/images/mobile/image-stand-out.jpg')",
        "standout-desktop":
          "url('~/assets/images/desktop/image-stand-out.jpg')",

        "graphic-mobile":
          "url('~/assets/images/mobile/image-graphic-design.jpg')",
        "graphic-desktop":
          "url('~/assets/images/desktop/image-graphic-design.jpg')",

        "photography-mobile":
          "url('~/assets/images/mobile/image-photography.jpg')",
        "photography-desktop":
          "url('~/assets/images/desktop/image-photography.jpg')",
      },
      colors: {
        primary: {
          red: "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          cyan: "hsl(167, 40%, 24%)",
          blue: "hsl(198, 62%, 26%)",
          footer: "hsl(168, 34%, 41%)",
        },
        accent: {
          100: "hsl(212, 27%, 19%)",
          200: "hsl(213, 9%, 39%)",
          300: "hsl(232, 10%, 55%)",
          400: "hsl(210, 4%, 67%)",
        },
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      fontSize: {
        base: "18px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
