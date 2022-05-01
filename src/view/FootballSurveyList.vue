<template>
  <div>
    <table>
      <thead>
      <th>{{ $t('footballSurvey.list.id') }}</th>
      <th>{{ $t('footballSurvey.list.name') }}</th>
      <th>{{ $t('footballSurvey.list.surname') }}</th>
      <th>{{ $t('footballSurvey.list.gender') }}</th>
      <th>{{ $t('footballSurvey.list.dateOfBirth') }}</th>
      <th>{{ $t('footballSurvey.list.favoriteFootballTeam') }}</th>
      <th>{{ $t('footballSurvey.list.description') }}</th>
      <th>{{ $t('footballSurvey.list.pollsterId') }}</th>
      <th>{{ $t('footballSurvey.list.pollsterName') }}</th>
      <th>{{ $t('footballSurvey.list.pollsterSurname') }}</th>
      </thead>
      <tbody>
      <tr v-for="footballSurvey in footballSurveys" :key="footballSurvey.id">
        <td>{{ footballSurvey.id }}</td>
        <td>{{ footballSurvey.name }}</td>
        <td>{{ footballSurvey.surname }}</td>
        <td>{{ footballSurvey.gender }}</td>
        <td>{{ footballSurvey.dateOfBirth }}</td>
        <td>{{ footballSurvey.favoriteFootballTeam }}</td>
        <td>{{ footballSurvey.description }}</td>
        <td>{{ footballSurvey.pollster.id }}</td>
        <td>{{ footballSurvey.pollster.name }}</td>
        <td>{{ footballSurvey.pollster.surname }}</td>
        <button @click="updateFootballSurvey(footballSurvey.id)">{{ $t('footballSurvey.list.edit') }}</button>
        <button @click="deleteFootballSurvey(footballSurvey.id)">{{ $t('footballSurvey.list.delete') }}</button>
      </tr>
      </tbody>
    </table>
    <div>
      <button @click="$router.push('/football-survey/save')">
        {{ $t('footballSurvey.list.addNewFavoriteFootballTeamSurvey') }}
      </button>
      <button @click="$router.push('/')">{{ $t('footballSurvey.list.backHomePage') }}</button>
    </div>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";

export default {
  data() {
    return {
      footballSurveys: [],
    };
  },

  methods: {
    getFootballSurveys() {
      apiService
          .get("/football-survey/list")
          .then((response) => {
            this.footballSurveys = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },

    deleteFootballSurvey(id) {
      apiService
          .delete("/football-survey/delete/" + id)
          .then(() => {
            this.getFootballSurveys();
          })
          .catch((error) => {
            console.log(error);
          });
    },

    updateFootballSurvey(id) {
      this.$router.push("/football-survey/update/" + id);
    },
  },
  mounted() {
    this.getFootballSurveys();
  },
};
</script>

<style>
</style>