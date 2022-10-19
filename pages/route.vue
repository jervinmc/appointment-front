<template>
  <div>

  </div>
</template>

<script>
export default {
    created(){
        if(this.$auth.user.account_type=='Student') location="/student/dashboard"
        else location="/admin/dashboard"
    }
}
</script>

<style>

</style>