<template>
  <div class="pb-6 mt-sm">
    <div
      class="mx-auto d-flex items-center justify-between relative  pt-header-section-spaces pb-header-section-bottom bg-main_bg_color">
      <div class="img-section w-header-width1 ">
        <img src="@/assets/images/header-image.png" alt="" class="absolute top-img-top">
      </div>
      <div class="txt-section uppercase text-white w-header-width2">
        <h1 class="leading-header-txt font-weight800 pb-header-txt-padding text-header-txt w-header-p">
          Dynamic compensation to <span class="text-yellow-txt">attract</span> Today's Dynamic Workforce retain motivate
        </h1>
        <button
          class="bg-yellow-btn rounded border-2 mr-3 border-btn-yellow w-header-btn py-header-btn-padding uppercase text-blue-txt font-weight800 text-btn-font-size">REQUEST
          A DEMO</button>
        <button
          class="border-2 border-btn-yellow text-yellow-txt rounded w-header-btn py-header-btn-padding uppercase font-weight800 text-btn-font-size">try
          arya</button>

      </div>
    </div>
    <div class="bg-light-secton pt-logo-right-pd">
      <div class="w-content-width mx-auto">
        <h2 class="text-center text-title-color text-title-size font-weight800 pb-title-padding">TRUSTED BY OPERATIONS
          TEAMS AT</h2>

        <no-ssr>
          <!-- important to add no-ssr-->
          <!-- <carousel :autoplay="true" :items="3" :autoplayHoverPause="true" :rewind="flase" :autoSpeed="500">

           

          </carousel> -->
          <VueSlickCarousel :autoplay="true" :dots="false" :items="6" :focusOnSelect="true" :slidesToShow="5" :arrows="false" :autoplaySpeed="2000" :speed="2000"
            :infinite="true" >
            <img src="@/assets/images/bellhop.png" alt="" class="w-trusted-by mx-4">
            <img src="@/assets/images/steadymd.png" alt="" class="w-trusted-by mx-4">
            <img src="@/assets/images/smartling.png" alt="" class="w-trusted-by mx-4">
            <img src="@/assets/images/cielo.png" alt="" class="w-trusted-by mx-4">
             <img src="@/assets/images/style.png" alt="" class="w-trusted-by mx-4">
            <img src="@/assets/images/woodSpoon.png" alt="" class="w-trusted-by mx-4">
           

          </VueSlickCarousel>
        </no-ssr>

        <h3
          class="text-center text-title-color text-48 title-size font-weight600 pb-title-padding leading-56 w-780 mx-auto pt-header-section-spaces pb-footer-pd-top">
          Build smarter compensation, incentives and rewards that delight both your flex workforce and CEO</h3>
        <div class="w-content-width mx-auto">
          <div class="d-flex">
            <div class="pr-210 w-50"><img src="@/assets/images/image1.png" alt=""></div>
            <div class="w-50 d-flex flex-col justify-center">
              <h3 class="text-blue-txt leading-43 font-weight800 text-32 uppercase pb-27">
                A Real-time Pulse<br> OF YOUR WORKFOCE
              </h3>
              <p class="text-26 text-title-color pr-5">Dynamic compensation starts with dynamic data. With powerful API
                and hundreds of pre-built integrations into HRIS, CRMs, get up-to-the-minute visibility into the value
                your talent is creating at work.</p>
            </div>
          </div>


          <div class="d-flex pt-footer-pd-bottem">
            <div class="w-50 d-flex flex-col justify-center">
              <h3 class="text-blue-txt leading-43 font-weight800 text-32 uppercase pb-27">
                Infinite Flexibility in How <br> You Value and Pay for Work, <br> Without Any of the Effort
              </h3>
              <p class="text-26 text-title-color">Dynamic compensation starts with dynamic data. With powerful API and
                hundreds of pre-built integrations into HRIS, CRMs, get up-to-the-minute visibility into the value your
                talent is creating at work.</p>
            </div>
            <div class="w-50 pl-210"><img src="@/assets/images/image2.png" alt=""></div>
          </div>


          <div class="d-flex pt-footer-pd-bottem">
            <div class="pr-210 w-50"><img src="@/assets/images/image3.png" alt=""></div>
            <div class="w-50 d-flex flex-col justify-center">
              <h3 class="text-blue-txt leading-43 font-weight800 text-32 uppercase pb-27">
                Powerful Choice <br>for Your Workforce
              </h3>
              <p class="text-26 text-title-color pr-5">Allow your workforce to convert the value it creates into a
                paycheck, cash and gift cards, benefits and perks, equity, and a host of other financial and
                non-financial instruments, all through a single integration with Arya.</p>
            </div>
          </div>

          <div class="d-flex pt-footer-pd-bottem pb-footer-pd-bottem">
            <div class="w-50 d-flex flex-col justify-center">
              <h3 class="text-blue-txt leading-43 font-weight800 text-32 uppercase pb-27">
                Never Wonder <br>"Is It Working?" Again
              </h3>
              <p class="text-26 text-title-color">With out-of-the-box analytics to observe compensation from
                achievement-to-redemption, and to measure the resulting changes in behaviors, Arya helps take the
                guesswork out of understanding what’s working and what needs tweaking.</p>
            </div>
            <div class="w-50 pl-210"><img src="@/assets/images/image4.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div>

    </div>
   <div class="bg-main_bg_color pt-6">
    <div class="w-content-width mx-auto pt-100 ">
       <h4 class="text-yellow-txt text-48 font-weight600">DIY compensation management, <br>Finally, a better alternative!</h4>
 <VueSlickCarousel :autoplay="false" :focusOnSelect="true" :arrows="false">
    <div class="">
     <div class="d-flex items-center pb-6 ">
        <div class="w-50 ">
          <p class="pr-24 font-weight500 text-3xl text-white">Leapfrog  months-long product roadmap and go live with dynamic compensation with a one-sprint integration.</p>
        </div>
        <div class="w-50"><img src="@/assets/images/blue-slide-img-1.png" alt=""></div>
      </div>
    </div>


    <div class="">
     
      <div class="d-flex items-center">
        <div class="w-50 ">
          <p class="pr-24 font-weight500 text-3xl text-white">Eliminate guesswork and gruntwork for your operations teams for all things compensations, incentives and rewards</p>
        </div>
        <div class="w-50"><img src="@/assets/images/blue-slide-img-2.png" alt=""></div>
      </div>
    </div>

    <div class="">
     <div class="d-flex items-center">
        <div class="w-50 ">
          <p class="pr-24 font-weight500 text-3xl text-white">More scientific compensation means more happiness for your workers, and faster, more profitable growth for you.</p>
        </div>
        <div class="w-50"><img src="@/assets/images/blue-slide-img-3.png" alt=""></div>
      </div>
    </div>
      </VueSlickCarousel>
    </div>
     
      
   </div>
    <!-- <div v-html="$feathericons['home'].toSvg()" class="fill"></div> -->


    <div class="bg-light-secton pt-footer-pd-bottem">
      <div class="w-content-width mx-auto">
        <div class="text-48 text-title-color text-title-size font-weight800 pb-title-padding">Get more dynamic, fast.
        </div>
        <p class="weight500 w-68 pb-footer-pd-bottem text-title-color text-title-size">Automate your own compensation,
          incentives and rewards strategy in minutes, or choose from pre-build Dynamic Compensation playbooks proven to
          help attract, motivate and engage talent.</p>
        <div class="d-flex">
          <div>
            <div v-for="item in playbooks" :bind="item.name">
              <div class="playbook-nav-item d-flex items-center	flex-col justify-center rounded-8"
                :class="item.name === activePlaybook ? 'playbook-active' : ''" @click="changeTab(item.name)">
                <div class="fill svg-bgr d-flex justify-center items-center rounded-full bg-white h-16 w-16"
                  v-html="$feathericons[item.icon].toSvg()"></div>
                <p class="font-weight700 text-28 pt-title-padding">{{ item.name }}</p>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex align-center justify-center border-1 border-box-gray">
              <div class="playbook-item px-3 py-3  rounded-8">
                <play-book-card :item="playbooks.find(x => x.name === activePlaybook)" :row="0" />
              </div>

              <div class="playbook-item px-3 py-3  rounded-8">
                <play-book-card :item="playbooks.find(x => x.name === activePlaybook)" :row="1" />
              </div>
            </div>

            <div class="d-flex">
              <div class="playbook-item px-3 py-3  rounded-8">
                <play-book-card :item="playbooks.find(x => x.name === activePlaybook)" :row="2" />
              </div>

              <div class="playbook-item px-3 py-3 d-flex flex-col justify-center items-center  rounded-8">
                <div class="d-flex bg-main_bg_color items-center px-5 py-3 rounded-8 uppercase">
                  <button class="pr-2 font-weight800 text-title-size text-white">Explore more playbooks</button>
                  <span class="fill	text-white mt-1" v-html="$feathericons['chevron-right'].toSvg()" />
                </div>
               
               
                <h4 class="font-weight500 text-title-size pt-27 w-80 text-center leading-30">Os start automating you own strategy</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>


