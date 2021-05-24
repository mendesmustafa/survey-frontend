<template>
  <div>
    <table>
      <thead>
        <th>ID</th>
        <th>ADI</th>
        <th>SOYADI</th>
        <th>CİNSİYETİ</th>
        <th>DOĞUM TARİHİ</th>
        <th>FAVORİ TAKIMI</th>
        <th>AÇIKLAMA</th>
        <th>ANKETÇİ ID</th>
        <th>ANKETÇİ ADI</th>
        <th>ANKETÇİ SOYADI</th>
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
          <button @click="updateFootballSurvey(footballSurvey.id)">
            düzenle
          </button>
          <button @click="deleteFootballSurvey(footballSurvey.id)">sil</button>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="$router.push('/football-survey/save')">
        Yeni Tuttuğunuz Futbol Takımı Anketi Ekle
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