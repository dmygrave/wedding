<template>
  <div class="container">
    <div class="newlyweds">
      <div class="names-container">
        <div class="sub">Женитьба</div>
        <div class="title">Дмитрий и Анна</div>
      </div>
      <div class="photo"></div>
      <div class="text">
        Дорогие родные и близкие!<br>
        Мы приглашаем вас разделить с нами важный день нашей жизни — нашу свадьбу.
      </div>
      <img src="@/assets/svg/arrow.svg" class="scroll-arrow" alt="arrow">
    </div>
    <div class="delimiter"></div>
    <div class="date-container">
      <div class="wrapper">
        <div class="title">Дата</div>
        <div class="text">
          <p>Это особый момент, наполненный радостью, любовью и надеждой на будущее.
            Мы искренне надеемся, что вы сможете присоединиться к нам, чтобы отметить этот
            особенный день вместе.</p>
        </div>
        <div class="event-day">
          14 сентября 2024 / 15:40
        </div>
        <SeptemberTable />
      </div>
    </div>
  </div>
</template>

<script>
import SeptemberTable from './SeptemberTable.vue'

export default {
  name: 'WeddingPage',
  components: {
    SeptemberTable,
  }
}
</script>


<style scoped>

.newlyweds {
  margin: 30px 0 60px 0;
}

.names-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
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

.scroll-arrow {
  position: absolute;
  margin-top: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.delimiter {
  width: 300px;
  height: 2px;
  background: linear-gradient(to right, rgba(204, 204, 204, 0), #ccc, rgba(204, 204, 204, 0));
  margin: 10px auto;
}

.date-container {
  background-color: #cccccc;
  border-radius: 15px;
  margin-top: 50px;
}

.date-container .wrapper {
  padding: 50px;
}

.date-container .wrapper .text {
  margin-top: 20px;
}

.date-container .wrapper .event-day {
  font-size: 20px;
}

</style>

