<template>
    <div class="grey darken-1 empty-layout">
        <router-view />
    </div>
</template>

<script>
    import messages from "../utils/messages";
    export default {
        name: "EmptyLayout",
        computed:{
            error(){
                return this.$store.getters.error
            }
        },
        watch: {
            error(fbError){
                this.$error(messages[fbError.code] || "не корректно введен пароль или логин")
            }
        }
    }
</script>

<style scoped>

</style>