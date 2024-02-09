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
        bg:{
          main:'#F4F4F4',
          mainDark: '#D6D6D6',
          iconRose: '#FFC4E1',
          iconBlue:'#5B60FF',
          mobileMenu:'#0B0B0B',
        },
        colorsText:{
          rose: '#FF007E',
          blue:'#0E14F1',
          darkGray: '#2D2D2D',
          headerMenu: '#0B0B0B80'
        },
        partnersRect:'#00000033',
        iconRound: '#FF007E80',
        yellow:'#FFD700',
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
