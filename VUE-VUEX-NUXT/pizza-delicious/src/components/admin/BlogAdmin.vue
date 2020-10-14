<template>
  <div class="row mb-5">
    <div class="col-md-5">
      <div
        class="row mb-2"
        v-for="articleItem in articles"
        :key="articleItem._id"
        @click.prevent="editArticle(articleItem)"
      >
        <div class="col-md-2">
          <img width="100%" :src="articleItem.image" :alt="articleItem.title" />
        </div>
        <div class="col-md-8">
          <h5>{{ articleItem.title }}</h5>
        </div>
      </div>
    </div>
    <form action="#" class="contact-form col-md-7">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <input
              v-model="editingArticle.title"
              type="text"
              class="form-control"
              placeholder="Article name"
              required
              ref="title"
            />
          </div>
          <div class="form-group">
            <img
              v-if="editingArticle.image !== ''"
              :src="editingArticle.image"
              width="60"
            />
            <input
              v-model="editingArticle.image"
              type="url"
              class="form-control"
              placeholder="Article image"
              required
            />
          </div>
          <div class="form-group">
            <input
              v-model="editingArticle.urlink"
              type="url"
              class="form-control"
              placeholder="Article url"
              required
            />
          </div>
          <div class="form-group">
            <input
              v-model="editingArticle.author"
              type="text"
              class="form-control"
              placeholder="Article author"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              v-model="editingArticle.description"
              class="form-control"
              placeholder="Article description"
              required
            ></textarea>
          </div>
          <!--<div class="form-group">
                            <input v-model="editingArticle.price" type="number" class="form-control" placeholder="Article price" required>
                        </div>-->
          <div class="form-group">
            <input
              class="d-d-inline-block"
              v-model="editingArticle.enabled"
              type="checkbox"
            />
            Habilitado
          </div>
        </div>
      </div>
      <div class="form-group d-flex justify-content-center">
        <input
          @click.prevent="sendArticle"
          type="submit"
          :value="getActionBtnLabel"
          class="btn btn-primary py-3 px-5"
        />
        <input
          v-if="editingArticle._id !== ''"
          @click.prevent="deleteArticle"
          type="submit"
          value="Borrar"
          class="btn btn-danger py-3 px-5"
        />
      </div>
    </form>
  </div>
</template>

<script>
import BlogPage from "@/pages/BlogPage";

export default {
  name: "BlogAdmin",
  data() {
    return {
      editingArticle: {
        _id: "",
        title: "",
        description: "",
        image: "",
        author: "",
        urlink: "",
        commentsCount: 0,
        date: "",
        enable: true
      }
    };
  },
  components: {
    BlogPage
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
    getActionBtnLabel() {
      return this.editingArticle._id === "" ? "Crear" : "Actualizar";
    }
  },
  methods: {
    getArticleBaseData() {
      return {
        _id: "",
        title: "",
        description: "",
        image: "",
        author: "",
        urlink: "",
        commentsCount: 0,
        date: "",
        enable: true
      };
    },
    addArticle() {
      this.editingArticle = this.getArticleBaseData();
    },
    editArticle(article) {
      this.editingArticle = {
        _id: article._id,
        title: article.title,
        description: article.description,
        image: article.image,
        author: article.author,
        urlink: article.urlink,
        commentsCount: article.commentsCount,
        date: article.date,
        enabled: article.enabled
      };
    },
    async deleteArticle(article) {
      let currentUser = this.$store.state.user;
      let token = this.$store.state.token;
      const requestHeaders = {
        headers: { Authorization: "Bearer " + token }
      };

      try {
        let articleId = this.editingArticle._id;
        let result = await this.axios.delete(
          "http://localhost:3000/articles/" + articleId,
          requestHeaders
        );

        let articleName = this.editingArticle.title;
        this.editingArticle = this.getArticleBaseData();
        this.$refs.title.focus();
        this.$store.dispatch("loadArticles");

        alert('El articulo "' + articleName + '" se ha borrado adecuadamente');
      } catch (error) {
        alert(
          "Hay algún error en la creación del articulo, revísalo todo e inténtalo de nuevo."
        );
      }
    },
    async sendArticle() {
      let currentUser = this.$store.state.user;
      let token = this.$store.state.token;
      const requestHeaders = {
        headers: { Authorization: "Bearer " + token }
      };

      let articleData = { ...this.editingArticle };

      if (articleData._id === "") {
        delete articleData._id;

        try {
          let result = await this.axios.post(
            "http://localhost:3000/articles",
            articleData,
            requestHeaders
          );

          this.editingArticle = this.getArticleBaseData();
          this.$refs.title.focus();
          this.$store.dispatch("loadArticles");

          alert(
            'El artiuclo "' + result.data.title + '" se ha creado adecuadamente'
          );
          return;
        } catch (error) {
          alert(
            "Hay algún error en la creación del articulo, revísalo todo e inténtalo de nuevo."
          );
        }
      }

      if (articleData._id !== "") {
        const articleId = articleData._id;
        delete articleData._id;

        try {
          let result = await this.axios.put(
            "http://localhost:3000/articles/" + articleId,
            articleData,
            requestHeaders
          );

          this.editingArticle = this.getArticleBaseData();
          this.$refs.title.focus();
          this.$store.dispatch("loadArticles");

          alert(
            'El articulo "' +
              result.data.title +
              '" se ha editado adecuadamente'
          );
          return;
        } catch (error) {
          alert(
            "Hay algún error en la actualización del articulo, revísalo todo e inténtalo de nuevo."
          );
        }
      }
    }
  },
  mounted() {
    this.$store.dispatch("loadArticles");
    this.$refs.title.focus();
  }
};
</script>
