<template>
<div class="d-flex flex-col justify-between h-100">
    <div>
    <div class="d-flex items-center pb-12 pt-3">
        <div class="bg-white w-9 h-9 rounded-full d-flex justify-center items-center" v-html="$feathericons[item.icon].toSvg()" />
        <span class="ml-4 text-title-color font-weight700 text-base">{{item.name}}</span>
    </div>

    <div class="pb-3 text-title-color font-weight700 text-title-size">
        <b>{{item.items[row].title}}</b>
    </div>

    <div class="pb-12 text-title-color font-weight400 text-title-size text-18">
        <p>{{item.items[row].text}}</p>
    </div>
    </div>

    <div>
        <button class="d-flex bg-btn-bckg py-3 2xl:py-10 px-4 rounded-8 font-weight600 text-18"> 
            Customize
            <span class="fill" v-html="$feathericons['chevron-right'].toSvg()" />
        </button>
    </div>
</div>
</template>
<script>
    export default {
    props: ['item', 'row']
    }
</script>