<template>
  <div>
    <header>
      <input
        type="text"
        id="search"
        placeholder="Search Book"
        @keyup.enter="onBookSearch($event)"
        @keyup.delete="clearBookList($event)"
      >
    </header>
    <h1>{{topic}}</h1>
    <div class="book-list" v-if="isBooksFound">
      <div class="book-card" v-for="book of books" :key="book.id">
        <img :src="book.image" alt>
        <p class="book-name">{{book.name}}</p>
        <p class="author-name">{{book.author}}</p>
      </div>
    </div>
    <div v-if="!isBooksFound">{{infoMsg}}</div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      topic: "",
      infoMsg: "",
      isBooksFound: true,
      books: []
    };
  },
  mounted() {
    this.topic = this.$route.params.topic;
    this.getBooks();
  },
  methods: {
    getBooks() {
      axios
        .get("http://skunkworks.ignitesol.com:8000/books?topic=" + this.topic)
        .then(response => {
          const results = response.data.results;

          this.setBookData(results, false);
        });
    },
    setBookData(results, isSearch) {
      this.isBooksFound = true;
      if (results.length == 0) {
        if (isSearch) {
          this.infoMsg = "No Search result found";
        } else {
          this.infoMsg = "No Book available";
        }
        this.isBooksFound = false;
        return;
      }
      let filteredList = results.map(book => {
        let newBook = new Object();
        newBook.id = book.id;
        newBook.name = book.title;
        newBook.author = book.authors[0].name;
        for (var key in book.formats) {
          if (key === "image/jpeg" || key === "image/jpg") {
            newBook.image = book.formats[key];
            console.log(book.formats[key]);
          }
        }
        return newBook;
      });
      this.books = filteredList;
      console.log(filteredList);
    },
    onBookSearch(event) {
      axios
        .get(
          "http://skunkworks.ignitesol.com:8000/books?topic=" +
            this.topic +
            "&search=" +
            event.target.value
        )
        .then(response => {
          const results = response.data.results;
          this.setBookData(results, true);
          console.log(response);
        });
    },
    clearBookList(event) {
      if (event.target.value == "") {
        this.getBooks();
      }
    }
  }
};
</script>
<style>
.book-card {
  width: 200px;
  margin: 10px;
  border: 1px solid green;
  border-radius: 5px;
  padding: 15px;
}
.book-list {
  display: flex;
  flex-wrap: wrap;
}
.book-name {
  text-transform: uppercase;
  text-decoration: black bold;
}
h1 {
  text-transform: uppercase;
}
input {
  padding: 10px;
  width: 300px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid green;
  outline: none;
}
</style>

