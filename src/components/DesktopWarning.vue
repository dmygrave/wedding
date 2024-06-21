<template>
  <div class="desktop-warning">
    <h1>Пожалуйста, откройте приглашение на мобильном устройстве &#128522;</h1>
  </div>
</template>

<script>
export default {
  name: "DesktopWarning"
}
</script>

<style scoped>
.desktop-warning {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-size: 1.5rem;
  background-color: #f8f9fa;
}
</style>