<template>
    <div>
        
        <b-btn block  v-b-toggle="'accordion'+id" >
        {{data.question}}
            <span class="when-opened">
                <span class="fill" v-html="$feathericons['minus'].toSvg()" />
            </span>
            <span class="when-closed">
                <span class="fill" v-html="$feathericons['plus'].toSvg()" />
            </span>
        </b-btn>

        <b-collapse :id="'accordion'+id"  >
            <div>{{data.answer}}</div>
        </b-collapse>

    </div>
</template>
<script>
    export default {
    props: ['data','id']
    }
</script>
<style >
.collapsed > .when-opened,
    :not(.collapsed) > .when-closed {
        display: none;
    }
</style>