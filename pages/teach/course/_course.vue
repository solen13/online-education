<template>
  <div>
    <div class="d-flex justify-space-between px-8">
      <v-btn class="blue white--text rounded-pill">back</v-btn>
      <v-btn class="pink white--text rounded-pill">Live</v-btn>
      <v-btn @click="isAdd = true" class="blue white--text rounded-pill"
        >ADD</v-btn
      >
    </div>
    <v-container>
      <li
        class="todo-item mt-3"
        v-for="(item, i) in todos"
        :key="i"
        draggable="true"
        @dragstart="dragStart(i, $event)"
        @dragover.prevent
        @dragend="dragEnd"
        @drop="dragFinish(i, $event)"
      >
        <cardContent
          :getData="item"
          @upDate="upDateBtn(item)"
          @moveUp="move(i, i - 1)"
          @moveDown="move(i, i + 1)"
          @removeItem="removeItem(item)"
        />
      </li>
    </v-container>
    <v-row justify="center">
      <v-dialog v-model="isAdd" width="700px">
        <v-card height="350" class="px-4">
          <h3 class="mt-3 text-center mb-2">Add Video</h3>
          <v-text-field
            label="Title"
            placeholder="title"
            v-model="newItem"
            outlined
            class=""
          />
          <v-text-field
            label="Subject"
            placeholder="Subject"
            v-model="subject"
            outlined
            class=""
          />
          <div class="d-flex justify-center mb-3">
            <v-btn
              color="primary"
              class="text-none"
              outlined
              depressed
              :loading="isSelecting"
              @click="onButtonClick"
            >
              <v-icon left> mdi-cloud-upload </v-icon>
              {{ buttonText }}
            </v-btn>
            <input
              ref="uploader"
              class="d-none"
              type="file"
              accept="application/pdf,application/vnd.ms-excel"
              @change="onFileChanged"
            />
          </div>
          <div class="d-flex justify-center">
            <v-btn @click="addItem" class="blue white--text">Add</v-btn>
          </div>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import cardContent from "@/components/courseCreate/createdDetail.vue";
const TODO_STORAGE_KEY = "todostorage";

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
  components: { cardContent },
  data() {
    return {
      isAdd: false,
      defaultButtonText: "Drop Video",
      selectedFile: null,
      isSelecting: false,
      sendData: ["test", "test"],
      todos: todoStorage.fetch(),

      dragging: -1,
      subject: "",
      newItem: "",
    };
  },
  methods: {
    addItem() {
      if (!this.newItem) {
        return;
      }

      this.todos.push({
        title: this.newItem,
        subject: this.subject,
        //video:this.selectedFile
      });
      this.newItem = "";
      this.subject = "";
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

    onButtonClick() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );

      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];

      // do something
      console.log(this.selectedFile);
    },

    upDateBtn(data) {
      console.log(data);
      this.isAdd = true;
      this.newItem = data.title;
      this.subject = data.subject;
    },
  },

  computed: {
    isDragging() {
      return this.dragging > -1;
    },
    buttonText() {
      return this.selectedFile
        ? this.selectedFile.name
        : this.defaultButtonText;
    },
  },
  // watch todos change for localStorage persistence
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos);
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
.subtitle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
  font-size: 14px;
}
@media only screen and (min-width: 600px) {
  .card-responsive {
  }
  .todo-item {
    width: 100%;
  }
}
body {
  font-family: "Source Sans Pro", "Arial", sans-serif;
}

* {
  box-sizing: border-box;
}

.todo-list {
  list-style-type: none;
  padding: 10px;
}

.done {
  text-decoration: line-through;
  color: #888;
}

.new-todo {
  width: 100%;
}

.trash-drop {
  border: 2px dashed #ccc !important;
  text-align: center;
  color: #e33;
}

.trash-drop:-moz-drag-over {
  border: 2px solid red;
}
.popap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(177, 177, 184, 0.188);
  z-index: 99;
}
</style>
