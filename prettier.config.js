// prettier.config.js
// Centralized Prettier config. Keep options minimal to avoid changing project style;
// rely on plugins for Svelte/Astro parsing and Tailwind class sorting.
// Boundaries: Biome remains; Prettier handles Svelte/Astro/MD/HTML (approved plan).
export default {
	useTabs: true,
	singleQuote: true,
	semi: false,
	trailingComma: 'all',
	printWidth: 80,
	plugins: ['prettier-plugin-tailwindcss'],
}
