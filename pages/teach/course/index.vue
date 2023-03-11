<template>
  <v-container>
    <div class="d-flex justify-end mb-2">
      <v-btn @click="cretedBtn" class="blue white--text rounded-pill"
        >create</v-btn
      >
    </div>
    <v-row style="width: 100%" class="mx-auto">
      <v-col
        md="4"
        class="d-flex justify-center"
        v-for="(item, index) in lessons"
        :key="index"
      >
        <courseBox
          :btnShow="false"
          :getData="item"
          :teachControl="true"
          @clicked="cardClick"
          @update="cardUpdateBtn"
          @sss="isss = true"
        />
      </v-col>
    </v-row>
    <div v-if="isCreate" class="create-conteiner d-flex align-center">
      <div class="closeBtn pa-2">
        <v-btn fab small @click="isCreate = false" class="red white--text">
          <v-icon>mdi-close</v-icon></v-btn
        >
      </div>
      <createCourse :update="UpdatePropsText" />
    </div>
    <div v-if="isss" class="create-conteiner d-flex align-center">
      <div class="closeBtn pa-2">
        <v-btn fab small @click="isss = false" class="red white--text">
          <v-icon>mdi-close</v-icon></v-btn
        >
      </div>
      <v-card width="70%" height="500" class="card-responsive">
        <h3 class="text-center pa-2">Questions Content</h3>
        <v-row class="mx-3">
          <v-col cols="12" sm="3" md="3" lg="3" class="mt-3">
            <v-text-field
              v-model="questionsTitle"
              label="Title"
              placeholder="Title"
              outlined
              class=""
            />
            <v-textarea
              auto-grow
              outlined
              rows="1"
              row-height="7"
              name="input-7-1"
              label="Send message"
              class=""
              v-model="questionsMessage"
            ></v-textarea>
            <div class="d-flex justify-center">
              <div v-if="isUpdateBtnActive">
                <v-btn @click="updateBtn" class="blue white--text rounded-xl"
                  >upDate</v-btn
                >
                <v-btn @click="done" text>Done</v-btn>
              </div>
              <v-btn v-else @click="addItem" class="blue white--text rounded-xl"
                >Add</v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" sm="9" md="9" lg="9">
            <v-card height="70vh" flat class="sssList">
              <li
                class="todo-item mt-3"
                v-for="(item, i) in todos"
                :key="i"
                draggable="true"
                @dragstart="dragStart(i, $event)"
                @dragover.prevent
                @dragend="dragEnd"
                @drop="dragFinish(i, $event)"
                :class="`color${i}`"
              >
                <cardContent
                  :getData="item"
                  @upDate="upDateBtn(item, i)"
                  @moveUp="move(i, i - 1)"
                  @moveDown="move(i, i + 1)"
                  @removeItem="removeItem(item)"
                />
              </li>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import courseBox from "@/components/educationCard/card.vue";
import createCourse from "@/components/courseCreate/coursesCreates.vue";
import cardContent from "@/components/courseCreate/createdDetail.vue";
const TODO_STORAGE_KEY = "questions";

let todoStorage = {
  fetch: () => JSON.parse(localStorage.getItem(TODO_STORAGE_KEY) || "[]"),
  save: (todos) =>
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos)),
};
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};
export default {
  components: { courseBox, createCourse, cardContent },
  data() {
    return {
      updateIndex: null,
      todos: todoStorage.fetch(),
      isAdd: false,
      isUpdateBtnActive: false,
      UpdatePropsText: null,
      dragging: -1,
      isss: false,
      isCreate: false,
      questionsTitle: "",
      questionsMessage: "",
      lessons: [
        {
          title: "Javascript",
          router: "/javascript/oneLessons",
        },

        {
          title: "HTML CSS",
          router: "/htmlCss/oneLessons",
        },
        {
          title: "Computer Enginer",
          router: "/comuterenginer/oneLessons",
        },
        {
          title: "Asp .Net",
          router: "/aspnet/oneLessons",
        },
        {
          title: "php",
          router: "/php/oneLessons",
        },
      ],
    };
  },
  methods: {
    cardClick(item, index) {
      this.$router.push(
        this.localePath({
          name: "teach-course-course",
          params: { id: "46546" },
        })
      );
    },

    addItem() {
      if (!this.questionsTitle && this.questionsMessage) {
        return;
      }
      this.todos.push({
        title: this.questionsTitle,
        subject: this.questionsMessage,
      });
    },
    updateBtn() {
      this.todos[this.updateIndex] = {
        title: this.questionsTitle,
        subject: this.questionsMessage,
      };
      this.questionsTitle = "";
      this.questionsMessage = "";

      localStorage.setItem("questions", JSON.stringify(this.todos));

      this.isUpdateBtnActive = false;
      const qq = document.querySelector(".color" + this.updateIndex);
      qq.classList.remove("disable");
    },
    done() {
      this.questionsTitle = "";
      this.questionsMessage = "";
      this.isUpdateBtnActive = false;
      const qq = document.querySelector(".color" + this.updateIndex);
      qq.classList.remove("disable");
    },
    removeItem(item) {
      this.todos.splice(this.todos.indexOf(item), 1);
    },
    removeItemAt(index) {
      this.todos.splice(index, 1);
    },
    dragStart(which, ev) {
      ev.dataTransfer.setData("Text", this.id);
      ev.dataTransfer.dropEffect = "move";
      this.dragging = which;
    },

    dragEnd(ev) {
      this.dragging = -1;
    },
    dragFinish(to, ev) {
      this.moveItem(this.dragging, to);
      ev.target.style.marginTop = "2px";
      ev.target.style.marginBottom = "2px";
    },
    moveItem(from, to) {
      if (to === -1) {
        this.removeItemAt(from);
      } else {
        this.todos.splice(to, 0, this.todos.splice(from, 1)[0]);
      }
    },

    move(from, to) {
      this.todos.move(from, to);
    },

    upDateBtn(item, i) {
      this.isUpdateBtnActive = true;
      this.questionsTitle = item.title;
      this.questionsMessage = item.subject;
      const qq = document.querySelector(".color" + i);
      qq.classList.add("disable");
      this.updateIndex = i;
      //   let disable = document.querySelectorAll("li");

      //   disable.classList.add("disable");
    },
    cardUpdateBtn() {
      this.UpdatePropsText = JSON.parse(localStorage.getItem("courses"));
      this.isCreate = true;
    },
    cretedBtn() {
      this.isCreate = true;
      this.UpdatePropsText = null;
    },
  },
  computed: {
    isDragging() {
      return this.dragging > -1;
    },
  },
  created() {
    let urlName = this.$route.fullPath;
    urlName = urlName.split("/")[2];
    this.$store.dispatch("lessonsName", urlName);
  },
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos);
        console.log(todos);
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
.active {
  border: 2px solid red;
}
.disable {
  pointer-events: none;
  opacity: 0.6;
}
.sssList {
  overflow-y: auto;
}
.create-conteiner {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(128, 128, 128, 0.863);
  z-index: 99;
}
.closeBtn {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
}
.card-responsive {
  margin-left: 5%;
}
.todo-item {
  width: 95%;
}
</style>
