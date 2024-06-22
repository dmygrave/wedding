<template>
  <div class="calendar">
    <table>
      <thead>
      <tr>
        <th>Пн</th>
        <th>Вт</th>
        <th>Ср</th>
        <th>Чт</th>
        <th>Пт</th>
        <th>Сб</th>
        <th>Вс</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
      </tr>
      <tr>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td class="highlight">
          <div class="date">14</div>
          <svg class="heart" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </td>
        <td>15</td>
      </tr>
      <tr>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
      </tr>
      <tr>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
      </tr>
      <tr>
        <td>30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "SeptemberTable"
}
</script>

<style scoped>

.calendar {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  position: relative;
}

.highlight .date {
  z-index: 1;
  position: relative;
}

.highlight .heart {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -46%);
  fill: none;
  stroke: red;
  stroke-width: 2;
  animation: heartbeat 1s infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: translate(-50%, -46%) scale(1);
  }
  50% {
    transform: translate(-50%, -46%) scale(1.2);
  }
}

</style>