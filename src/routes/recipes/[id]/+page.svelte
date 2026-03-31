<script>
  let { data } = $props();
  const recipe = data.recipe;
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;
</script>

<svelte:head>
  <title>{recipe.name}</title>
</svelte:head>

<h2>{recipe.name}</h2>

{#if recipe.image}
  <img src={recipe.image} alt={recipe.name} class="recipe-image" />
{/if}

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
    <dt>Total time:</dt>
    <dd>{totalTime} minutes</dd>
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
  {#if recipe.rating}
  <div>
    <dt>Rating:</dt>
    <dd><span aria-label="Rating {recipe.rating} out of 5 stars">{recipe.rating} / 5</span> ({recipe.reviewCount} reviews)</dd>
  </div>
  {/if}
  {#if recipe.mealType?.length}
  <div>
    <dt>Meal type:</dt>
    <dd>{recipe.mealType.join(', ')}</dd>
  </div>
  {/if}
</dl>

{#if recipe.tags?.length}
  <p class="tags">
    {#each recipe.tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </p>
{/if}

<h3>Ingredients</h3>
<ul>
  {#each recipe.ingredients as ingredient}
    <li>{ingredient}</li>
  {/each}
</ul>

<h3>Instructions</h3>

<ol>
  {#each recipe.instructions as instruction}
    <li>{instruction}</li>
  {/each}
</ol>

<p class="back"><a href="/recipes">&xlarr; back to recipes</a></p>


<style>
    .recipe-image {
        width: 100%;
        max-width: 400px;
        border-radius: 0.5em;
        display: block;
        margin-bottom: 1em;
    }
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
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        margin: 1em 0;
    }
    .tag {
        background-color: aliceblue;
        border-radius: 2em;
        padding: 0.2em 0.8em;
        font-size: 0.85em;
    }
    .back {
        margin-top: 3em;
    }
</style>