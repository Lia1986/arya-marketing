<template>
    <header>
        <div class="nav_banner bg-blue_nav h-24"></div>
       <div class="bg-main_bg_color pt-8 pb-6">
            <div class="w-content-width 2xl:w-80 xl:w-80 lg:w-80 md:w-80 mx-auto d-flex items-center justify-between">
            <div class="">
                <img src="@/assets/icons/logo.svg" alt="">
            </div>
            <div class="w-nav-items d-flex justify-between px-10">
                <a href="" class="uppercase text-white">Platform</a>
                <a href="" class="uppercase text-white">why arya</a>
                <a href="" class="uppercase text-white">about us</a>
                <!-- <a href="" class="uppercase text-white">get started</a> -->
               
            </div>
            <div class="bg-signin-btn w-signin-btn h-12 d-flex items-center justify-center rounded drop-shadow-md drop-shadow-3xl ml-20">
                 <a href="" class="uppercase text-white ">Sign In</a>
            </div>
        </div>
       </div>
       </header>
</template>
<script>
export default {
    name: 'TheHeader'
}
</script>