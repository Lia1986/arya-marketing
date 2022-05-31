<template>
    <header>

        <div class="bg-blue_nav pt-40 mobile-nva-menu pb-20" v-if="windowWidth<990">
           <div class="w-80 m-auto d-flex justify-between items-center fill">
                <img src="@/assets/icons/logo.svg" alt="" class="w-116">
              <div class="d-flex items-center">
                   <div class="bg-signin-btn w-signin-btn h-12 d-flex items-center justify-center rounded drop-shadow-md drop-shadow-3xl ml-20">
                   <button class="uppercase text-white font-weight800">Sign In</button>
               </div>
                <span v-html="$feathericons['menu'].toSvg()" class="ml-20" @click="openMobileMenu"></span>
                    <div v-if="mobile_menu">bgfbfb</div>
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
                <a href="" class="uppercase text-white nav-item">about us</a>
            </div>
            <div class="bg-signin-btn w-signin-btn h-12 d-flex items-center justify-center rounded drop-shadow-md drop-shadow-3xl ml-20">
                 <button class="uppercase text-white font-weight800">Sign In</button>
            </div>
        </div>
       </div>
       </header>
</template>
<script>
export default {
    name: 'TheHeader',
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