---
title: "Differentiable Search Index for Information Retrieval"
date: 2024-06-12T11:10:36+08:00
draft: false
language: en
featured_image: ../assets/images/featured/dsi_project_cover.jpeg
summary: Custom implementation of a Differentiable Search Index architecture, experimenting with different solutions.
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, odio nec venenatis lacinia, lacus lectus varius nisi, in tristique mi purus ut libero. Vestibulum vel convallis felis. Ut finibus lorem vestibulum lobortis rhoncus.
author: Ludovico Comito
authorimage: ../assets/images/global/author.webp
categories: Portfolio
tags: [Deep Learning, NLP, LLM, IR]
math: true
---

# **Abstract**
 
In the modern landscape of the approaches to Information Retrieval, one of the most interesting solutions was published in [1], where a single encoder-decoder architecture was trained in a multitask fashion to perform both indexing and retrieval of documents at the same time. The core idea is to map string queries directly to relevant docids, simplifying the retrieval process. With this project, we explore solutions based on the same DSI concept, but exploring new architectures and new training approaches to further deepen our understanding of the original paper and trying to clarify and uncover its strengths and weaknesses.

You can find the complete implementation of this project in the following [github repo](https://github.com/ludocomito/DSI-Project/tree/main).

# **Introduction**
The original DSI model is based on an encoder-decoder architecture, specifically a pre-trained T5 model. In the DSI approach, the model is trained to perform both indexing and retrieval at the same time in a multi-task fashion. We chose as our baseline the Okapi BM25 scores and as the base model to work with the T5, as specified in the aforementioned paper. From there we proceeded to experiment with the model’s architecture. More specifically we implemented the use of a model belonging to a recently presented class of models (Lamini) pretrained using knowledge distillation. Finally, we repeated the experiment again but with a custom encoder-decoder architecture. Furthermore we tried to tinker with various pre-processing strategies, first leveraging the multi-task approach as suggested by the referenced paper and, after that, following our own intuition applying data augmentation through query generation taking inspiration from [Tang et al](https://arxiv.org/abs/2305.15115).


# **Model Architecture**
The chosen model to perform our experiments is the T5 encoder-decoder architecture. The first experiment is run on the base T5 model in order to have a viable comparison between the methodology used in the original paper and ours. The first iteration of our methodology is to implement the Lamini-Flan-T5 model. Its main features are the use of both the Flan T5 variant and the Lamini method. Flan T5 utilizes the same encoder-decoder architecture as T5, but has been trained on a larger instruction finetuning dataset.

On the other hand the Lamini method is based on knowledge distillation, which means training a smaller model (called student) leveraging the knowledge of a bigger model (the teacher). In this case the teacher is gpt-turbo-3.5 and the student is Flan T5. The teacher is used to produce a synthetic output that the student will learn on.

The second iteration of our methodology is to perform the training on a custom encoder-decoder architecture. The choice for the encoder fell on bert-based-uncased model, this is because it is one of the most commonly recognised starting points of any LLM centered research worth its salt. The choice for the decoder fell instead on gpt-2 since it is a decoder only model that has shown incredibly promising results.
In the following section 4 we will go in depth on how we tested the various architectures and how we devised the strategy for the experiments that we conducted, including the additional preprocessing and the test conducted.

# **Results**
As expected, the BM-25 baseline scored very poor results, reaching only 0.003% MAP and 0.002% for Recall@10. Our hypothesis is that the model is just able to capture statistical correlations between words, but not the full semantics of the documents and their relationship with their semantic ids.

The T5-base model scored 2.53% in MAP and 1.92% in Recall@10, and was outperformed by the Lamini Flan T5 in both metrics while utilizing the same hyperparameters (batch size 32 and learning rate 0.0005). As the Lamini Flan T5 model demonstrated better performances, we decided to conduct hyperparameter tuning on it, by experimenting with different batch sizes and learning rates. The best result was achieved with batch size 64 and learning rate 0.0005, achieving 3.34% MAP and 2.62% Recall@10.

Our hypothesis is that thanks to its extensive pre-training and the Lamini knowledge distillation techniques, the Lamini Flan T5 model has higher capabilities at dealing with multi-task learning tasks. Although performing the overall highest validation MAP and Recall@10 during training, the model trained on the Query Generation augmented dataset scored the same performances as the Lamini T5 model.

Finally, the worst performing model was the BERT-GPT2 custom encoder-decoder, which only scored 0.0019% MAP and 0.0016% Recall@10. In our opinion, this is due to the incompatibility between the representation of both encoder and decoder and could improve by incrementing the number of training epochs.

| Model                | Batch Size | Learning Rate | Mean Average Precision | Recall@10 |
|----------------------|------------|---------------|------------------------|-----------|
| BM-25 baseline       | 32         | 0.0005        | 0.003%                 | 0.002%    |
| T5 Base              | 32         | 0.0005        | 2.53%                  | 1.92%     |
| **Lamini Flan T5**       | 32         | 0.0005        | **3.31%**                  | **2.62%**     |
| Lamini Flan T5       | 32         | 0.0001        | 1.81%                  | 1.44%     |
| Lamini Flan T5       | 64         | 0.0005        | 3.34%                  | 2.62%     |
| Lamini Flan T5 QG    | 32         | 0.0005        | 3.31%                  | 2.61%     |
| BERT-GPT2 custom     | 32         | 0.0005        | 0.0019%                | 0.0016%   |




