<template>
  <div class="mt-sm">
    <div class="mx-auto d-flex items-end justify-between 3xl:flex-col 3xl:items-center relative pt-header-section-spaces lg:pt-100 md:pt-60 sm:pt-26 bg-main_bg_color">
      <div class="img-section w-header-width1 relative">
        <img src="@/assets/images/header-image.png" alt="" class="absolute  w-80 lg:w-70 bottom-43 3xl:hidden">
     </div>
      <div>
         <img src="@/assets/images/mobile-hero-img.png" alt="" class="mobile-hero-img">
      </div>
      <div class="txt-section uppercase text-white w-header-width2 pb-header-section-bottom 2xl-pt-100 2xl:pb-60 3xl:w-70 5xl:w-90 3xl:text-centerc 3xl:d-flex 3xl:flex-col 3xl:items-center 5xl:w-90 5xl:text-center">
        <h1 class="2xl-leading-52 font-weight800 pb-header-txt-padding sm:pb-60 text-header-txt  xl:text-48 lg:text-36 md:text-32 sm:text-24  w-header-p xl:w-80 3xl:w-100">
          Dynamic compensation to <span class="text-yellow-txt inline-block">
            
            {{ inputValue }}
          </span><br> Today's Dynamic Workforce retain motivate
        </h1>
        <button class="desktop-request-demo bg-yellow-btn rounded border-2 mr-3 border-btn-yellow w-header-btn h-62 2xl:text-18 2xl:py-15 uppercase text-blue-txt font-weight800 text-btn-font-size 3xl:h-54 d-flex items-center justify-center yellow-button">REQUEST
          A DEMO</button>
        <!-- <button class="border-2 border-btn-yellow text-yellow-txt rounded w-header-btn py-header-btn-padding uppercase font-weight800 text-btn-font-size 2xl:py-15 2xl:text-18">try
          arya</button> -->

      </div>
    </div>
    <div class="bg-light-secton 4xl:bg-mobile-bg-color pt-logo-right-pd 5xl:pt-40 4xl:pt-0">
      <div>
        
      </div>
      <div class="4xl-bg-mobile-bg-color mobile-bg-color">
     <div class="w-content-width 4xl:w-auto lg:w-80 md:w-80 4xl:w-100 mx-auto">
        <button class="5xl:mb-40 w-100 mobile-request-demo bg-yellow-btn rounded border-2 mr-3 border-btn-yellow w-header-btn h-62 2xl:text-18 2xl:py-15 uppercase text-blue-txt font-weight800 text-btn-font-size 3xl:h-54 d-flex items-center justify-center">REQUEST
          A DEMO</button>
        
          <h2 class="text-center text-title-color text-title-size font-weight800 pb-title-padding">TRUSTED BY OPERATIONS
          TEAMS AT
          </h2>

        <no-ssr>
          <!-- important to add no-ssr-->
          <!-- <carousel :autoplay="true" :items="3" :autoplayHoverPause="true" :rewind="flase" :autoSpeed="500">
        </carousel> -->
          <VueSlickCarousel v-bind="brand">
            <img src="@/assets/images/bellhop.png" alt="" class="w-trusted-by mx-4">
            <img src="@/assets/images/steadymd.png" alt="" class="w-trusted-by  mx-4">
            <img src="@/assets/images/smartling.png" alt="" class="w-trusted-by mx-4">
            <img src="@/assets/images/cielo.png" alt="" class="w-trusted-by mx-4">
             <img src="@/assets/icons/style.svg" alt="" class="w-trusted-by mx-4">
            <img src="@/assets/images/woodSpoon.png" alt="" class="w-trusted-by mx-4">
            <img src="@/assets/images/aptDeco.png" alt="" class="w-trusted-by mx-4">
           

          </VueSlickCarousel>
        </no-ssr>
        </div>
        </div>
         <div class="mobile-gray-bg">
        <h3
          class="text-center text-title-color text-48 md:text-32 4xl:text-24 title-size font-weight600 pb-footer-pd-top 2xl: leading-56 4xl:leading-32 w-780 3xl:w-100 3xl:leading-46 mx-auto pt-footer-pd-bottem 3xl:pt-40">
          Build smarter compensation, incentives and rewards that delight both your flex workforce and CEO</h3>
        <div class="w-content-width md:w-80 4xl:w-100 mx-auto smarter-compentation">
          <div class="d-flex 4xl:items-center">
            <div data-aos="fade-up-right" class="pr-60 w-50"><img src="@/assets/images/image1.png" alt=""></div>
            <div class="w-50 d-flex flex-col justify-center">
              <h3 class="text-blue-txt leading-43 2xl:leading-34 font-weight800 text-32 uppercase pb-27 2xl:text-24">
                A Real-time Pulse<br> OF YOUR WORKFOCE
              </h3>
              <p class="text-26 2xl:text-22 text-title-color xl:pr-5 2xl:pr-0">Dynamic compensation starts with dynamic data. With powerful API
                and hundreds of pre-built integrations into HRIS, CRMs, get up-to-the-minute visibility into the value
                your talent is creating at work.</p>
            </div>
          </div>


          <div class="d-flex 4xl:items-center pt-footer-pd-bottem">
            <div class="w-50 d-flex flex-col justify-center">
              <h3 class="text-blue-txt leading-43 font-weight800 text-32 2xl:text-24 2xl:leading-34 uppercase pb-27">
                Infinite Flexibility in How <br> You Value and Pay for Work, <br> Without Any of the Effort
              </h3>
              <p class="text-26 2xl:text-22 text-title-color">Dynamic compensation starts with dynamic data. With powerful API and
                hundreds of pre-built integrations into HRIS, CRMs, get up-to-the-minute visibility into the value your
                talent is creating at work.</p>
            </div>
            <div class="w-50 pl-60"><img src="@/assets/images/image2.png" alt=""></div>
          </div>


          <div class="d-flex 4xl:items-center pt-footer-pd-bottem">
            <div class="pr-210 w-50"><img src="@/assets/images/image3.png" alt=""></div>
            <div class="w-50 d-flex flex-col justify-center pl-60">
              <h3 class="text-blue-txt leading-43 2xl:leading-34 font-weight800 text-32 uppercase pb-27 2xl:text-24">
                Powerful Choice <br>for Your Workforce
              </h3>
              <p class="text-26 2xl:text-22 text-title-color xl:pr-5 2xl:pr-0">Allow your workforce to convert the value it creates into a
                paycheck, cash and gift cards, benefits and perks, equity, and a host of other financial and
                non-financial instruments, all through a single integration with Arya.</p>
            </div>
          </div>

          <div class="d-flex 4xl:items-center pt-footer-pd-bottem pb-footer-pd-bottem">
            <div class="w-50 d-flex flex-col justify-center">
              <h3 class="text-blue-txt leading-43 2xl:leading-34 font-weight800 text-32 uppercase pb-27 2xl:text-24">
                Never Wonder <br>"Is It Working?" Again
              </h3>
              <p class="text-26 2xl:text-22 text-title-color">With out-of-the-box analytics to observe compensation from
                achievement-to-redemption, and to measure the resulting changes in behaviors, Arya helps take the
                guesswork out of understanding what???s working and what needs tweaking.</p>
            </div>
            <div class="w-50 pl-60">
              <img src="@/assets/images/image4.png" alt=""></div>
          </div>
        </div>
         <VueSlickCarousel v-bind="smarter" class="mobile-smarter-slider">
            <div class="smarter-slide">
              <img src="@/assets/icons/smarter-img1.svg" alt="">
              <h1>A Real-time Pulse <br>
                 OF YOUR WORKFOCE</h1>
              <p>Dynamic compensation starts with dynamic data. With powerful API and hundreds of pre-built integrations into HRIS, CRMs, get up-to-the-minute visibility into the value your talent is creating at work.</p>
            </div>

            <div class="smarter-slide">
              <img src="@/assets/icons/smarter-img1.svg" alt="">
              <h1>A Real-time Pulse <br>
                 OF YOUR WORKFOCE</h1>
              <p>Dynamic compensation starts with dynamic data. With powerful API and hundreds of pre-built integrations into HRIS, CRMs, get up-to-the-minute visibility into the value your talent is creating at work.</p>
            </div>

            <div class="smarter-slide">
              <img src="@/assets/icons/smarter-img3.svg" alt="">
              <h1>Infinite Flexibility in <br>  
                      How You Value and Pay for Work, Without Any of the Effort<br>
                </h1>
              <p>Use a powerful no-code editor to design and deploy any compensation plan in 5 minutes.
                Arya handles all the administration. communication and delivery of compensation, eliminating hundreds of Google Sheets and months of product roadmap you thought you needed to pull this off.</p>
            </div>
          </VueSlickCarousel>
          </div>
      
     </div>
    <div>

    </div>
   <div class="bg-main_bg_color pt-6 4xl:pb-40 blue__slide__section">
    <div class="w-content-width md:w-80 4xl:w-90 mx-auto pt-100 4xl:pt-20">
       <h4 class="text-yellow-txt text-48 md:text-32 4xl:text-24 2xl:pb-60 font-weight600">Finally, a better alternative to <br>DIY compensation management</h4>
      <VueSlickCarousel v-bind="settings" class="blue-slide-section">
    <div class="px-4">
     <div class="d-flex 4xl:flex-col 4xl:flex-col-reverse 4xl:w-100 items-center pb-6 ">
        <div class="w-49 4xl:w-100">
          <p class="pr-24 font-weight500 text-3xl text-white md:text-22 4xl:text-18 2xl:pr-20 4xl:leading-28">Leapfrog  months-long product roadmap and go live with dynamic compensation with a one-sprint integration.</p>
        </div>
        <div class="w-49 4xl:w-100">
          <img src="@/assets/images/blue-slide-img-1.png" alt="" class="blue-slide-img"></div>
          <img src="@/assets/images/blue-slide-image-mobile1.png" alt="" class="blue-slide-img-mobile">
      </div>
    </div>
  <div class="px-4">
     
      <div class="d-flex 4xl:flex-col 4xl:flex-col-reverse 4xl:w-100 items-center">
        <div class="w-49 4xl:w-100">
          <p class="pr-24 font-weight500 text-3xl text-white md:text-22 4xl:text-18 4xl:leading-28  2xl:pr-20">Eliminate guesswork and gruntwork for your operations teams for all things compensations, incentives and rewards</p>
        </div>
        <div class="w-49 4xl:w-100">
            <img src="@/assets/images/blue-slide-img-2.png" alt="" class="blue-slide-img">
            <img src="@/assets/images/blue-slide-image-mobile3.png" alt="" class="blue-slide-img-mobile">
          </div>
      </div>
    </div>

    <div class="px-4">
     <div class="d-flex 4xl:flex-col 4xl:flex-col-reverse 4xl:w-100 items-center">
        <div class="w-49 4xl:w-100">
          <p class="pr-24 font-weight500 text-3xl text-white md:text-22 4xl:text-18 2xl:pr-20 4xl:leading-28">More scientific compensation means more happiness for your workers, and faster, more profitable growth for you.</p>
        </div>
        <div class="w-49 4xl:w-100">
          <img src="@/assets/images/blue-slide-img-3.png" alt="" class="blue-slide-img">
           <img src="@/assets/images/blue-slide-image-mobile3.png" alt="" class="blue-slide-img-mobile">
         </div>
      </div>
    </div>
      </VueSlickCarousel>
    </div>
     
      
   </div>
    <!-- <div v-html="$feathericons['home'].toSvg()" class="fill"></div> -->


    <div class="bg-light-secton 4xl:bg-mobile-bg-color pt-footer-pd-bottem 4xl:pt-100">
      <div class="w-content-width 2xl:w-80 4xl:w-90 mx-auto pb-footer-pd-bottem 4xl:pb-60">
        <div class="text-48 text-title-color text-title-size font-weight800 pb-title-padding md:text-36 4xl:text-24 4xl:text-center">Get more dynamic, fast.
        </div>
        <p class="weight500 w-68 sm:w-100 pb-footer-pd-bottem text-title-color text-title-size 4xl:text-center 4xl:pb-40">Automate your own compensation,
          incentives and rewards strategy in minutes, or choose from pre-build Dynamic Compensation playbooks proven to
          help attract, motivate and engage talent.</p>
        <div class="d-flex h-830 3xl:h-auto 3xl:flex-col">
          <div class="3xl:flex justify-between playbook-tabs">
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
            <div class="d-flex align-center justify-center 3xl:justify-between sm:flex-col border-box-gray">
              <div class="playbook-item px-3 py-3 rounded-8">
                <play-book-card :item="playbooks.find(x => x.name === activePlaybook)" :row="0" />
              </div>

              <div class="playbook-item px-3 py-3  rounded-8">
                <play-book-card :item="playbooks.find(x => x.name === activePlaybook)" :row="1" />
              </div>
            </div>

            <div class="d-flex 3xl:justify-between sm:flex-col">
              <div class="playbook-item px-3 py-3  rounded-8">
                <play-book-card :item="playbooks.find(x => x.name === activePlaybook)" :row="2" />
              </div>

              <div class="playbook-item px-3 py-3 d-flex flex-col justify-center items-center  rounded-8 blue-button explor-more-playbooks">
                <div class="d-flex justify-center bg-main_bg_color items-center py-3 rounded-8 uppercase w-100 px-15">
                  <button class="pr-2 font-weight800 text-title-size text-white 3xl:text-18">Explore more playbooks</button>
                  <span class="fill	text-white mt-1" v-html="$feathericons['chevron-right'].toSvg()" />
                </div>
               
               
                <h4 class="font-weight500 text-title-size pt-27 w-90 leading-30">Or start automating you own strategy</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-content-width 2xl:w-80 4xl:w-90 mx-auto">
          <h3 class="pb-footer-pd-top text-title-color font-weight800 text-title-size text-center 4xl:pb-0">WE POWER OPERATIONS TEAMS THAT POWER THE FUTURE OF WORK</h3>
      </div>
      <div class="bg-slide-bg-color 4xl:bg-mobile-bg-color pt-76 pb-96">
        <div class="w-content-width 2xl:w-80 4xl:w-90 mx-auto testimonials-slider">
        <VueSlickCarousel v-bind="testimonials">
  
     
        <div class="d-flex items-center 4xl:items-start">
         <div class="w-30 4xl:w-0">
           <img src="@/assets/images/testimonilas-img1.png" alt="" class="rounded-full border-8 4xl:border-4 border-solid border-white w-233 md:w-130 4xl:w-82 m-auto testimonilas-img-desk">
         </div>
         <div class="m-auto w-70 4xl:w-90">
           <p class="font-weight500 text-26 md:text-18 4xl:text-14 text-title-color 4xl:text-center">The Arya team's knowledge base regarding incentive compensation has proved critical as we've experimented with and evolved our clinician payroll processes</p>
           <div class="d-flex">
           <img src="@/assets/images/testimonilas-img1.png" alt="" class="rounded-full border-8 4xl:border-4 border-solid border-white w-233 md:w-130 4xl:w-82 m-auto testimonilas-img-mobile">
          <div class="testimonilas-mobile-content">
            <p class="pb-26 pt-20 text-title-size md:text-18 4xl:text-14 4xl:pb-15"><span class="font-weight700">Matt Harb,</span><span class="font-weight500"> Senior Product Manager, Bellhop</span></p>
            <img src="@/assets/images/steadymd.png" alt="" class="max-w-226 testimonials-slide-img">
             </div>
           </div>
         </div>
        </div>
        <div class="d-flex items-center 4xl:items-start">
         <div class="w-30 4xl:w-0">
           <img src="@/assets/images/testimonilas-img2.png" alt="" class="rounded-full border-8 4xl:border-4 border-solid border-white w-233 md:w-130 4xl:w-82 m-auto testimonilas-img-desk">
         </div>
         <div class="m-auto w-70 4xl:w-90">
           <p class="font-weight500 text-26 md:text-18 4xl:text-14 text-title-color 4xl:text-center">"The team at Arya has deep expertise around incentives that drive alignment between my company and my workforce. By far the best aspect is the level of service they provide"</p>
           <div class="d-flex">
           <img src="@/assets/images/testimonilas-img2.png" alt="" class="rounded-full border-8 4xl:border-4 border-solid border-white w-233 md:w-130 4xl:w-82 m-auto testimonilas-img-mobile">
          <div class="testimonilas-mobile-content">
            <p class="pb-26 pt-20 text-title-size md:text-18 4xl:text-14 4xl:pb-15"><span class="font-weight700">Shanna Johnson,</span><span class="font-weight500">Chief Executive Officer at Cielo24</span></p>
            <img src="@/assets/images/cielo.png" alt="" class="max-w-226 testimonials-slide-img">
             </div>
           </div>
         </div>
        </div>
          <div class="d-flex items-center 4xl:items-start">
         <div class="w-30 4xl:w-0">
           <img src="@/assets/images/testimonilas-img3.png" alt="" class="rounded-full border-8 4xl:border-4 border-solid border-white w-233 md:w-130 4xl:w-82 m-auto testimonilas-img-desk">
         </div>
         <div class="m-auto w-70 4xl:w-90">
           <p class="font-weight500 text-26 md:text-18 4xl:text-14 text-title-color 4xl:text-center">"The Arya team's knowledge base regarding incentive compensation has proved critical as we've experimented with and evolved our clinician payroll processes"</p>
           <div class="d-flex">
           <img src="@/assets/images/testimonilas-img3.png" alt="" class="rounded-full border-8 4xl:border-4 border-solid border-white w-233 md:w-130 4xl:w-82 m-auto testimonilas-img-mobile">
          <div class="testimonilas-mobile-content">
            <p class="pb-26 pt-20 text-title-size md:text-18 4xl:text-14 4xl:pb-15"><span class="font-weight700">Anna Pearl W, </span><span class="font-weight500">Chief Executive Officer at Cielo24</span></p>
            <img src="@/assets/images/steadymd.png" alt="" class="max-w-226 testimonials-slide-img">
             </div>
           </div>
         </div>
        </div>
        </VueSlickCarousel>
      </div>
      </div>
     
    <div class="bg-light-secton 4xl:bg-mobile-bg-color pt-150 pb-300 4xl:pb-200 4xl:pt-0">
      <h4 class="uppercase pb-footer-pd-top 4xl:pb-40 text-title-color font-weight800 text-title-size text-center">
        frequently asked questions
      </h4>
       <div class="w-content-width 2xl:w-80 4xl:w-90 mx-auto">
         <div v-for="(data,index) in faq" :bind="data.question" class="opene_collapse">
        <collapse :data="data" :id="index"/>
     </div>
       </div>
    </div>
