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
      },
      margin: {
        'sm': '-1px',
        
      },
     
      backgroundColor: {
        'blue_nav': '#0F6CC2',
        'main_bg_color': '#0266D1',
        'signin-btn': '#0266D1',
        'yellow-btn': '#FFC800',
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
        
      },
      fontSize: {
        'header-txt': '51px',
      },
      fontWeight: {
       'weight800': '800',
      },
      colors: {
        'yellow-txt': '#FFC800',
        'blue-txt': '#0266D1',
        'btn-yellow': '#FFC800',
        
      },

      height: {
        ' signin-btn': '52px',
      },
      lineHeight: {
        'header-txt': '71px',
        
      }, 
      dropShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
       },
    },
  },
  plugins: [],
}