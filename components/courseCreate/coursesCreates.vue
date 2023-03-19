<template>
  <v-card height="100vh">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" @click="e1 = 1">
          Create Your Course
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" @click="e1 = 2">
          Course benefits
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" @click="e1 = 3"> requirements </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card flat class="mb-12 pt-1">
            <v-text-field
              v-model="text.courseName"
              label="Course Name"
              outlined
            ></v-text-field>
            <v-select
              :items="items"
              label="Category"
              outlined
              v-model="text.category"
            ></v-select>
            <v-select
              :items="items"
              label="Weeks to learn"
              outlined
              v-model="text.weekLearn"
            ></v-select>
            <v-textarea
              outlined
              auto-grow
              label="About"
              rows="4"
              row-height="30"
              v-model="text.about"
            ></v-textarea>
          </v-card>

          <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12 pt-1" flat>
            <v-text-field label="First benefit" outlined></v-text-field>
            <v-select
              :items="items"
              label="Second benefit"
              outlined
              v-model="text.fistBenefit"
            ></v-select>
            <v-select
              :items="items"
              label="Third benefıt"
              outlined
              v-model="text.seacondBenefit"
            ></v-select>
            <v-select
              :items="items"
              label="Fourth benefıt"
              outlined
              v-model="text.thirdBenefit"
            ></v-select>
            <v-select
              :items="items"
              label="Last benefıt"
              outlined
              v-model="text.lastBenefit"
            ></v-select>
          </v-card>

          <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

          <v-btn text @click="e1 = 1"> back </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card flat class="mb-12 pt-1">
            <v-textarea
              outlined
              auto-grow
              label="requirements"
              rows="4"
              row-height="30"
              v-model="text.requirements"
            ></v-textarea>
            {{ update }}
          </v-card>
          <v-btn v-if="update" color="primary" @click="updateBtn">
            {{ data }}
          </v-btn>
          <v-btn v-else color="primary" @click="finishBtn"> Finish</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</template>
<script>
export default {
  props: {
    update: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      e1: 1,
      items: ["Foo", "Bar", "Fizz", "Buzz"],

      text: {
        courseName: "",
        category: "",
        weekLearn: "",
        about: "",
        fistBenefit: "",
        seacondBenefit: "",
        thirdBenefit: "",
        fourthBenefit: "",
        lastBenefit: "",
        requirements: "",
      },
    };
  },
  methods: {
    finishBtn() {
      localStorage.setItem("courses", JSON.stringify(this.text));
      console.log(this.text);
    },
    updateBtn() {
      localStorage.setItem("courses", JSON.stringify(this.text));
    },
  },

  computed: {
    data() {
      if (this.update) {
        this.text = this.update;
        return "update";
      }
    },
  },
};
</script>

<style scoped></style>
