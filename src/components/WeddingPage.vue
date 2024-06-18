<template>
  <div class="container">
    <div class="newlyweds">
      <div class="names-container">
        <div class="sub">Женитьба</div>
        <div class="names">Дмитрий и Анна</div>
      </div>
      <div class="photo"></div>
      <div class="text">
        Дорогие родные и близкие!<br>
        Мы приглашаем вас разделить с нами важный день нашей жизни — нашу свадьбу.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeddingPage'
}
</script>


<style scoped>

.newlyweds {
  margin: 30px 0;
}

.names-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.names {
  font-size: 38px;
  line-height: 0.8;
  font-weight: 700;
  margin-top: 15px;
  font-family: 'Great Vibes', cursive;
}

.photo {
  border-radius: 15px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('@/assets/images/love.jpg');
  height: 430px;
  width: 100%;
  margin: 20px auto;
}

</style>

