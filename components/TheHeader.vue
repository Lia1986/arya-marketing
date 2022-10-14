<template>
    <header>

        <div class="bg-blue_nav pt-40 mobile-nav-menu pb-20" v-if="windowWidth<990">
         <div v-if="mobile_menu" class="h-screen fill mobile_menu_bar absolute inset-0 w-100 bg-mobile-nav-color z-50 pt-26 pl-20 pr-20 pb-90">
         <div class="d-flex justify-end"  v-html="$feathericons['x'].toSvg()"  @click="openMobileMenu"></div>
         <div>
             <button class="border-1 rounded-8 w-100 uppercase py-15 border-white mt-20 font-weight700 text-16 text-white">platform</button> 
              <button class="border-1 rounded-8 w-100 uppercase py-15 border-white mt-17 font-weight700 text-16 text-white">why arya</button> 
              <a href="about-us"><button class="border-1 rounded-8 w-100 uppercase py-15 border-white mt-17 mb-40 font-weight700 text-16 text-white">about us</button></a>
              
              <b-button v-b-modal.reg-modal-mobile class="w-100 bg-yellow-btn rounded border-btn-yellow py-15 text-16 uppercase text-blue-txt font-weight700">sign in inin
         </b-button> 

           
              
         </div>
         </div>
           <div class="w-80 m-auto d-flex justify-between items-center fill">
                <img src="@/assets/icons/logo.svg" alt="" class="w-116">
                
              <div class="d-flex items-center">
                   <div class="bg-signin-btn w-signin-btn h-12 d-flex items-center justify-center rounded drop-shadow-md drop-shadow-3xl ml-20">
                   <b-button  v-b-modal.reg-modal-mobile class="uppercase text-white font-weight800">Sign In</b-button>
                   <b-modal id="reg-modal" title="BootstrapVue">
                   <p class="my-4">Hello from modal!</p>
                   </b-modal>
                   <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
               </div>
                <span v-html="$feathericons['menu'].toSvg()" class="ml-20" @click="openMobileMenu">
                </span>
                <!-- <div v-if="mobile_menu">bgfbfb</div> -->
              </div>
           </div>
        </div>
        <div class="nav_banner bg-blue_nav h-24 3xl:h-0"></div>
       <div class="bg-main_bg_color pt-8 pb-6 3xl:hidden">
            <div class="w-content-width 2xl:w-80 xl:w-80 lg:w-80 md:w-80 mx-auto d-flex items-center justify-between">
            <div class="">
                <img src="@/assets/icons/logo.svg" alt="">
            </div>
            <div class="d-flex justify-between px-10">
                <a href="" class="uppercase text-white nav-item">Platform</a>
                <a href="" class="uppercase text-white nav-item">why arya</a>
                <a href="about-us" class="uppercase text-white nav-item">about us</a>
            </div>
            <div class="bg-signin-btn w-signin-btn d-flex items-center justify-center rounded drop-shadow-md drop-shadow-3xl ml-20">
                 <b-button v-b-modal.reg-modal-mobile class="uppercase text-white font-weight800">Sign In</b-button>
                 <sign-in></sign-in>
            </div>
  </div>
 </div>
</header>
</template>

<script>
  import signIn  from "@/components/modals/signIn";
  export default {
      name: 'TheHeader',
      components: {
        signIn
      },
      data() {
          return {
              mobile_menu: false,
              windowWidth: 1920,
              
          }
      },
      mounted() {
          this.windowWidth = window.innerWidth
          this.$nextTick(() => {
              window.addEventListener('resize', this.onResize);
          })
      },
      methods:{
      openMobileMenu (){
          this.mobile_menu = !this.mobile_menu
      },
      onResize() {
          this.windowWidth = window.innerWidth
      },
      }
  }

</script>

<style>
  .password-layer{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .btn-secondary, .btn-secondary:focus, .btn-secondary:hover{
    border: 0;
  }
  .mt-30{
    margin-top: 30px;
  }
  .error-text{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    width: 185px;
    margin-left: 10px;
  }
 .mobile-nav-menu .fill svg {
     color: white;
 }
 .modal-content {
   background-color: transparent;
   border: transparent;
 }
 .modal-footer, .modal-header {
     display: none;
 }
 .modal-dialog {
  height: 528px;
  background-color: #00448D;
 }
 .see-passw-icon {
    position: absolute;
    top: 24px;
    right: 16px;
    cursor: pointer;
 }

 /*input styles */

 *,
*:focus {
  outline: none;
}

.cursor-pointer{
  cursor: pointer;
}

.form {
  width: 100%;
  margin: 0 auto;
  
}
.form-item {
  position: relative;
 
}
::placeholder {
    color: white !important;
}
.form-item input {
  display: block;
  width: 100%;
  height: 68px;
  background: transparent;
  border: solid 1px white;
  transition: all 0.3s ease;
  padding: 0 15px;
  border-radius: 8px;
  margin-top: 50px;
  color: #FFFFFF;
}
.form-item input:focus {
  border-color: blue;
}
.form-item label {
  position: absolute;
  cursor: text;
  z-index: 2;
  top: -18px !important;
  left: 10px;
  background: #00448D;
  padding: 0 10px;
  font-weight: 500;
  font-size: 20px !important;


color: #FFFFFF;
  transition: all 0.3s ease;
}
.form-item input:focus + label,
.form-item input:valid + label {
  font-size: 11px;
  top: -5px;
}
.form-item input:focus + label {
  color: blue;
}
.form-sign-in {
    height: 68px;
    margin-top: 43px;
    font-size: 20px;
    color: #00448D;
}

</style>