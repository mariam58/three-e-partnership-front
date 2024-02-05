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
          dark:'#FF007E',
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
    fontSize: {
      // 50px
      'section-header-lg': ['3.125rem', {
        lineHeight: '3.75rem',
        fontWeight: '700',
      }],
      // 38px
      'section-header-sm': ['2.375rem', {
        lineHeight: '2.8rem',
        fontWeight: '700',
      }],
      // 28px
      'card-title': ['1.75rem', {
        lineHeight: '2rem',
        fontWeight: '700',
      }],
      // 18px
      'paragraf:lg': ['1.125rem', {
        lineHeight: '1.43rem',
        fontWeight: '700',
      }],
      // 16px
      'medium': ['1rem', {
        lineHeight: '1.43rem',
        fontWeight: '500',
      }],
      // 14 px
      'paragraf:md': ['0.8rem', {
        lineHeight: '1.43rem',
        fontWeight: '500',
      }],
      // 12px
      'paragraf:sm': ['0.75rem', {
        lineHeight: '1.43rem',
        fontWeight: '500',
      }],
    }
  },
  plugins: [],
}
