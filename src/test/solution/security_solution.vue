<template>
  <div class="security-solution">
    <div class="security-solution-content">
      <video :src="movie_src" controls="controls"></video>
    </div>
  </div>
</template>

<script>
    export default {
        name: "security_solution",
        data: function () {
          return{
            movie_src : ''
          }
        },
        props: {},
        methods: {

          player:function() {
            this.movie_src = '../../assets/video/2017429152623103.flv';
          }
        },
        mounted: function () {
          this.player();
        },
        components: {

        }
    }
</script>

<style scoped>
.security-solution{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
}

  .security-solution-content{
    display: flex;
    justify-content: center;
  }
</style>
