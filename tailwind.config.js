/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"], 
   theme: {
    extend: {
      screens:{
        // sm: '640px',
        tablet: '1159px',
        lg: '1280px',
        // xl: '1280',
      },
      boxShadow: {
        '3xl': '0 4px 20px -5px rgba(0, 0, 0, 0.8)',
        'cardShadow': '0 14px 40px 0px rgba(0, 0, 0, 0.05)',
        'hoverCardShadow': '0 14px 40px 0px rgba(0, 0, 0, 0.3)',

      },
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
    content:{
      'arrowRightIcon': 'url(../images/icons/Icon-right.svg)',
      'arrowrose': 'url(../images/icons/Icon-right-rose.svg)',
      'readMoreHover': 'url(../images/icons/read-moreArrow.svg)'

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
      'size-xl': ['1.125rem', {
        lineHeight: '1.438rem',
        fontWeight: '700',
      }],

        // 16px Paragraph line height 23
        'size-lg': ['1rem', {
          lineHeight: '1.438rem',
          fontWeight: '500',
        }],

    // 16px Paragraph line height 19
      'headerItem': ['1rem', {
        lineHeight: '1.193rem',
        fontWeight: '500',
      }],
    // 16px Paragraph line height 19
    'btnText': ['1rem', {
      lineHeight: '1.193rem',
      fontWeight: '700',
    }],
      // 14 px  smaller paragraph
      'size-md': ['0.875rem', {
        lineHeight: '1.438rem',
        fontWeight: '500',
      }],
      // 12px Smallest
      'size-sm': ['0.75rem', {
        lineHeight: '1.438rem',
        fontWeight: '700',
      }],
    }
  },
  plugins: [
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('search-cancel', '&::-webkit-search-cancel-button');
    }),
  ],
}
