<template>
  <div>
    <table>
      <thead>
        <th>ID</th>
        <th>ADI</th>
        <th>SOYADI</th>
        <th>CİNSİYET</th>
        <th>DOĞUM TARİHİ</th>
        <th>FAVORİ TAKIM</th>
        <th>AÇIKLAMA</th>
        <th>ANKETÇİ ID</th>
        <th>ANKETÇİ ADI</th>
        <th>ANKETÇİ SOYADI</th>
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
          <button @click="updateLifeSurvey(lifeSurvey.id)">düzenle</button>
          <button @click="deleteLifeSurvey(lifeSurvey.id)">sil</button>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="$router.push('/life-survey/save')">
        Yeni Yaşam Anketi Ekle
      </button>
      <button @click="$router.push('/')">Ana Sayfaya Dön</button>
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