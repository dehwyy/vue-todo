import axios from "axios";

export const dataFetch = {
  data() {
    return {
      posts: [],
      postsPerPage: 5,
      totalPages: 20, // hardcode issue <= on first request cannot get lastIndex + 1 page
      currentPage: 0,
    }
  },
  methods: {
    async fetchPosts()  {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: 5,
            _page: this.totalPages - this.currentPage,
          },
        }
      );
      this.totalPosts = response.headers["x-total-count"];
      this.posts = [...this.posts, ...response.data.reverse()];
      this.selectSort(this.selectedSort !== "default" ? this.selectedSort: null)
    },
  }
}