/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"], 
   theme: {
    extend: {
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024',
        xl: '1280',
      },
      colors:{
        rose:{
          light: '#FFC4E1',
          darck:'#FF007E',
        },
        blue:{
          light: '#5B60FF',
          dark:'#0E14F1',
        },
        darkgray:'#2D2D2D',
        pureWhite:'#F7F5F0',
        yellow: '#FFD700',
        green: '#1DB216',
        linksColor: '#00000080'
      },
     fontFamily:{
      SFProDisplay:["SF Pro Display", "sans-serif"]
     }
    },
  },
  plugins: [],
}


//     fontFamily: {
//       PtSansBold: ["PtSansBold", "sans-serif"],
//       PtSansItalic: ["PtSansItalic", "sans-serif"],
//     },
//   },
// },
// plugins: [],
// };