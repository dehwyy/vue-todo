<template>
  <div @click="closeModal">
    <div class="posts__wrapper">
      <PostFormVue
        v-model:isModal="isModal"
        :sortTypes="sortTypes"
        :posts="posts"
        @createPost="addPost"
        @setSort="selectSort"
      />
      <PostListVue
        v-if="posts.length"
        :posts="posts"
        @removePost="deletePost"
      />
      <div
        class="displayNone"
        style="width: 100%; height: 50px"
        ref="myObserver" v-observer="{currentPage: this.currentPage,
                                       incrementPage: this.incrementPage,
                                       fetchNewData: this.fetchPosts}"
      ></div>
    </div>
  </div>
</template>
<script>
import PostFormVue from "./PostForm.vue";
import PostListVue from "./PostList.vue";
import NavbarVue from "./Navbar.vue";
import {dataFetch} from "@/mixins/getData";

export default {
  data() {
    return {
      direction: false,
      selectedSort: "сначала новые",
      sortTypes: ["сначала старыe", "сначала новые", "по названию", "по описанию"],
      isModal: false,
    };
  },
  methods: {
    addPost(newPost) {
      this.posts.unshift(newPost);
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    selectSort(sortType) {
      if (!sortType) return
      let mySort;
      switch (sortType) {
        case "по описанию":
          mySort = "body"; break;
        case "по названию":
          mySort = "title"; break;
        case "сначала старыe":
          mySort = "id"
          this.direction = true;
          break
        default:
          mySort = "id";
          this.direction = false; break;
      }
      if (typeof this.posts[0][mySort] === "number") {
        if (this.direction) {
          this.posts.sort((a, b) =>
            a[mySort] - b[mySort]
          )
        } else {
          this.posts.sort((a, b) =>
            b[mySort] - a[mySort]
          )
        }
      } else {
        this.posts.sort((a, b) =>
          String(a[mySort]).localeCompare(String(b[mySort]))
        )
      }
      
    },
    closeModal() {
      this.isModal = false;
    },
    incrementPage() {
      this.currentPage += 1
    }
  },
  mixins: [dataFetch],
  components: {
    PostFormVue,
    PostListVue,
    NavbarVue,
  },
  mounted() {
    this.fetchPosts()
      .then(() => {
        this.totalPages = Math.ceil(this.totalPosts / this.postsPerPage);
      }).then(() => this.$refs.myObserver.classList.toggle("displayNone"))
  },
};
</script>

<style>
body {
  overflow-x: hidden;
  font-size: 20px;
}

input {
  width: 100%;
  border-radius: 5px;
}

button {
  font-size: 20px !important;
}

.posts__wrapper {
  width: 1000px;
  margin: 0 auto;
  padding: 10px 25px;
}
</style>
