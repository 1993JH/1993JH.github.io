---
title: Pokédex — PokéAPI gallery
summary: Browse Pokémon from a public API, open their stats, and keep track of the ones you've caught.
year: 2025
role: Solo, web programming course
stack: [javascript, html, css, pokéapi, localstorage]
featured: true
order: 3
live: https://1993jh.github.io/pokedex/
repo: https://github.com/1993JH/pokedex
---

## Problem

The task was to build a Pokédex in plain JavaScript using the public [PokéAPI](https://pokeapi.co): a gallery of Pokémon with images, a way to load more, a detail view for each one, and the option to mark Pokémon as caught.

## Approach

The app is a single HTML page with no frameworks. JavaScript fetches Pokémon from the API 20 at a time and builds the gallery from the results.

## Key features

- **Gallery with "Load more."** Each click fetches the next 20 Pokémon and adds them to the grid.
- **Detail view.** Clicking a Pokémon opens a dialog with its types, abilities and base stats, loaded from the API on demand.
- **Catch and release.** A button in the detail view marks a Pokémon as caught and highlights its card in the gallery. Caught Pokémon are saved in the browser, so they're still there after a reload.
- **One click handler for the whole grid.** The gallery uses a single listener for every card, so cards added later work without extra setup.

## What I learned

Working with a real REST API: fetching data asynchronously, turning JSON into HTML, and saving state in the browser with `localStorage`.
