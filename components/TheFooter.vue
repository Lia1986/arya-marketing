<template>
    <footer>
        <div class="bg-main_bg_color pt-footer-pd-top pb-footer-pd-bottem footer-desktop">
            <div class="w-content-width 2xl:w-80 mx-auto">
            <div class="d-flex items-center justify-between pb-footer-logo-row">
                <div class="pr-logo-right-pd ">
                <img src="@/assets/icons/logo.svg" alt="" class="w-footer-logo-width 4xl:w-116">
            </div>
            <div class="w-footer-items 4xl:w-226 d-flex justify-between px-10">
                <a href="" class="uppercase text-white">Carrers</a>
                <a href="" class="uppercase text-white">api docs</a>
                <a href="" class="uppercase text-white 4xl:hidden">Platform</a>
                <a href="" class="uppercase text-white 4xl:hidden">why arya</a>
                <a href="" class="uppercase text-white 4xl:hidden">about us</a>
            </div>
            </div>
            <div class="d-flex justify-between">
              <div class="d-flex">
                <img src="@/assets/icons/twitter.svg" alt="" class="mr-3 4xl:w-32">
                <img src="@/assets/icons/linkedin.svg" alt="" class="mr-3 4xl:w-32">
                <!-- <div class="d-flex items-center justify-between">
                    <img src="@/assets/icons/mdi_email.svg" alt="" class="mr-3">
                <p class="text-white">email.mail.com</p>
               </div> -->
                </div>
             <div class="d-flex 4xl:flex-col">
                <button class="uppercase bg-yellow-btn mr-3 w-footer-sign-in-width rounded text-blue-txt font-weight800 text-btn-font-size h-signin-btn yellow-button">Sign Up</button>
                <button class="uppercase px-2.5 text-btn-font-size font-weight800 border-2 border-btn-yellow text-yellow-txt rounded w-footer-sign-in-width h-signin-btn d-flex items-center justify-around 4xl:mt-20 button-with-icon">Book a demo <span v-html="$feathericons['message-square'].toSvg()" ></span></button>
               </div>
            </div>
           
        </div>
    
       </div>
       <div class="footer-mobile bg-main_bg_color">
            <div class="">
                <button class="uppercase bg-yellow-btn mr-3 w-footer-sign-in-width rounded text-blue-txt font-weight800 text-btn-font-size h-signin-btn w-100 yellow-button">Sign Up</button>
                <button class="uppercase px-2.5 text-btn-font-size font-weight800 border-2 border-btn-yellow text-yellow-txt rounded w-footer-sign-in-width h-signin-btn d-flex items-center justify-center w-100 mt-20 button-with-icon">Book a demo <span v-html="$feathericons['message-square'].toSvg()" ></span></button>
            </div>
            <div class="d-flex logo-row justify-between items-center">
                 <img src="@/assets/icons/logo.svg" alt="" class="w-footer-logo-width 4xl:w-116">
                 <div class="d-flex">
                    <img src="@/assets/icons/twitter.svg" alt="" class="mr-3 4xl:w-32">
                    <img src="@/assets/icons/linkedin.svg" alt="" class="mr-3 4xl:w-32">
                 </div> 
                </div>
                 <div class="w-footer-items 4xl:w-226 d-flex justify-between px-10 ml-auto">
                <a href="" class="uppercase text-white">Carrers</a>
                <a href="" class="uppercase text-white">api docs</a>
              </div>
           </div>
    </footer>
</template>
<script>
export default {
    name: 'TheFooter'
}
</script>