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
        '210': '210px',
        '27': '27px',
        '100': '100px',
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
      },
     width: {
        'content-width': '1200px',
        'nav-items': '800px',
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
        
      },
      fontSize: {
        'header-txt': '51px',
        'title-size': '22px',
        'btn-font-size': '20px',
        '48': '48px',
        '32': '32px',
        '26': '26px',
        '28': '28px',
        
       
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
        'img-top': '84px',
      }
    },
  },
  plugins: [],
}