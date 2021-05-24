<template>

  <div>
    <h1>Anket Toplama Merkezi</h1>
    <router-link :to="{ name: 'footballSurveySave' }">Tuttuğunuz Futbol Takımı Anketi Ekle</router-link>
    <router-link :to="{ name: 'footballSurveyList' }">
      Tuttuğunuz Futbol Takımı Anketi Listesine Git
    </router-link>
    <router-link :to="{ name: 'lifeSurveySave' }">Hayatınızdan Memnun Musunuz Anketi Ekle</router-link>
    <router-link :to="{ name: 'lifeSurveyList' }">Hayatınızdan Memnun Musunuz Anketi Listesine Git</router-link>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>