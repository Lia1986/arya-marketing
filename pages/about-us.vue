<template>
<div class="about-us-hero-section">

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
</template>

<script>

import Collapse from '../components/Collapse'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  
data() {
    return {
    
 "faq":[
        {
          "question": "What is “Dynamic Compensation”?",
          "answer" : "Dynamic compensation is a new field that refers to the real-time ability to “flex” compensation, incentives and rewards for workforces in order to meet business goals. This can mean different things for different companies, ranging from being able to automatically offer different base hourly compensation based on region, tenure and volume of work, to creating incentives needed to balance workforce supply to customer demand, to creating programs that reward the workforce for going above and beyond in delivering exceptional customer experiences."
        },
        {
          "question": "What are the different ways in which I can pay people through Arya?",
          "answer" : "In addition to making payroll dynamic, Arya allows you to support cash cards, gift cards, donations, and custom organization-specific rewards out of the box. We are also constantly adding new financial and non-financial benefits through integrations with leading providers to build the most robust ecosystem of compensation, ownership and benefits options for workforces, all available through one integration."
        },
        {
          "question": "How does pricing work?",
          "answer" : "Arya is priced as an annual subscription that covers a certain number of “active” users per month. Active users are determined in any month based on any worker who shows any activity eligible for dynamic compensation through Arya in a given month."
        },
        {
          "question": "Does Arya replace Payroll systems?",
          "answer" : "No. Arya sits on top of your payroll system, letting your operations teams programmatically decide “how” to pay people, and then pushes payments into your payroll system (among other things) to handle the “last mile” delivery of payroll as usual."
        },
        {
          "question": "What integrations do you support?",
          "answer" : "We support over 100 integrations into CRMs, HRIS, payroll and other systems where information about your workforce and the work that they do is sitting. In addition, our most sophisticated customers integrate natively with our API to push information about people and work into Arya."
        },
        {
          "question": "How long does it typically take to integrate with Arya?",
          "answer" : "It usually takes two weeks to go from kickoff to the first dynamic plan being live on Arya. Integration with Arya is quick and painless. If you’ve ever used a third party system like Stripe or Looker, you are likely set up really well to get started with Arya."
        },
        {
          "question": "Do you offer any free trials?",
          "answer" : "Yes. The length of our free trials depend on the complexity of your needs, and we make sure you are seeing value in Arya before we charge you a single cent."
        },
      ]
    }
  },
  computed: {
    // attractValue() {
    //   for (let index = 0; index < this.attractArray.length; index++) {
    //   setTimeout(() => {this.inputValue = this.attractArray[index]}, 500)        
    //   }
    // }
  },

 
 
}


</script>
