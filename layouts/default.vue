<template>
 <div>
    <div class="" role="presentation" />
    <the-header/>

    <main class="" role="presentation">
      <div  class="content-view" role="presentation">
        <transition name="fade">
          <nuxt />
        </transition>
      </div>
    </main>

    <the-footer />
 </div>

</template>
<script>

 import TheFooter from '~/components/TheFooter.vue'
 import TheHeader from '~/components/TheHeader.vue'


export default {
   components: {  TheFooter, TheHeader },
}
</script>
