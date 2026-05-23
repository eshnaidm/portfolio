---
title: "Bunker — Social Survival Party Game"
description: "Multiplayer Android party game where players debate, vote, and eliminate to decide who survives in a bunker after a global catastrophe."
category: "development"
tags: ["Android", "Kotlin", "Firebase", "Jetpack Compose"]
date: "2026-05-22"
featured: true
order: 1
---

# Bunker — Social Survival Party Game

> Built with AI-assisted development using Claude Code

## Overview

A multiplayer Android party game where players debate, vote, and eliminate to decide who survives in a bunker after a global catastrophe. Players are assigned random characters with unique traits, professions, and skills — they must argue why they deserve a spot in the bunker while voting others out.

## Tech Stack

- **Kotlin + Jetpack Compose** — Modern declarative Android UI
- **Firebase Auth** — Google Sign-In + Email/Password authentication
- **Firebase Realtime Database** — Real-time game state synchronization across players
- **Hilt** — Dependency injection
- **Clean Architecture** — Separated data / domain / presentation layers

## Architecture

The app follows Clean Architecture with three distinct layers:

| Layer | Responsibility |
|-------|---------------|
| **Presentation** | Jetpack Compose UI, ViewModels, navigation |
| **Domain** | Use cases, business logic, repository interfaces |
| **Data** | Firebase implementations, data models, mappers |

## Key Features

- **Real-time multiplayer** — Players join lobbies and play together in real-time via Firebase
- **Character generation** — Random assignment of professions, traits, health conditions, hobbies, and phobias
- **Voting system** — Democratic elimination rounds with debate phases
- **Game rooms** — Create/join rooms with room codes
- **Player profiles** — Track game history and stats

## Development Approach

This project was built using AI-assisted development with Claude Code, demonstrating the ability to architect and implement a complex mobile application with real-time multiplayer features. The 104-file codebase was structured following Android best practices with Clean Architecture principles.
