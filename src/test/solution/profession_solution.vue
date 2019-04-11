<template>
  <div class="profession_solution">
    <div class="professtion-solution-content"></div>
  </div>
</template>

<script>
    export default {
        name: "profession_solution",
        data: function () {
          return{

          }
        },
        props: {

        },
        components: {

        }
    }
</script>

<style scoped>
.profession_solution{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
}
  .professtion-solution-content{
    display: flex;
    justify-content: center;
    height: 100%;
    color: #FFFFFF;
  }
</style>
