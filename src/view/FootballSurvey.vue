<template>
  <div>
    <form @submit.prevent="id ? update() : save()">
      <div>
        <p>{{ $t('footballSurvey.name') }}: {{ footballSurvey.name }}</p>
        <input
            type="text"
            required
            v-model="footballSurvey.name"
            placeholder="adınızı giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('footballSurvey.surname') }}: {{ footballSurvey.surname }}</p>
        <input
            type="text"
            required
            v-model="footballSurvey.surname"
            placeholder="soyadınızı giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('footballSurvey.gender') }}: {{ footballSurvey.gender }}</p>
        <input
            type="number"
            min="0"
            max="1"
            required
            v-model="footballSurvey.gender"
            placeholder="kadın için 0 erkek için 1 giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('footballSurvey.dateOfBirth') }}: {{ footballSurvey.dateOfBirth }}</p>
        <input
            type="date"
            required
            v-model="footballSurvey.dateOfBirth"
            placeholder="doğum tarihi gir yyyy-mm-dd.."
        />
      </div>
      <div>
        <p>{{ $t('footballSurvey.favoriteFootballTeam') }}: {{ footballSurvey.favoriteFootballTeam }}</p>
        <input
            type="text"
            required
            v-model="footballSurvey.favoriteFootballTeam"
            placeholder="tuttuğunuz takımı giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('footballSurvey.description') }}: {{ footballSurvey.description }}</p>
        <input
            type="text"
            required
            v-model="footballSurvey.description"
            placeholder="açıklama giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('footballSurvey.pollsterName') }}: {{ footballSurvey.pollster.name }}</p>
        <input
            type="text"
            required
            v-model="footballSurvey.pollster.name"
            placeholder="anketörün adını giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('footballSurvey.pollsterSurname') }}: {{ footballSurvey.pollster.surname }}</p>
        <input
            type="text"
            required
            v-model="footballSurvey.pollster.surname"
            placeholder="anketörün soyadını giriniz.."
        />
      </div>
      <div>
        <button type="submit">{{ $t('footballSurvey.save') }}</button>
      </div>
    </form>
    <router-link :to="{ name: 'homePage' }">{{ $t('footballSurvey.backHomePage') }}</router-link>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";

export default {
  name: "FootballSurvey",
  data() {
    return {
      id: null,
      footballSurvey: {
        name: "",
        surname: "",
        gender: null,
        dateOfBirth: "",
        favoriteFootballTeam: "",
        description: "",
        pollster: {
          name: "",
          surname: "",
        },
      },
    };
  },

  methods: {
    save() {
      apiService
          .post("football-survey/save", this.footballSurvey)
          .then((response) => {
            console.log(response);
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
    },

    update() {
      apiService
          .put("football-survey/update", this.footballSurvey)
          .then((response) => {
            console.log(response);
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
    },

    getFootballSurvey(id) {
      apiService
          .get("football-survey/" + id)
          .then((response) => {
            console.log(response);
            this.footballSurvey = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },

  mounted() {
    console.log(this.$route.params);
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.getFootballSurvey(this.$route.params.id);
    }
  },
};
</script>

<style>
</style>