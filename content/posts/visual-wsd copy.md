---
title: "Homonymy disambiguation using DeBERTa"
date: 2023-07-20T11:10:36+08:00
draft: false
language: en
featured_image: ../assets/images/featured/homonimy_cover.png
summary: A DeBERTa based architecture for the task of Homonymy disambiguation.
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, odio nec venenatis lacinia, lacus lectus varius nisi, in tristique mi purus ut libero. Vestibulum vel convallis felis. Ut finibus lorem vestibulum lobortis rhoncus.
author: Ludovico Comito
authorimage: ../assets/images/global/author.webp
categories: Portfolio
tags: [Deep Learning, NLP]
math: true
---

# **Introduction**

In the field of Natural Language Processing, Word Sense Disambiguation (WSD) is a challenging task with the objective of assigning the correct meaning to ambiguous target words, given their context. Homonymy disambiguation is a specific instance of this task, where related senses are clustered together, leading to a form of Coarse-Grained WSD. In this context, two words are homonyms if they share the same lexical form but have unrelated meanings. In the field of WSD, BERT-based models such as GlossBERT have been extensively used, demonstrating the capability to produce contextualized embeddings that can capture word senses. The work presented describes a series of experiments involving BERT-based architectures, detailing the process of fine-tuning and the implementation choices.

You can find the complete implementation of this project in the following [GitHub repository](https://github.com/ludocomito/Homonymy-Disambiguation-NLP?tab=readme-ov-file).

## **Proposed Architecture**

The proposed architecture consists of two main modules: DeBERTa, used to extract word embeddings for each token, and a classifier head, consisting of a Multi-Layer Perceptron, which takes the Transformer’s embeddings as input and outputs the logits for each possible class. Additionally, the model implements some operations both at the embeddings level and at the logits level, which will be highlighted in the following paragraphs.

![General view](https://github.com/ludocomito/Homonymy-Disambiguation-NLP/raw/main/image_assets/general_view.png)

**Averaging Hidden States**

As different layers of BERT are expected to encode information at different levels, the proposed method considers the representation obtained by averaging the last four hidden states of BERT to obtain a more informative representation.

**Sub-token Pooling**

During tokenization, certain words can be split by BERT’s tokenizer into sub-tokens. After being fed to the transformer, the resulting sub-token embeddings for each word are averaged to obtain a single representation for the entire word. This operation is performed for each word.

![Token handling](https://github.com/ludocomito/Homonymy-Disambiguation-NLP/raw/main/image_assets/token_handling.png)

**Logits Mask**

In this kind of task, the classifier could potentially deal with thousands of possible senses. To address this problem, the candidate senses for target words present in the datasets are used to create a logits mask in the form of a list of zeros and ones. Specifically, ones are assigned to all the candidate senses for each target word, while all the others correspond to zero. This constrains the model to focus on the actual candidates.

![Logits mask](https://github.com/ludocomito/Homonymy-Disambiguation-NLP/raw/main/image_assets/logits_mask.png)
