<script>
    let { data } = $props();
    console.log(data)
</script>

<table>
    <thead>
        <tr>
            <td>Recipe Name</td>
            <td>Prep time</td>
            <td>Difficulty</td>
            <td>Servings</td>
            <td>Cuisine</td>
            <td>Calories</td>
        </tr>
    </thead>
    <tbody>
        {#each data.recipes.recipes as recipe}
            <tr>
                <td>{recipe.name}</td>
                <td>{recipe.prepTimeMinutes}</td>
                <td>{recipe.difficulty}</td>
                <td>{recipe.servings}</td>
                <td>{recipe.cuisine}</td>
                <td>{recipe.caloriesPerServing}</td>
            </tr>
        {/each}
    </tbody>
</table>