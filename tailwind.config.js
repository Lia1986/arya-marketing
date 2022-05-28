module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      padding: {
        'nav': '48px',
        'logo-right-pd': '97px',
        'footer-pd-top': '82px',
        'footer-pd-bottem': '142px',
        'footer-logo-row': '75px',
        'header-txt-padding': '55px',
        'header-btn-padding': '24px',
        'title-padding': '40px',
        'header-section-spaces': '170px',
        'header-section-bottom': '186px',
        '60': '60px',
        '20': '20px',
        '15': '15px',
        '27': '27px',
        '100': '100px',
        '76': '76px',
        '96': '96px',
        '26': '26px',
        '10': '10px',
        '150': '150px',
        '610': '610px'
      },
      margin: {
        'sm': '-1px',
        
      },
     
      backgroundColor: {
        'blue_nav': '#0F6CC2',
        'main_bg_color': '#0266D1',
        'signin-btn': '#0266D1',
        'yellow-btn': '#FFC800',
        'light-secton': '#F6F7F8',
        'btn-bckg': '#EEEEEE',
        'slide-bg-color': '#EAEEF1',
      },
     width: {
        'content-width': '1200px',
        'nav-items': '600px',
        'signin-btn': '90px',
        'footer-items': '850px',
        'footer-logo-width': '205px',
        'footer-sign-in-width': '200px',
        'header-width1': '50%',
        'header-width2': '50%',
        'header-btn': '260px',
        'header-p': '66%',
        'trusted-by': '180px',
        '780': '780px',
        '68': '68%',
        '60': '60px',
        '233': '233px',
        '226': '226px',
        '30': '30%',
        "60": '60%',
        '70': '70%',
        '80': '80%'
        
      },
      maxWidth: {
         '226': '226px',
        },
      fontSize: {
        'header-txt': '51px',
        'title-size': '22px',
        'btn-font-size': '20px',
        '18': '18px',
        '26': '26px',
        '22': '22px',
        '24': '2px',
        '28': '28px',
        '48': '48px',
        '36': '36px',
        '32': '32px',
        
        
       
     },
      fontWeight: {
       'weight800': '800',
       'weight600': '600',
       'weight500': '500',
       'weight700': '700',
       'weight400': '400',
      },
      colors: {
        'yellow-txt': '#FFC800',
        'blue-txt': '#0266D1',
        'btn-yellow': '#FFC800',
        'title-color': '#131A1C',
        'box-gray': '#E6E6E6',
        
      },

      height: {
        'signin-btn': '52px',
        '830': '830px',
        },
      lineHeight: {
        'header-txt': '71px',
        '56': '56px',
        '43': '43px',
        '30': '30px',
        
      }, 
      borderRadius: {
        '8': '8px',
       
    },
      dropShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
       },
       inset: {
        '43': '-40px',
      },
      screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '991px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
      },
      
    },
  },
  plugins: [],
}