</div>
 
  </div>

 


</template>

<script>
import PlayBookCard from '../components/PlayBookCard'
import Collapse from '../components/Collapse'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'IndexPage',
  components: { PlayBookCard, Collapse, VueSlickCarousel },
  data() {
    return {
      testimonials:{
        autoplay:true,
        focusOnSelect:true,
        arrows:true,
        dots:false,
        autoplaySpeed:3500,
        speed:3500,

         "responsive": [
          {
      "breakpoint": 768,
      "settings": {
        arrows:false,
   }
    }
  ]
        
      },
      smarter:{
        autoplay:true,
        focusOnSelect:true,
        arrows:false,
        dots:true,
        autoplaySpeed:3500,
        speed:3500
      },
      settings:{
        autoplay:true,
        focusOnSelect:true,
        arrows:false,
        dots:true,
        autoplaySpeed:4000,
        speed:4000,
         "responsive": [
          {
      "breakpoint": 768,
      "settings": {
        "arrows":true,
         }
    },
   ]
  },
      brand:{
        autoplay:true,
        focusOnSelect:true,
        arrows:false,
        dots:false,
        autoplaySpeed:3000,
        speed:3000,
        slidesToShow: 5,
        items: 7,

        "responsive": [
          {
      "breakpoint": 1400,
      "settings": {
        "slidesToShow": 4,
        "slidesToScroll": 4,
       
        
      }
    },
    {
      "breakpoint": 1140,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
       
        
      }
    },
   
    {
      "breakpoint": 460,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
      }
    }
  ]
      },
      
      attractArray: ['Attract', 'Retain', 'Motivate'],
      inputValue: 'attract',
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

      ],
      "faq":[
        {
          "question": "What is ???Dynamic Compensation????",
          "answer" : "Dynamic compensation is a new field that refers to the real-time ability to ???flex??? compensation, incentives and rewards for workforces in order to meet business goals. This can mean different things for different companies, ranging from being able to automatically offer different base hourly compensation based on region, tenure and volume of work, to creating incentives needed to balance workforce supply to customer demand, to creating programs that reward the workforce for going above and beyond in delivering exceptional customer experiences."
        },
        {
          "question": "What are the different ways in which I can pay people through Arya?",
          "answer" : "In addition to making payroll dynamic, Arya allows you to support cash cards, gift cards, donations, and custom organization-specific rewards out of the box. We are also constantly adding new financial and non-financial benefits through integrations with leading providers to build the most robust ecosystem of compensation, ownership and benefits options for workforces, all available through one integration."
        },
        {
          "question": "How does pricing work?",
          "answer" : "Arya is priced as an annual subscription that covers a certain number of ???active??? users per month. Active users are determined in any month based on any worker who shows any activity eligible for dynamic compensation through Arya in a given month."
        },
        {
          "question": "Does Arya replace Payroll systems?",
          "answer" : "No. Arya sits on top of your payroll system, letting your operations teams programmatically decide ???how??? to pay people, and then pushes payments into your payroll system (among other things) to handle the ???last mile??? delivery of payroll as usual."
        },
        {
          "question": "What integrations do you support?",
          "answer" : "We support over 100 integrations into CRMs, HRIS, payroll and other systems where information about your workforce and the work that they do is sitting. In addition, our most sophisticated customers integrate natively with our API to push information about people and work into Arya."
        },
        {
          "question": "How long does it typically take to integrate with Arya?",
          "answer" : "It usually takes two weeks to go from kickoff to the first dynamic plan being live on Arya. Integration with Arya is quick and painless. If you???ve ever used a third party system like Stripe or Looker, you are likely set up really well to get started with Arya."
        },
        {
          "question": "Do you offer any free trials?",
          "answer" : "Yes. The length of our free trials depend on the complexity of your needs, and we make sure you are seeing value in Arya before we charge you a single cent."
        },
      ]
    }
  },
  computed: {
    attractValue() {
      for (let index = 0; index < this.attractArray.length; index++) {
      setTimeout(() => {this.inputValue = this.attractArray[index]}, 500)        
      }
    }
  },
  methods: {
    changeTab(value) {
      this.activePlaybook = value
    }
  },
  mounted() {
    let a = 0
    setInterval(() => {
      this.inputValue = this.attractArray[a]
      if (a < this.attractArray.length - 1) {
        a ++
      } else {
        a = 0
      }
    }, 2000)
  }
}


