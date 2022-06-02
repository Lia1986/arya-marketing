<template>
     <div>
        <b-modal id="email-confirm" class="bg-blue_nav">
            <div class="pt-40 mobile-nav-menu pb-20" >
                <div class="bg-blue_nav fill mobile_menu_bar absolute inset-0 w-100 bg-mobile-nav-color z-50 pt-26 pl-30 pr-30 pb-90">
                    <div class="d-flex justify-end cursor-pointer"  v-html="$feathericons['x'].toSvg()" @click="$bvModal.hide('email-confirm')"></div>
                    <div class="success-message pt-60">
                       <h2 class="text-white font-weight600 text-22 text-center pb-40">Email successfully sent!</h2>
                       <p class="text-center text-22 font-weight500 text-white pb-76">We have sent a recovery link to your email. Please check also your spam folder.</p>
                      <div class="w-100 d-flex justify-center">
                           <a href="" class="text-white font-weight600 text-22 text-center">Stil having issues? </a>
                      </div>
                     <div>
                          <button class="border-1 rounded-8 w-100 py-20 border-white mt-40 font-weight700 text-20 text-white">Send us an email, Here.</button>
                     </div>
                    </div>
                </div>
            </div> 
        </b-modal>
     
    </div>
</template>
<style>

</style>