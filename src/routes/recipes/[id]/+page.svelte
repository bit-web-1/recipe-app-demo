<script>
  let { data } = $props();
  const recipe = data.recipe;
</script>

<h2>{recipe.name}</h2>

<dl>
  <div>
    <dt>Prep time:</dt>
    <dd>{recipe.prepTimeMinutes} minutes</dd>
  </div>
  <div>
    <dt>Cook time:</dt>
    <dd>{recipe.cookTimeMinutes} minutes</dd>
  </div>
  <div>
    <dt>Serves:</dt>
    <dd>{recipe.servings}</dd>
  </div>
  <div>
    <dt>Difficulty:</dt>
    <dd>{recipe.difficulty}</dd>
  </div>
  <div>
    <dt>Cuisine:</dt>
    <dd>{recipe.cuisine}</dd>
  </div>
  <div>
    <dt>Calories per serving:</dt>
    <dd>{recipe.caloriesPerServing}</dd>
  </div>
</dl>

<h3>Ingredients</h3>
<ul>
  {#each recipe.ingredients as ingredient}
    <li>{ingredient}</li>
  {/each}
</ul>

<h3>Instructions</h3>

{#each recipe.instructions as instruction}
  <p>{instruction}</p>
{/each}

<style>
    dl {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1em;
    }
    dt {
        font-weight: bold;
    }
    dd {
        margin-left: 0;
    }
</style>