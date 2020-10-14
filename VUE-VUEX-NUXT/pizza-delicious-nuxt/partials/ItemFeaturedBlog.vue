<template>
  <div class="col-md-4 d-flex">
    <div class="blog-entry align-self-stretch">
      <a
        href="#"
        class="block-20"
        :style="`background-image: url('${item.image}')`"
      >
      </a>
      <div class="text py-4 d-block">
        <div class="meta">
          <div><a href="#">{{ item.date | toDate }}</a></div>
          <div><a href="#">{{ item.author }}</a></div>
          <div>
            <a href="#" class="meta-chat"><span class="icon-chat"></span> {{item.commentsCount}}</a>
          </div>
        </div>
        <h3 class="heading mt-2">
          <a href="#">{{item.title}}</a>
        </h3>
        <p>
         {{item.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemFeaturedBlog",
  props: {
    item: {
      type: Object,
      default: {
        title: "",
        description:"", 
        image: "",
        author: "",
        commentsCount: 0,
        date: new Date(),
      },
    },
  },
};
</script>

<style>
</style>