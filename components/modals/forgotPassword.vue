<template>
    <div>
        <b-modal id="forgot-password" class="bg-blue_nav">
            <div class="pt-40 mobile-nav-menu pb-20" >
                <div class="bg-blue_nav fill mobile_menu_bar absolute inset-0 w-100 bg-mobile-nav-color z-50 pt-26 pl-20 pr-20 pb-90">
                    <div class="d-flex justify-end cursor-pointer"  v-html="$feathericons['x'].toSvg()" @click="$bvModal.hide('forgot-password')"></div>
                    <div>
                        <div class="form-item">
                        <input type="text" id="username" autocomplete="off" required placeholder="Your email">
                            <label for="username">Email</label>
                        </div>
                        <div class="form-item">
                        <b-button v-b-modal.email-confirm class="mt-30 w-100" @click="$bvModal.hide('forgot-password')">
                            <button class="w-100 bg-yellow-btn rounded-8 border-btn-yellow py-15 uppercase font-weight700 form-sign-in">send me a recovery link</button> 
                        </b-button>
                    </div>
                </div>
                </div>
            </div> 
        </b-modal>
        <email-confirm></email-confirm>
    </div>
</template>

<script>
  import emailConfirm  from "@/components/modals/emailConfirm";
  export default {
    name: 'forgotPassword',
    components: {
        emailConfirm
    },
    data() {
        return {
     
        }
    },
    methods:{

    }
  }

</script>