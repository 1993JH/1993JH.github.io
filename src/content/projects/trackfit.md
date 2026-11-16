---
title: TrackFit — strength training tracker
summary: Web app for logging gym workouts set by set and seeing how strength changes with meals and the menstrual cycle.
year: 2026
role: Design and development
stack: [laravel, vue 3, inertia, tailwind, sqlite / mysql]
featured: true
order: 1
---

## Problem

Most workout apps track weights and reps, but they don't tell you why some days feel stronger than others. I wanted a tracker that also records things that affect performance: whether you trained before or after eating and, for people who choose to track it, where you are in your menstrual cycle.

## What it does

- **Log workouts set by set:** weight, reps and rest time, with a "last time" column so you know what to beat.
- **Search 876 exercises** as you type, from a public-domain exercise library with photos, or add your own.
- **Routines** you can save and start again with your last weights filled in.
- **A dashboard** with your training streak, personal records and recent activity.
- **Progress charts** that compare your top sets before and after meals, your weekly volume, and strength across cycle phases.
- **Settings** for pounds or kilograms, default rest time, cycle tracking, and a CSV export of all your data.

## Key decisions

- **Store data one way, show it the user's way.** Weights are always saved in pounds and converted for people who choose kilograms, so switching units never changes past workouts.
- **Calculate, don't store.** Personal records, progress and cycle phases are worked out from the logged sets each time instead of saved separately, so they're always correct after you edit a workout.
- **Health data stays private.** Cycle tracking is off by default, only visible to the user, and never attached to a workout record.
- **Ownership checks** mean users can only view, edit or delete their own workouts.
- **Tests** cover the core calculations and the main pages.

## Outcome

Every screen from the original wireframes is built and working, with eight weeks of sample data for demos. Next on the list: a rest timer, a body-weight log and estimated one-rep max.
