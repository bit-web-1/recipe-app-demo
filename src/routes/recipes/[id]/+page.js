export async function load({ fetch, params }) {
	const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
	const recipe = await res.json();

	return { recipe };
}