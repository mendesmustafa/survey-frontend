<template>
  <div>
    <form @submit.prevent="id ? update() : save()">
      <div>
        <p>{{ $t('lifeSurvey.name') }}: {{ lifeSurvey.name }}</p>
        <input
            type="text"
            required
            v-model="lifeSurvey.name"
            placeholder="adınızı giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('lifeSurvey.surname') }}: {{ lifeSurvey.surname }}</p>
        <input
            type="text"
            required
            v-model="lifeSurvey.surname"
            placeholder="soyadınızı giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('lifeSurvey.gender') }}: {{ lifeSurvey.gender }}</p>
        <input
            type="number"
            min="0"
            max="1"
            required
            v-model="lifeSurvey.gender"
            placeholder="kadın için 0 erkek için 1 giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('lifeSurvey.dateOfBirth') }}: {{ lifeSurvey.dateOfBirth }}</p>
        <input
            type="date"
            required
            v-model="lifeSurvey.dateOfBirth"
            placeholder="doğum tarihi gir yyyy-mm-dd.."
        />
      </div>
      <div>
        <p>{{ $t('lifeSurvey.happinessRate') }}: {{ lifeSurvey.happinessRate }}</p>
        <input
            type="number"
            min="1"
            max="10"
            required
            v-model="lifeSurvey.happinessRate"
            placeholder="1 ile 10 arasında mutluluk oranını giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('lifeSurvey.whatMakesYouHappy') }}: {{ lifeSurvey.happyThing }}</p>
        <input
            type="text"
            required
            v-model="lifeSurvey.happyThing"
            placeholder="sizi en mutlu eden şeyi giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('lifeSurvey.whatMakesYouUnhappy') }}: {{ lifeSurvey.unhappyThing }}</p>
        <input
            type="text"
            required
            v-model="lifeSurvey.unhappyThing"
            placeholder="sizi en mutsuz eden şeyi giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('lifeSurvey.description') }}: {{ lifeSurvey.description }}</p>
        <input
            type="text"
            required
            v-model="lifeSurvey.description"
            placeholder="açıklama giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('lifeSurvey.pollsterName') }}: {{ lifeSurvey.pollster.name }}</p>
        <input
            type="text"
            required
            v-model="lifeSurvey.pollster.name"
            placeholder="anketörün adını giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('lifeSurvey.pollsterSurname') }}: {{ lifeSurvey.pollster.surname }}</p>
        <input
            type="text"
            required
            v-model="lifeSurvey.pollster.surname"
            placeholder="anketörün soyadını giriniz.."
        />
      </div>

      <div>
        <button type="submit">{{ $t('lifeSurvey.save') }}</button>
      </div>
    </form>
    <router-link :to="{ name: 'homePage' }">{{ $t('lifeSurvey.backHomePage') }}</router-link>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";

export default {
  name: "LifeSurvey",
  data() {
    return {
      id: null,
      lifeSurvey: {
        name: "",
        surname: "",
        gender: null,
        dateOfBirth: "",
        happinessRate: "",
        happyThing: "",
        unhappyThing: "",
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
          .post("life-survey/save", this.lifeSurvey)
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
          .put("life-survey/update", this.lifeSurvey)
          .then((response) => {
            console.log(response);
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
    },

    getLifeSurvey(id) {
      apiService
          .get("life-survey/" + id)
          .then((response) => {
            console.log(response);
            this.lifeSurvey = response.data;
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
      this.getLifeSurvey(this.$route.params.id);
    }
  },
};
</script>

<style>
</style>