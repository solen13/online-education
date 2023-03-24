<template>
  <v-row style="width: 75%" class="mx-auto mt-6 row-responsive">
    <v-col cols="12">
      <h3 class="title">Whats Your Will Learnc?</h3>
      <div class="title-line"></div>
      <ul>
        <li
          class="d-flex mt-10"
          style="width: 80%"
          v-for="item in lessons"
          :key="item"
        >
          <v-icon class="mr-2"> mdi-check</v-icon>

          {{ item }}
        </li>
      </ul>
    </v-col>
    <v-col class="mt-10">
      <v-row>
        <v-col cols="6">
          <h3 class="title">Content of course</h3>
          <div class="title-line"></div>

          <li
            class="d-flex mt-10"
            style="font-size: 16px"
            v-for="item in create"
            :key="item"
          >
            <v-icon class="mr-4"> mdi-check</v-icon>

            {{ item }}
          </li>
        </v-col>
        <v-col cols="6">
          <h3 class="title">Course Owners</h3>
          <div class="title-line"></div>
          <li class="d-flex align-center mt-2">
            <v-avatar size="70">
              <v-img
                src="https://randomuser.me/api/portraits/men/1.jpg"
              ></v-img>
            </v-avatar>
            <div class="ml-2">
              <h2 class="teach-title">Danny connell</h2>
              <p class="grey--text subtitle-2">Bestselling instructor</p>
            </div>
          </li>
          <li
            class="d-flex mt-5"
            style="font-size: 16px"
            v-for="item in 2"
            :key="item"
          >
            <v-icon class="mr-4"> mdi-check</v-icon>

            21 is high scool
          </li>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      lessons: [
        "How to switch over from Vue 2 * Options API to Vue 3 * Composition API",
        "Create a real-world app from scratch with Vue 3, Composition API, Pinia & Vite",
        "State Management using Pinia",
        "Firebase 9, including Cloud Firestore, Authentication & Security Rules",
        "Core differences between Options API & Composition ",
      ],
      create: [
        "9 hours of ready-made video content",
        "answering questions",
        "Certificate of completion",
        "lifetime access",
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 32px !important;
  color: #111111;
}
.title-line {
  width: 164px;
  margin-top: 24px;
  border-bottom: 2px solid #03c88d;
}
li {
  font-size: 24px;
}
@media only screen and (max-width: 600px) {
  .row-responsive {
    width: 100% !important;
  }
  li {
    width: 100% !important;
  }
  .title {
    font-size: 22px !important;
    color: #111111;
  }
  .teach-title {
    font-size: 24px;
  }
}
</style>
