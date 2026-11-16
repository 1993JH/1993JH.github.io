---
title: Materials Database — R-value calculator
summary: Laravel app that calculates the insulation value of a wall from its building materials.
year: 2026
role: Developer, team of three
stack: [laravel, php, mysql, blade, javascript]
featured: true
order: 2 # TrackFit is order 1
repo: https://github.com/1993JH/materialsDatabase
---

## Problem

Another student group built a database of wall-building materials and their thermal properties. Our team's job was to turn it into a web app where people can browse those materials and work out how well a wall insulates.

## Approach

We built the app in Laravel using its model, view and controller structure. Models connect to the provided database, controllers handle requests and validation, and Blade templates render the pages.

## Key features

- **Material records.** Users can view, add, edit and remove materials, with form validation on every change.
- **R-value calculation.** Users choose the layers of a wall, and the app adds up each layer's thermal resistance (R-value) to give a total for the wall. A higher R-value means better insulation.
- **Team workflow.** The three of us shared the code through Git and GitHub.

## Outcome

A working Laravel app built on a database designed by another team. Most of the work was learning to fit an existing database instead of designing our own.
