<script>
    let { data } = $props();
    console.log(data)
</script>

<table>
    <thead>
        <tr>
            <th>Recipe Name</th>
            <th>Prep time</th>
            <th>Difficulty</th>
            <th>Servings</th>
            <th>Cuisine</th>
            <th>Calories</th>
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

<style>
    table {
        table-layout: fixed;
        width: 90%;
        margin: 10px auto;
        border-collapse: collapse;
    }
    
    th,
    td {
        border: 1px solid #999;
        padding: 0.6em;
    }
</style>