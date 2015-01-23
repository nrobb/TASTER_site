---
layout: post
title: Procedural generation and adaptive difficulty
post_author: Nigel Robb
---
When thinking about gameplay design, one important issue to consider is how difficult the game is. For the TASTER project, this is particularly important, for two reasons:

1. In order to maximise the training our game provides, players must be highly motivated to do the training (i.e. play the game). And the difficulty level of a game is a factor in whether or not people are motivated to play it. For example, I haven't spent much time playing either [Geometry Dash](http://youtu.be/o4YACF6Y8yQ) or [LEGO Juniors Quest](http://youtu.be/hfOmzYw95L8), the former because it's too difficult, and the latter because it's too easy.
2. Some research suggests that computerised cognitive training works best when the difficulty of the training is adapted to suit the individual requirements of the person doing the training. For example, [this article](http://www.ncbi.nlm.nih.gov/pubmed/20630350) by Torkel Klingberg refers to some studies on working memory training that found specific effects in adaptive, as opposed to non-adaptive training.

The problem for the game designer, then, is to produce a game that is exactly as difficult as it needs to be to challenge the player. This means that the difficulty of the game needs to vary as the game is played, with the difficulty level being set by the player's skill level.

This can be achieved by programming a system that generates some features of the gameplay on the fly - an artificial intelligence that controls the gameplay. This is known as procedural generation.

Fortunately, I have some experience with this, having created a level generator called [UrbGen](http://urbgen.com/). While I won't be using these kinds of 3D environments in our task-switching game, the idea - that some feature of the game can be generated during the game by a computer program - is the same.
