<template>
  <div class="home">
    <div class="gallery">
      <div
        class="card shadow-sm"
        v-for="recipe in recipes"
        :key="recipe.name"
        @click="$router.push('recipe/' + recipe.id)"
      >
        <div class="img-wrapper">
          <img class="img-fluid" :src="recipe.imageURL" />
        </div>
        <div class="card-body name">
          {{ recipe.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {},
  computed: {
    recipes() {
      return this.$root.$data.recipes;
    }
  }
};
</script>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, calc(33.33% - 14px));
  grid-template-rows: repeat(3, auto);
  grid-gap: 21px;
  padding: 21px;
}
.card {
  cursor: pointer;
  width: 100%;
}
.img-wrapper {
  overflow: hidden;
  max-height: 250px;
  width: 100%;
}
.name {
  font-size: 24px;
  padding: 10px 0;
}
@media (max-width: 1000px) {
  .gallery {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>
