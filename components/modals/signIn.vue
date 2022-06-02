<template>
    <div>
        <b-modal id="reg-modal-mobile" class="bg-blue_nav ">
            <div class="pt-40 mobile-nav-menu pb-20" >
                <div class="bg-blue_nav fill mobile_menu_bar absolute inset-0 w-100 bg-mobile-nav-color z-50 pt-26 pl-20 pr-20 pb-90">
                    <div class="d-flex justify-content-between">
                        <div></div>
                        <!--show when the email or password did not match -->
                        <!-- <div class="d-flex">
                            <div v-html="$feathericons['alert-triangle'].toSvg()"></div>
                            <p class="error-text">Your email and password do not match</p>
                        </div> -->
                        <div class="d-flex justify-end cursor-pointer"  v-html="$feathericons['x'].toSvg()" @click="$bvModal.hide('reg-modal-mobile')"></div>
                    </div>
                    <div>
                        <div class="form-item">
                        <input type="text" id="username" autocomplete="off" required placeholder="Your email">
                            <label for="username">Email</label>
                        </div>
                        <div class="form-item">
                        <input :type="!showPassword ? 'password' : 'text'" id="password" autocomplete="off" required placeholder="insert password">
                            <label for="password">Password</label>
                            <div v-if="!showPassword" class="see-passw-icon" v-html="$feathericons['eye'].toSvg()" @click="showPassword = !showPassword"></div>
                            <div v-else class="see-passw-icon" v-html="$feathericons['eye-off'].toSvg()" @click="showPassword = !showPassword"></div>
                        </div>
                        <b-button v-b-modal.forgot-password @click="$bvModal.hide('reg-modal-mobile')">
                            <p class="text-white font-weight500 p-2 text-16">Forgot password?</p>
                        </b-button>
                        <button class="w-100 bg-yellow-btn rounded-8 border-btn-yellow py-15 uppercase font-weight700 form-sign-in">sign in</button> 
                    </div>
                </div>
            </div> 
        </b-modal>
        <forgot-password></forgot-password>
    </div>
</template>

<script>
  import forgotPassword  from "@/components/modals/forgotPassword";
  export default {
    name: 'signIn',
    components: {
        forgotPassword
    },
    data() {
        return {
            showPassword : false,
        }
    },
    methods:{
    }
  }

</script>