</script>
<style >
/* .fill svg{
  fill: green; 
  color: red
} */
.playbook-nav-item .svg-bgr {
  /* width: 50px;
  height: 50px; */
  /* background-color: red; */
}
.mobile-smarter-slider {
  display: none !important;
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
  cursor: pointer;
}

.playbook-nav-item .fill svg {
  color: #00448D;
  width: 43px;
  height: 43px;
}

.playbook-item {
  width: 420px;
  height: 405px;
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

.slick-dots {
  display: flex !important;
  justify-content: center;


}
.slick-dots li {
  
  border-radius: 50%;
  height: 14px;
  width: 14px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 93px;
  margin-top: 53px;
  border: 1px solid #FFC800;
  background: transparent;
  color: transparent;
}

.slick-dots .slick-active {
 background: #FFC800;
}
.testimonials-slider .slick-slider {
  display: flex !important;
}
.slick-prev::before {
   content: '\003C';
   display: block;
   font-size: 50px;
   color: #9F9F9F;
    width: 20px;
   
}
.slick-next::after {
   content: '\003E';
   display: block;
   font-size: 50px;
   color: #9F9F9F;
   width: 20px;
   margin-top: -40px;
   
}
.slick-prev, .slick-next {
  color: transparent;
  width: 20px;
}


/* .collapsed, .not-collapsed {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px !important;
  background-color: transparent;
  border-radius: 6px !important;
  border: unset;
  text-align: left;
  
  
}

.not-collapsed {
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 28px;
color: #0266D1 !important;
background: transparent !important;
border: unset;

}
.opene_collapse {
   margin: 10px 0;
   border: 1px solid #666666;
   border-radius: 6px;
}

.collapsed {
   color: #666666;
   font-weight: 700;
   font-size: 18px;
   line-height: 25px;



}
.collapse  {
  padding: 0px 20px 20px 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #666666;

} */
  .testimonilas-img-mobile {
    display: none !important;
  }
  

/* .btn-secondary:focus, .btn-secondary:hover {
  box-shadow: unset;
  background: transparent;
  color: #666666;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {

background: transparent;
color: #666666;


}

.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: unset;
  color: #666666;
} */
.mobile-hero-img {
  display: none;
}
.mobile-request-demo {
  display: none !important;
}
 .blue-slide-img-mobile {
    display: none !important;
  }




@media only screen and (max-width: 1700px) {
  .playbook-item {
   width: 50%;
  }
}

@media only screen and (max-width:990px) {
   .mobile-hero-img {
   display: block;
   margin-bottom: 24px;
  }
  .playbook-item {
   width: 48.5%;
   margin-right: 0;
  }
  .playbook-tabs {
    width: 100%;

  }
  .playbook-tabs > div {
    width: 32%;
    margin-right: 0;
  }
  .playbook-nav-item  {
    width: 100%;
     padding-top: 47px;
    padding-bottom: 46px;
  }
  .mobile-nva-menu .fill svg{
       color: #ffffff;
     }
 
}
 @media only screen and (max-width: 768px) {
    .playbook-nav-item p {
      font-size: 22px;
    }
  .playbook-nav-item  {
    padding-top: 17px;
    padding-bottom: 17px;
  }
  .pt-title-padding {
    padding-top: 16px;
}
.playbook-active .fill svg {
  width: 40px;
  height: 40px;
}
.playbook-nav-item .fill svg {
   width: 33px;
   height: 32px;
 
  }
  .w-16 {
    width: 43px;
  }
  .h-16 {
  height: 43px;
  }
  .playbook-item {
    width: 100%;
    height: unset;
  }
  .blue-button {
    border: unset;
  }
  .blue-slide-section p {
    padding-right: 0;
  }
 
 
 
 
  }
   @media only screen and (max-width: 768px) {
     .testimonials-slider img {
       filter: drop-shadow(0px 2.65158px 11.9321px #EAEEF1);
     }
     .testimonials-slide-img {
     object-fit: contain;
     width: 110px;
     }
     .testimonials-slider span {
         display: block;
      }
      .w-trusted-by {
    width: 102px !important;
  }
  .smarter-compentation {
    display: none;
  }
  
  .mobile-smarter-slider {
   display: block !important;
  }
  
  .mobile-smarter-slider .slick-dots .slick-active {
      background: #0266D1;
  }
 .mobile-smarter-slider .slick-list > div {
   display: block !important;
  }
  .mobile-smarter-slider .slick-dots li {
    margin-bottom: 0;
    margin-top: 150px;
    border: 2px solid #0266D1;
    background: transparent;
    color: transparent;
}
   .mobile-smarter-slider{
    background-color: #ffffff;
    padding: 20px;
    border-radius: 20px;
    
  }
 
  .smarter-slide h1 {
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    text-transform: uppercase;
    padding-bottom: 20px;

   color: #00448D;
  }
  .smarter-slide p {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #131A1C;
   
  }
  .smarter-slide {
    padding-left: 10px;
    padding-right: 10px;
  }
  .blue-slide-img {
    display: none !important;
  }
   .blue-slide-img-mobile {
    display: block !important;
    padding-bottom: 30px;
    margin: auto;
  }
  .blue-slide-section {
    display: flex !important;
    position: relative;
    padding-bottom: 120px;
    background-color: #00448D;
    padding: 40px 20px 80px 20px;
    border-radius: 8px;
  }
  .blue-slide-section .slick-dots {
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
  }

  .blue-slide-section .slick-next::after {
     color: #FFC800;
}
 .blue-slide-section .slick-prev::before {
     color: #FFC800;
}
.slick-dots li {
  border: 2px solid #FFC800;
 
}
.blue__slide__section {
 background: linear-gradient(180deg, #0266D1 0%, #00448D 100%) !important;
}
.mobile-bg-color {
  padding: 40px 20px 40px 20px;
}
.mobile-gray-bg {
  background-color: #F6F7F8;
  padding: 40px 20px 40px 20px;
}
.explor-more-playbooks {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.testimonilas-img-desk {
  display: none !important;
}
 .testimonilas-img-mobile {
    display: block !important;
    width: 25%;
    margin-right: 20px !important;
    width: 80px;
  }
  .testimonilas-mobile-content {
    width: 75%;
  }
    
     
   }
    @media only screen and (max-width: 460px) {
      .testimonials-slide-img {
        width: 84px;
     }
      .mobile-request-demo {
        display: block !important;
}
    
       .desktop-request-demo {
        display: none !important;
      }
      .mobile-bg-color {
        padding: 0px 20px 40px 20px;
}
    }
   
   </style>
