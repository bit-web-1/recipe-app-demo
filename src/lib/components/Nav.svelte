<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/contact">Contact us</a></li>
    </ul>
</nav>

<style>
    nav {
        width: 90%;
        margin: 10px auto;
    }
    ul {
        list-style: none;
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0;
    }
    li {
        background-color: aliceblue;
        border-radius: 2em;
        padding: 1em 2em;
    }

    @media (max-width: 575px) {
        ul {
            justify-content: flex-start;
        }
    }
</style>