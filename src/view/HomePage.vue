<template>
  <div>
    <h1>{{ $t('home.surveyCollectionCenter') }}</h1>
    <router-link :to="{ name: 'footballSurveySave' }">{{ $t('home.addFavoriteFootballTeamSurvey') }}</router-link>
    <router-link :to="{ name: 'footballSurveyList' }">{{ $t('home.goSurveyListToFavoriteFootballTeam') }}</router-link>
    <router-link :to="{ name: 'lifeSurveySave' }">{{ $t('home.addSurveyForAreYouHappyYourLife') }}</router-link>
    <router-link :to="{ name: 'lifeSurveyList' }">{{ $t('home.goSurveyListToAreYouHappyYourLife') }}</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>