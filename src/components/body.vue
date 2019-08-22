<template>
  <div>
      {{comp}}
      <main>
            <router-view>
            </router-view>
      </main>
  </div>
</template>
<script>
/* eslint-disable indent */
export default {
    components: {
    },
    data () {
        return {
        comp: 'Body Component'
        }
    }
}
</script>
<style scoped>
</style>