</template>

<script>
import PlayBookCard from '../components/PlayBookCard'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'IndexPage',
  components: { PlayBookCard, VueSlickCarousel },
  data() {
    return {
      "activePlaybook": "Attract",
      "playbooks": [
        {
          "name": "Attract",
          "icon": "plus-circle",
          "items": [
            {
              "title": "Reward all new users with tokens",
              "text": "When new user is created, then auto-appove Payment fo 100 tokens.Send SMS to user."
            },
            {
              "title": "Give $1,000 bonus 45 days after start date in NY",
              "text": "When days since start = 45, If State= NY, Then Pay USD 1,000 for Approval. Send email to user."
            },
            {
              "title": "Reward all new users with tokens",
              "text": "When new user is created, then auto-appove Payment fo 100 tokens. Send SMS to user."
            },
          ]
        },

        {
          "name": "Motivate",
          "icon": "heart",
          "items": [
            {
              "title": "Reward all new users with tokens",
              "text": "When new user is created, then auto-appove Payment fo 100 tokens.Send SMS to user."
            },
            {
              "title": "Give $1,000 bonus 45 days after start date in NY",
              "text": "When days since start = 45, If State= NY, Then Pay USD 1,000 for Approval. Send email to user."
            },
            {
              "title": "Reward all new users with tokens",
              "text": "When new user is created, then auto-appove Payment fo 100 tokens. Send SMS to user."
            },
          ]
        },

        {
          "name": "Retain",
          "icon": "link-2",
          "items": [
            {
              "title": "Reward all new users with tokens",
              "text": "When new user is created, then auto-appove Payment fo 100 tokens.Send SMS to user."
            },
            {
              "title": "Give $1,000 bonus 45 days after start date in NY",
              "text": "When days since start = 45, If State= NY, Then Pay USD 1,000 for Approval. Send email to user."
            },
            {
              "title": "Reward all new users with tokens",
              "text": "When new user is created, then auto-appove Payment fo 100 tokens. Send SMS to user."
            },
          ]
        },

      ]
    }
  },
  methods: {
    changeTab(value) {
      this.activePlaybook = value
    }
  }
}


