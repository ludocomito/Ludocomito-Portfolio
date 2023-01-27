---
title: "Banger Detector"
date: 2023-01-27T11:10:36+08:00
draft: false
language: en
featured_image: ../assets/images/featured/banger_detector_cover.png
summary: Banger Detector is an Open-Source project that aims to create a service to forecast whether a new song could become popular by assigning it a rating.
description: Forecasting popularity
author: Ludovico Comito
authorimage: ../assets/images/global/author.webp
categories: Collaborations
tags: [Machine Learning, Audio Processing]
---
# Banger Detector

## The project 🔎

Banger Detector is an Open-Source project that aims to create a service to forecast whether a new song could become popular by rating it.

The idea was born from this [dataset I found on kaggle](https://www.kaggle.com/datasets/ayushnitb/song-features-dataset-regressing-popularity). This dataset was retrieved by querying Spotify developer APIs, and contains many metrics about songs like key, energy, danceability etc. In particular the interesing feature is the popularity score, which suits well to be our target feature.

Starting from this foundations, we can train a model aimed at forecasting popularity. We could further develop this project by creating a front-end interface and publish it as a fully featured application.

If you want to collaborate I created a GitHub repository that you can find [here](https://github.com/ludocomito/Banger-Detector). You can contact me directly via email (ludocomito@gmail.com) or via [LinkedIn](https://www.linkedin.com/in/ludovico-comito/).

## Problems to address 🥊

As simple as it might seem, this project poses some interesting challenges. Here are some issues to address:

- Choosing the proper model
- Choosing the proper features: the dataset has many features, but some of them are extremely uncorrelated. We should find the core features to train our model on.
- Analyzing new songs: this might be the trickiest thing. We should find the proper tools to extract the features we choose from new songs. There are quite a few python libraries that do it, but it really depends on which analysis we will need.
- Create a front-end interface to interact with our model. Here we could use tools like Gradio or Streamlit, but we might think to deploy it using other stacks.