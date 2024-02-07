/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"], 
   theme: {
    extend: {
      // screens:{
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024',
      //   xl: '1280',
      // },
      colors:{
        rose:{
          light: '#FFC4E1',
          dark:'#FF007E',
        },
        blue:{
          light: '#5B60FF',
          dark:'#0E14F1',
        },
        darkGray:'#2D2D2D',
        pureWhite:'#F7F5F0',
        yellow: '#FFD700',
        green: '#1DB216',
        linksColor: '#00000080'
      },
     fontFamily:{
      SFProDisplay:["SF Pro Display", "sans-serif"]
     }
    },
    fontSize: {
      // 50px h1
      'heading-lg': ['3.125rem', {
        lineHeight: '3.729rem',
        fontWeight: '700',
      }],
      // 38px h2
      'heading-md': ['2.375rem', {
        lineHeight: '2.834rem',
        fontWeight: '700',
      }],
      // 28px heading-3
      'heading-sm': ['1.75rem', {
        lineHeight: '2.088rem',
        fontWeight: '700',
      }],
      // 18px Paragraph bigger, bold
      'text-xl': ['1.125rem', {
        lineHeight: '1.438rem',
        fontWeight: '700',
      }],
      // 16px Paragraph
      'text-lg': ['1rem', {
        lineHeight: '1.438rem',
        fontWeight: '500',
      }],
      // 14 px  smaller paragraph
      'text-md': ['0.875rem', {
        lineHeight: '1.438rem',
        fontWeight: '500',
      }],
      // 12px Smallest
      'text-sm': ['0.75rem', {
        lineHeight: '1.438rem',
        fontWeight: '500',
      }],
    }
  },
  plugins: [],
}
