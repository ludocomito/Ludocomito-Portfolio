---
title: MARRtino face classifier 😷
date: 2022-10-10
description: "This repository is part of the thesis project involving the robotic platform MARRtino developed by La Sapienza University of Rome. The goal of this project is making the robot navigate inside a mapped environment in order to make him take the package delivered by a postman."
image: https://images.unsplash.com/photo-1584309832315-39d404eecc77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZSUyMG1hc2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60
---

# About the repo  🗂 

This repository is part of the thesis project involving the robotic platform MARRtino developed by La Sapienza University of Rome. The goal of this project is making the robot navigate inside a mapped environment in order to make him take the package delivered by a postman.

Inside this repository lies the part of the project responsible for creating and training a neural network model capable of making MARRtino recognize faces (with and without masks on).

The main components of this repo are the jupyter notebook files, which contain the [training phase](https://github.com/ludocomito/marrtino-face-detection/blob/main/MARRtino_Face_Detection_Use_Model.ipynb) of the model, and the [usage](https://github.com/ludocomito/marrtino-face-detection/blob/main/MARRtino_Face_Detection_Use_Model.ipynb) and [testing](https://github.com/ludocomito/marrtino-face-detection/blob/main/face-mask-model-study.ipynb) of the trained model.

# Considerations about the dataset  💽

The dataset used for training my model can be found on Kaggle at [this page](https://www.kaggle.com/datasets/vijaykumar1799/face-mask-detection). It contains images belonging to the following classes:

- mask_weared_incorrect
- with_mask
- without_mask

It contains a total of 8982 photos, equally distributed in 2994 elements per folder.

This makes the dataset very balanced with all the classes represented with the same amount of samples. However, the presence of a class representing people with mask weared incorrectly makes the model less “rigid”, while introducing some noise due to possible ambiguous poses.

The following is a sample of 64 images plotted from the dataset:

![Plotted using MatplotlLib](/Schermata_2022-07-24_alle_22.53.59.png)

Plotted using MatplotlLib

# Choosing the model to be trained  🧠

The model chosen for this task of image classification is ResNet:

The Residual Network, or ResNet for short, is a model that makes use of the residual module.There are several variants of different sizes, including Resnet18, Resnet34, Resnet50, Resnet101, and Resnet152, all of which are available from torchvision models. **Here Resnet18 model is used.**

When deeper networks are able to start converging, degradation problem occurs. As the network depth increases, the accuracy gets saturated and then degrades rapidly. These degradation is not caused by overfitting, and adding more layers to a suitably deep model leads to higher training error. Degradation indicates **not** all systems are similarly easy to optimize.

Deep residual learning framework address the degradation problem. Instead of hoping each few stacked layers directly fit a desired underlying mapping, these layers are explicitly made to fit a residual mapping. 

![resnet.png](/resnet.png)

# Training the model with PyTorch 🔥

The framework used to train the model is PyTorch. It takes care of image preprocessing and model training, and my implementation can be found in the [‘****face-mask-detection-marrtino.ipynb’****](https://github.com/ludocomito/marrtino-face-detection/blob/main/face-mask-detection-marrtino.ipynb) notebook that you can find inside the repository.

During my test I experimented training both a ResNet model that came with its weights pre-trained on the ImageNet dataset and a non pre-trained model based only on the ResNet architecture.

Basically I discovered by accident the concept of transfer learning. In fact the usage of a model which has been pre-trained to a similar problem leads to visibly better result, that I will show you in the next paragraph.

# Pre-trained vs plain ResNet18 results  🥊

Both the pre-trained and not pre-trained ResNet18 models showed good results, reaching peaks of accuracy of more than 0.96 in both cases. Moreover the loss in both the Training and Validation phases has decreased almost continously.

That said we can still appreciate a substantial difference when observing the results of the two networks. 

The pre-trained one starts with both a very low loss and very high accuracy, and reaches it’s cap already in less than 5 epochs. 

The not pre-trained one instead follows a much more organic evolution, starting with a much higher loss and lesser accuracy, and reaching it’s cap between the 5th and the 10th epoch.

![Schermata 2022-07-25 alle 00.09.27.png](/Schermata_2022-07-25_alle_00.09.27.png)

The plots show here have been created by logging the training data to the Weights&Biases platform. I included better documentation inside the [training reports](https://github.com/ludocomito/marrtino-face-detection/tree/main/training%20reports) folder, that you can find inside this repository.

# Checking the model’s performance  🔍

In order to measure the performance of the obtained model (in this case the not pre-trained one) I computed a confusion matrix testing the predictions on the whole dataset. As you can see from the image below, the results are well distributed on the main diagonal, showing that most of the model predictions are actually correct, with only a small percentage (approx 1%) of incorrect guesses:

![Plotted using sklearn, pandas and seaborn ](/Schermata_2022-07-25_alle_17.11.44.png)

Plotted using sklearn, pandas and seaborn
