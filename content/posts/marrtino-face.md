---
title: "MARRtino face mask classifier"
date: 2022-07-25T11:10:36+08:00
draft: false
language: en
featured_image: ../assets/images/featured/face_mask.png
summary: The goal of this project is training a Neural Network in order to tell apart people that wear a face mask correctly from the ones that either don’t have masks on or that are wearing it incorrectily.
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, odio nec venenatis lacinia, lacus lectus varius nisi, in tristique mi purus ut libero. Vestibulum vel convallis felis. Ut finibus lorem vestibulum lobortis rhoncus.
author: Ludovico Comito
authorimage: ../assets/images/global/author.webp
categories: Portfolio
tags: [NN,Computer Vision]
math: true
---

# MARRtino face mask classifier 😷

## About the project
Given an input dataset consisting in a cartesian product of m attributes $X=A_1 \times A_2\times...\times A_m$, and a set of classes $C$, we want to find a function such that $f:X\rarr C$.

$$
Gain(S,A)=Entropy(S)-\sum_{v\in Values(A)}\frac{|S_v|}{|S|}Entropy(S_v)
$$


The goal of this project is training a Neural Network in order to tell apart people that wear a face mask correctly from the ones that either don’t have masks on or that are wearing it incorrectily.

The main components of this project are the jupyter notebook files, which contain the [training phase](https://github.com/ludocomito/marrtino-face-detection#:~:text=MARRtino_Face_Detection_Use_Model.ipynb) of the model, and the [usage](https://github.com/ludocomito/marrtino-face-detection/blob/main/MARRtino_Face_Detection_Use_Model.ipynb) and testing of the trained model. 

You can find the code and the considerations about this project in the following [GitHub repository](https://github.com/ludocomito/marrtino-face-detection).

## Considerations about the dataset  💽

The dataset used for training my model can be found on Kaggle at [this page](https://www.kaggle.com/datasets/vijaykumar1799/face-mask-detection). It contains images belonging to the following classes:

- mask_weared_incorrect
- with_mask
- without_mask

It contains a total of 8982 photos, equally distributed in 2994 elements per folder.

This makes the dataset very balanced with all the classes represented with the same amount of samples. However, the presence of a class representing people with mask weared incorrectly makes the model less “rigid”, while introducing some noise due to possible ambiguous poses.

The following is a sample of 64 images plotted from the dataset:

![Plotted using MatplotlLib](https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gOsWK_FyJ5NOFDO46rUnKyoF10iljNVXlCd7YbANTl7xvsIZceoba8H0VtlmEj2im0FrsEpiBZmTMEdgKmzp07Hzkvc=w1260-h1035)

Plotted using MatplotlLib

## Choosing the model to be trained  🧠

The model chosen for this task of image classification is ResNet:

The Residual Network, or ResNet for short, is a model that makes use of the residual module.There are several variants of different sizes, including Resnet18, Resnet34, Resnet50, Resnet101, and Resnet152, all of which are available from torchvision models. **Here Resnet18 model is used.**

When deeper networks are able to start converging, degradation problem occurs. As the network depth increases, the accuracy gets saturated and then degrades rapidly. These degradation is not caused by overfitting, and adding more layers to a suitably deep model leads to higher training error. Degradation indicates **not** all systems are similarly easy to optimize.

Deep residual learning framework address the degradation problem. Instead of hoping each few stacked layers directly fit a desired underlying mapping, these layers are explicitly made to fit a residual mapping.

![resnet.png](https://lh3.googleusercontent.com/fife/AMPSemfx9fS8G-UwJUq1R7YDJeAkKJ_AOVcHl_nPzSqqX63lXNGSU0Se0525dDMeOZw2pBDGoLdX4pHFQTDZJRO0CUmMpuJ1xC3lOHP18t0lJ5J1Ucq_kTQAxsfkh2Icnq9BYPDKpJdhT-WCZ7ovXIl9ahu5H2gcImNl6DynZMQMRN5gKNUO51rgnbLiicbbZkKyW4R9QfE7N1Vi-atMeetRakMR1Qg2WGQVgjn8oMcqeZx-xzihu_xb77lXoXjlQOwjYLS0wPP_Swo9c7zInLY1pXwnu4nOLcmQyX9IRICvlnLPsjjJiZcEqJ3ksW5P1RqrizvysdFBSN102rEYLoELKgSAJeUM1gQdnOEr-LCJMRlRlA7zQJdbzgPzciaChcwO3YHpZgcnOiC-31tTMrhgAzyXU_vnKpOZeDdhsshRcvAqEo-ukhPu8vkeCegECTjpIXSw2y2Qe-j8cy4Xzp0ieOG_v06IDnySwhZ65NPSqzBL1XgrjE8sMXpfoxtptmfpnwrYHa8xTx9ZG2-RvD_3TBNMlxUgP6oOyMlZAk5m97jE1Nrf6--_gheDqXJfFD5lSV5NlEq3BuaPni8lp3VMdC1jZ-TlY4dcKdalN8VBF8We6zb2_UqH09mVmYwwHWIIxk5ls5V-qUPvb-3J4qq-xr4ZW9flXCcI5EXXZsxm48WXqH_c9LshVfPhjVZYIURNYi5sJbbF4uaMuhq-3g1sIap4E9iq10HwIO1QFeFuzD9docQg8ie45rD6lwSOMkpEbsIWSEfC3Q-jgYQ-tFkLgWoe471KX-JDgmRnRu6nyiPg4WMb-RzSPuTY8vl09LR9L3b042E3uyfgobC9Ui9AKWOZtHZxq05jFvqWe3MdZWhfbLL-kTF6YCuirfdOVIXDkYVm5HLgUL1VLmX6Elnt_WcPrsLFebpQh7SXOA203v2Hkh8Lxei0cqDJryQWThQLiT5M6VYEqIyAlkL7qDGd3FXRX8OvhNO0jEjgIPpWONLiHfqAra_sMm6y6nSBYqUxgFATwkgkXZruvE9Tbn-6dL00-jpI938bSn4uYNvWv2AHPWNdrNMDAjf5qdeH5IQhF4nFFxRnVMO3_fDBEHKVgOZS-us_aDM12Q54rvuz1RJAh5y0NlIfRco1nfD2VIdlPgcgOlxEbFeQ5L0m2Cm4KKnE0ZoK7Mnd4DTVrcV61wVJoeH_MZt_D_AKTwMOgWnEzXiKZWO_ZPLCJrflZ0rl6t3lPwX7-p6KaMVXQN-bHClx6IUSqrDP2jd_r1DqxFElq2k3aRMOEq4-F9SKalt9TzY7qick4IATkoLx8i0ttxfekb5hulCDIXhS8Gyh3U2kCy4Zljwbx5Ht6WRcYH99g8cu6mzIHQqorQsN5CeKTmxWPUqto4ZktXvi5-oywpm_-uftxh8QdEN_OpelJslteFRlxIwdx8wJ7WO6lAZFI7f6ayncVVsB-wPqOTQc6sybNmeEEPrmanS49SVUli6NnttHZWUtwj-nTVtMSKxUpTE6eefE43Lh5tt64-uYh6uPMm05BiLcu6NbYypUbSA2f4EyBXC2dg_JhyMSYIqPUp9PwUQJ2-uE2Bya_a5L3to5jsK1Obczmq7NeyOdcXVVNOuvtuJ2q9JRzh_lEjeaLv1rJR1nl0qJNwbLIJG8GSVlNJgO8lkrXlgOiqhr-i1OPoSCSR12yEgKOw6KgBwy5w=w1260-h1035)

## Training the model with PyTorch 🔥

The framework used to train the model is PyTorch. It takes care of image preprocessing and model training, and my implementation can be found in the [‘****face-mask-detection-marrtino.ipynb’****](https://github.com/ludocomito/marrtino-face-detection/blob/main/face-mask-detection-marrtino.ipynb) notebook that you can find inside the repository.

During my test I experimented training both a ResNet model that came with its weights pre-trained on the ImageNet dataset and a non pre-trained model based only on the ResNet architecture.

Basically I discovered by accident the concept of transfer learning. In fact the usage of a model which has been pre-trained to a similar problem leads to visibly better result, that I will show you in the next paragraph.

## Pre-trained vs plain ResNet18 results  🥊

Both the pre-trained and not pre-trained ResNet18 models showed good results, reaching peaks of accuracy of more than 0.96 in both cases. Moreover the loss in both the Training and Validation phases has decreased almost continously.

That said we can still appreciate a substantial difference when observing the results of the two networks. 

The pre-trained one starts with both a very low loss and very high accuracy, and reaches it’s cap already in less than 5 epochs. 

The not pre-trained one instead follows a much more organic evolution, starting with a much higher loss and lesser accuracy, and reaching it’s cap between the 5th and the 10th epoch.

![Schermata 2022-07-25 alle 00.09.27.png](https://lh3.googleusercontent.com/fife/AMPSemebeTprVRTAMliTr8IDYN-LoKJQPLF0GgBr_22AlGn7RUo0pZeD1GWJmUIl5YDJo05km6Dp1yaDT8FLXqElxCZbqe_y75Ebj9Gx5dIHL2iCwHwZwa7ZNsJhfIUIZrR54yzK5HyA7oPCV9sKMnFJPl4G9nhNhhLHTucZdRCYbIedYnFbZFRr5n6GOoAa9n2WneAdTovL493-lFhO_bYjalnkiFWWPvSbC4q-52YYf4JreSBECu0zAC7z1mtzoOx_37gQNK1dln_Bo0fOocD4YpF9gTscfz4LPjewzwrd9W-Nek-3c8mFcX0jiXykfXqq8zVa6m9S6Sy_VWWSiEatdsoDEc4tl6Nnb7R_xK-xzEaPCi237tF5Ah0G7PrSSC-9qyzBqR6z6P_sbtGJA3yE4D8TMTXS68y7pJT5bqmTD8kbAjKGo7DS7AQrfSi7hK4o7O122EhPs_QgsvJVPWqckJ6eG37H_RRTIbb0u48EjCN9W87KxawWeaBf8clF77iUcGc_i2QPCvaK99K1UNK62aSz91PdZ3UCEaLduJVnVbxxglgss-tVwcLbtnMNdxlUwKSgeyEWvzfXytRmGZLT7BVjAySKdcbGJrsMWYjHh_jFt-PREu1fywEmB3HXqP8hWbyUcHXIwYXw0B3Zp1hSDiCJVNNufiLtQVvQYuIbsYAOLsYJ6Xy5w6CfJN_ayXFWwW89N7m6cba_x3G7VOfClKBx_ByRM_lZgGCU6xQIBx-Xbbfp28qWP6TqA6QN4vmed5ql1aR0ChCmQzSefiBAFG6eaEcIzHMOkUx_TF911zmNmfyVFYkJlkrXouUiZ6Y7s-AB6uPefJ2NRBkDlFKwu8eXMtfNOjK5ThLW8Z6CRHzQ5gn_4xyTG48RmL6o5E3M82xsdN0bEZgqw9wAOqap1b6Moye6DEC1LOWMkRUjsf231T8EiTQgNbvwZuIabeprOzhzeAIT7W1ho373vasgIyiYtF-sbpmPYDhUkowIAnBdQhDmHecQ7ykl0wT0uRghLtjMzm0xMggrw8oFeqmNld4YF0lY1hV1rfhfGHPd-b5XveKwBZ0IpSzVFV0UH_s5a1wKOk8Njo131-bm7zhjQlsxFnJgVwXjt_phVGlnPyyV67Y25wmLjkNLm7sfInBT17DYAY0UFfwwxouIrzm33CHiif_DYHaA_ku1xcPqU5AFTxE8AS44ZmCTxiCiWb0g_CdfmWxqzDhMcBF1W7hs4hJSjct4HyrEWPaAOe3O6n92fusVnfDqgrjXlZ8D8iY776-O_hOMh-bQzhxRaEbpin4AlbXRNvjkqApXB3UWaXyJsuIuyYAgBcXF6r7W0JqubgxraH8yVZAYwadEqMCPm4iWH97K6jXRjWxX8L0gy9PfrEcvW4yYV92fr31CDMDWy54MhLo-EqAudUjyjNX0rJkMeJz_SSpJq2ZC8nytk2JHTPwJN2kM11NuY-9_2PPSfe-u8RDxrFK1lNa7qfD0i5pxHVnxg4RCVXq08na7X2qaPHhNT7GwHNv0_Kg5JRvWkZeIs2DfhMH8qwrSo5z_3Xb46-fWLLNi7pTbiH0eTaBW2_-efBQvG3hgRoCldpE9ghDJ1A7wZzMaZKutglbMMa1ydXyzA9dPTGDlizMbS2W9cLb4TORn-32w5gFsBkwVpiuvj76kciKT53BJu0GX6pimevW-AERlDdpr8DCDeQ=w1260-h1035)

The plots show here have been created by logging the training data to the Weights&Biases platform. I included better documentation inside the [training reports](https://github.com/ludocomito/marrtino-face-detection/tree/main/training%20reports) folder, that you can find inside this repository.

## Checking the model’s performance  🔍

In order to measure the performance of the obtained model (in this case the not pre-trained one) I computed a confusion matrix testing the predictions on the whole dataset. As you can see from the image below, the results are well distributed on the main diagonal, showing that most of the model predictions are actually correct, with only a small percentage (approx 1%) of incorrect guesses:

![Plotted using sklearn, pandas and seaborn ](https://lh3.googleusercontent.com/fife/AMPSemegNIMHYKKA1SwDJBFxBmk9TPyOwvjeVkPLFSsBOcNjTe5TZKGQvZA3ryFT49uRetXLq8zMpiWkL0vRHBZ82eRgD_2GQn_lr-e3Iqb1oIuppY2aKXRbVx4X2QJrU90CZpMvK0fn2F8AtKLpufby-g4ZGEHSlrkOlq0m-amN2j-u8XUIaTDueWovV_G3_kQVKt4NWW-8oURkdvQlO9UCbeZ3e5nHA_5RnoBJDE56Kg1ytuIaZ20jk733Y_sAj-d4p_NFu2SZ5frENs95qlat4philcBgGAb2EBMdJehno8cFOEavqS5ATplS-KZesAQd-o2omG0J4kmEEuDv0O3TUNVtSVEluRX0LhPPcjYJo2LhQhQ9dfuzqVdoST1w0GpsjqA5Wz_EHhyHcyQ1GW4dVlkDW9F0oMQ1GpB_VVTxuD4SXYA8U2Ejvrd0cu28xx4ptYv4lRmA2dvshG2jN4K-LBdrWfPjYQd7F0saI_QR1ywx-e2mwe08DJEWhXGcZrbs2-8mklQX8nxMXFV_8a3URd7VapddSLfrW6njfhjEnLVq9LSsF0LBR-V10799-CwIDW1OZ_ZSBU3dFusOSKKTH_2X2Z_IfazujBXk12Rgd_JhTkEN2kFRf8gQhbM9lON66GDmU_ZPYyb2Umjwm-BV926uYYzhsz7h6Sv-cdemYdGcCVWYnzEnX_qq0w_Q2nmItnz2kwl9PgHC1E7BVEP2jdzSJnzc4XdFT4rOjeBpN030EXJWfyYfUoJJ2aw9g8A6rw-_dkx-0v9j-08e1jliLu3O5_gTIKXxlFBhvacJn33a6ou5h52OehPYBbcXvkkP0QHTcxRtjZPfCzbOdimssgRpmD6iGISd6RZUYeQtXGL-QAWnX8O0ggvf9XN7-jW-mo-7pkaVYX72CJ7hmCqHV7ANSetPEvFvgIdx52IiFxuyPTtPIajirFLUUq7s2dazEELqVykZ44Z1Q3-KIMnUcoWE_ve2duLD56xz5_fJkxyxGkMcB3VWMEmXd6GiCtbgCQO9LaeBsiDNQR89ZfuHFcQR979DRhKPZrh55y9_SFbEresV9jvQa7MFnsOD-n7URFTqImGB-ORum3gHofmcvxhbu5OG2cecVyC487OuSvCpgDnrOTk3g_b-H7axCqJk0qB3Jcsdsu-8Sat0lVzsFof8pkls7MOs40dVf-keODkarvfz-uP2D6GEibbYlLg3Zql0QhnSOvdpIS4J6qapnAcRCi8GS1RwOcyV5_qXEJfSxxEb-7skES4KGxxJUJgICLjPntRTbxjyurdAFLk8aWpkfbQsPDyNUZyAo5EgryrJj_-7NIROMo8oi-Eh9JA6S_SkuzIZV-e_yQhhVBYoWkLTKSDUNj_X4GDeNZa25_XQO4OVAwY7mTmXWdrWu51CflukcQqGtdVFw5XR7U5TGVUPfROv_RU7LMq9QdHdwmES4tQHbllxkl8NwG3XvZm4oWCo3uEXdkq82j881LLcghZBby35XZ5PTTWqWBiVbtHU30dSctM8wW0tl6xwctjFpIV38QgGBk7ImC4QXhH9uFNnhaIdFpKlnTY76sOoEBPdSk46gXqwPaIJ-0GOg5itG1TB7xML6NFHFgBEbumZfSVIue-_IRu1wiT4-_GQFDs2ykT7lW-yqm6qqnjh4cUgPmQM9XEZFJy4SJ7MpBKKF3UxyMqIPo_lbL126YwbTA=w1260-h693)

Plotted using sklearn, pandas and seaborn