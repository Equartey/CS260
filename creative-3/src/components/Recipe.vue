<template>
  <div class="container">
    <div class="recipe card ">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="text-left">{{ recipe.name }}</h1>

          <div class="img">
            <img class="img-fluid" :src="recipe.imageURL" />
          </div>
        </div>

        <div class="col-12 col-md-6">
          <h1 class="text-left mb-0">Instructions</h1>

          <p class="text-muted text-left">
            Estimated time: {{ recipe.minutes }}mins
          </p>

          <div class="ingredients">
            <span>Ingredients:</span>
            <ul>
              <li v-for="(ing, index) in recipe.ingredients" :key="index">
                <span>{{ ing.name }}</span> |
                <span>{{ ing.quantity }}</span>
              </li>
            </ul>
          </div>
          <div class="steps">
            <span>Steps:</span>
            <ol>
              <li v-for="(step, index) in recipe.steps" :key="index">
                <span>{{ step }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recipe",
  props: {},
  computed: {
    recipe() {
      return this.$root.$data.recipes.find(x => x.id === this.$route.params.id);
    }
  }
};
</script>

<style scoped>
h1 {
  text-transform: capitalize;
}

.recipe {
  margin: 40px 0;
  padding: 40px;
}
.ingredients {
  text-align: left;
}
.steps {
  text-align: left;
}
.img-fluid {
}
</style>
