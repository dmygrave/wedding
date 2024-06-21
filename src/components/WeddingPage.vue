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
        <SeptemberTable/>
      </div>
    </div>
    <div class="delimiter"></div>
    <div class="meeting-point">
      <div class="wrapper">
        <div class="title">Место встречи</div>
        <div class="text">
          <p>Начнем с торжественной церемонии бракосочетания, а после церемонии
            направимся в банкетный зал, где мы будем наслаждаться вкусным
            ужином и интересным времяпрепровождением в кругу самых дорогих нам людей.</p>
        </div>
        <div class="text m-top-m-bottom">
          <p>Банкетный ресторан &laquo;Праздник&raquo;, Латте Холл</p>
        </div>
        <a href="https://yandex.ru/maps/-/CDv0AX40" target="_blank" class="button">Смотреть на карте</a>
      </div>
    </div>
    <div class="delimiter"></div>
    <div class="questionnaire">
      <div class="title">Анкета гостя</div>
      <div class="text">Пожалуйста, помогите нам определиться с горячим и напитками :)</div>
      <div class="form-container">
        <div v-if="formSubmitted">
          <div class="thank-you-message">Спасибо!</div>
        </div>
        <form v-else @submit.prevent="sendForm">
          <div class="input-wrapper">
            <label for="name">Имя и Фамилия</label>
            <input
                placeholder="Иван Иванов"
                type="text"
                v-model="form.name"
                required
            >
          </div>
          <div class="preferences">Предпочтения по горячему</div>
          <div class="input-wrapper radio">
            <input
                type="radio"
                id="roll"
                value="Куриный рулет с моцареллой и вяленными томатами"
                v-model="form.hot"
            >
            <label for="roll">Куриный рулет с моцареллой и вяленными томатами</label>
          </div>
          <div class="input-wrapper radio">
            <input
                type="radio"
                id="trout-roll"
                value="Горячий ролл из форели с мягким сливочным сыром"
                v-model="form.hot"
            >
            <label for="trout-roll">Горячий ролл из форели с мягким сливочным сыром</label>
          </div>
          <div class="input-wrapper">
            <label for="drinks">Пожелание по напиткам</label>
            <input
                placeholder="Введите через запятую, либо один"
                type="text"
                v-model="form.drinks"
                required
            >
          </div>
          <button class="button black" type="submit">Отправить</button>
          <div v-if="loading" class="loading-indicator">
            <div class="spinner"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SeptemberTable from './SeptemberTable.vue'
import emailjs from 'emailjs-com';

export default {
  name: 'WeddingPage',
  components: {
    SeptemberTable,
  },
  data() {
    return {
      form: {
        name: '',
        hot: [],
        drinks: ''
      },
      hottest: {
        roll: 'Куриный рулет с моцареллой и вяленными томатами',
        troutRoll: 'Горячий ролл из форели с мягким сливочным сыром'
      },
      service_id: 'service_23gr6wj',
      template_id: 'template_udbhhtp',
      api_key: 'I95vXaAqzX7M0HXxG',
      formSubmitted: false,
      loading: false,
    }
  },
  methods: {
    sendForm() {
      this.loading = true
      const templateParams = {
        name: this.form.name,
        hot: this.form.hot,
        drinks: this.form.drinks,
        to_email: 'dmygrave@gmail.com, anna.cyleva@yandex.ru'
      };
      emailjs.send(this.service_id, this.template_id, templateParams, this.api_key)
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.formSubmitted = true;
          }, (error) => {
            console.error('FAILED...', error);
          });
    }
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

.date-container, .meeting-point {
  border-radius: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.date-container {
  background-color: #cccccc;
}

.meeting-point {
  position: relative;
  background-image: url("@/assets/images/latte_hall.jpg");
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
}

.meeting-point::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  z-index: 1;
}

.date-container .wrapper,
.meeting-point .wrapper {
  padding: 50px;
  position: relative;
  z-index: 1;
}

.meeting-point .wrapper {
  color: white;
}

.date-container .wrapper .text,
.meeting-point .wrapper .text {
  margin-top: 20px;
}

.meeting-point .wrapper .text.m-top-m-bottom {
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 19px;
}

.date-container .wrapper .event-day {
  font-size: 20px;
}

.button {
  margin-top: 30px;
  text-decoration: none;
  padding: 14px 25px;
  color: #000000;
  font-size: 17px;
  text-transform: uppercase;
  border-width: 1px;
  border-radius: 15px;
  background-color: #ffffff;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.button.black {
  color: #ffffff;
  background-color: #000000;
  padding: 14px 45px;
  border-radius: 20px;
}

.questionnaire {
  margin: 50px 0;

}

.questionnaire .text {
  margin-top: 30px;
}

.form-container {
  padding: 30px;
  border-width: 1px;
  border-radius: 15px;
  background-color: #ffffff;
  background-position: center center;
  border-color: #ffffff;
  border-style: solid;
  margin-top: 30px;
}

.input-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.input-wrapper input {
  outline: none;
  padding-left: 0;
  padding-right: 0;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  background-color: transparent;
  border-radius: 0
}

.input-wrapper input {
  text-align: left;
  border-bottom: 1px solid rgb(218, 218, 218);
}

.input-wrapper.radio {
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  flex-direction: unset;
  align-items: center;
  margin-bottom: 20px;
}

.input-wrapper.radio label {
  margin-bottom: 0;
  line-height: 1.2;
}

.input-wrapper.radio input {
  width: 20px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  height: 20px;
  border-color: #000;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  border-radius: 50%;
  margin-right: 10px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  opacity: .6;
}

label,
.preferences {
  text-align: left;
  font-weight: bold;
  margin-bottom: 15px;
}

.preferences {
  margin-top: 20px;
}

.loading-indicator {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>

