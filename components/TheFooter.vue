<template>
    <footer>
        <div class="bg-main_bg_color pt-footer-pd-top pb-footer-pd-bottem">
            <div class="w-content-width mx-auto">
            <div class="d-flex items-center justify-between pb-footer-logo-row">
                <div class="pr-logo-right-pd ">
                <img src="@/assets/icons/logo.svg" alt="" class="w-footer-logo-width">
            </div>
            <div class="w-footer-items d-flex justify-between px-10">
                <a href="" class="uppercase text-white">Carrers</a>
                <a href="" class="uppercase text-white">api docs</a>
                <a href="" class="uppercase text-white">Platform</a>
                <a href="" class="uppercase text-white">why arya</a>
                <a href="" class="uppercase text-white">about us</a>
            </div>
            </div>
            <div class="d-flex justify-between">
                <div class="d-flex">
                    <img src="@/assets/icons/twitter.svg" alt="" class="mr-3">
                <img src="@/assets/icons/linkedin.svg" alt="" class="mr-3">
                <div class="d-flex items-center justify-between">
                    <img src="@/assets/icons/mdi_email.svg" alt="" class="mr-3">
                <p class="text-white">email.mail.com</p>
               </div>
                </div>


               <div class="d-flex">
                <button class="bg-yellow-btn mr-3 w-footer-sign-in-width rounded text-blue-txt font-weight800 text-btn-font-size h-btn-hight">Sign Up</button>
                <button class="text-btn-font-size font-weight800 border-2 border-btn-yellow text-yellow-txt rounded w-footer-sign-in-width h-btn-hight">Book a demo</button>
               </div>
            </div>
           
        </div>
    
       </div>
    </footer>
</template>
<script>
export default {
    name: 'TheFooter'
}
</script>