<template>
  <div>
    <table>
      <thead>
      <th>{{ $t('lifeSurvey.list.id') }}</th>
      <th>{{ $t('lifeSurvey.list.name') }}</th>
      <th>{{ $t('lifeSurvey.list.surname') }}</th>
      <th>{{ $t('lifeSurvey.list.gender') }}</th>
      <th>{{ $t('lifeSurvey.list.dateOfBirth') }}</th>
      <th>{{ $t('lifeSurvey.list.favoriteFootballTeam') }}</th>
      <th>{{ $t('lifeSurvey.list.description') }}</th>
      <th>{{ $t('lifeSurvey.list.pollsterId') }}</th>
      <th>{{ $t('lifeSurvey.list.pollsterName') }}</th>
      <th>{{ $t('lifeSurvey.list.pollsterSurname') }}</th>
      </thead>
      <tbody>
      <tr v-for="lifeSurvey in lifeSurveys" :key="lifeSurvey.id">
        <td>{{ lifeSurvey.id }}</td>
        <td>{{ lifeSurvey.name }}</td>
        <td>{{ lifeSurvey.surname }}</td>
        <td>{{ lifeSurvey.gender }}</td>
        <td>{{ lifeSurvey.dateOfBirth }}</td>
        <td>{{ lifeSurvey.happinessRate }}</td>
        <td>{{ lifeSurvey.happyThing }}</td>
        <td>{{ lifeSurvey.unhappyThing }}</td>
        <td>{{ lifeSurvey.description }}</td>
        <td>{{ lifeSurvey.pollster.id }}</td>
        <td>{{ lifeSurvey.pollster.name }}</td>
        <td>{{ lifeSurvey.pollster.surname }}</td>
        <button @click="updateLifeSurvey(lifeSurvey.id)">{{ $t('lifeSurvey.list.edit') }}</button>
        <button @click="deleteLifeSurvey(lifeSurvey.id)">{{ $t('lifeSurvey.list.delete') }}</button>
      </tr>
      </tbody>
    </table>
    <div>
      <button @click="$router.push('/life-survey/save')">{{ $t('lifeSurvey.list.addNewLifeSurvey') }}</button>
      <button @click="$router.push('/')">{{ $t('lifeSurvey.list.backHomePage') }}</button>
    </div>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";

export default {
  data() {
    return {
      lifeSurveys: [],
    };
  },

  methods: {
    getLifeSurveys() {
      apiService
          .get("/life-survey/list")
          .then((response) => {
            this.lifeSurveys = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },

    deleteLifeSurvey(id) {
      apiService
          .delete("/life-survey/delete/" + id)
          .then(() => {
            this.getLifeSurveys();
          })
          .catch((error) => {
            console.log(error);
          });
    },

    updateLifeSurvey(id) {
      this.$router.push("/life-survey/update/" + id);
    },
  },

  mounted() {
    this.getLifeSurveys();
  },
};
</script>

<style>
</style>