</script>
<style>
/* .fill svg{
  fill: green; 
  color: red
} */
.playbook-nav-item .svg-bgr {
  /* width: 50px;
  height: 50px; */
  /* background-color: red; */
}

.playbook-active .svg-bgr {
  background-color: unset !important;
}

.playbook-nav-item {
  width: 240px;
  padding-top: 57px;
  padding-bottom: 56px;
  border: 2px solid #E6E6E6;
  margin-bottom: 20px;
  margin-right: 20px;
  color: #00448D;
  background-color: #F4F7FA;
  ;
}

.playbook-nav-item .fill svg {
  color: #00448D;
  width: 43px;
  height: 43px;
}

.playbook-item {
  width: 420px;
  /* height: 180px; */
  border: 2px solid #E6E6E6;
  margin-bottom: 20px;
  margin-right: 20px;
}

.playbook-active .fill svg {
  /* fill: green;  */
  color: #FFC800;
  width: 45px;
  height: 45px;
}

.playbook-active {
  background-color: blue;
  color: #ffffff;
}

.slick-list > div {
  display: flex !important;
  align-items: center;
}
.w-trusted-by {
    width: 180px !important;
    object-fit: scale-down;
}
.playbook-item button {
    color: #00448D;
}
.playbook-item button .fill {
   color: #00448D; 
}

</style>
