---
layout: post
title: Detecting players' emotions
post_author: Nigel Robb
---
Recently, I’ve been looking into a variety of ways that we can collect data about a person while they are playing a video game. Of course, the idea of saving player data has been around (almost) as long as video games themselves – [Space Invaders](https://en.wikipedia.org/wiki/Space_Invaders) (1978) was perhaps the first major game that saved a list of high scores, and modern games save an enormous amount of data about players.

Because TASTER is a cognitive training game, we’re interested in data that can tell us how engaged and immersed players are as they play it. This is because [research has suggested]( http://www.ncbi.nlm.nih.gov/pubmed/19140641) that by increasing engagement and immersion, we can increase the effect of the training. At the moment, we’re planning to record things like heart rate and video of players’ facial expressions as they play the game.

This data will be extremely useful during the research and development phase, as it will help us refine the game and give an early indication of how effective it might be in terms of cognitive training. But both these techniques aren’t very practical. This is either because of the equipment required (e.g. heart monitors and a separate video camera) or, if we use the camera built into the tablet, there are issues with sending and storing large video files. 

So I’m continually on the lookout for other ways to find out about players’ emotions during gameplay. One interesting possibility is explored in [this paper]( http://dl.acm.org/citation.cfm?id=2395138), which demonstrates how analysis of the touch gestures people make as they play a video game can be used to determine their emotional state.

The researchers had participants play a game (a version of [Fruit Ninja](https://en.wikipedia.org/wiki/Fruit_Ninja)) on a touchscreen device, while recording things like pressure and stroke length as they touched the screen. Players also reported their emotional state at various points during gameplay. The researchers were then able to use machine learning algorithms to distinguish between four emotional states: excited, relaxed, frustrated and bored. This approach is promising because it requires no special equipment (like a heart monitor) to be paired with the game, but also because analysing the gestures does not require a large amount of memory or processor power, which makes it easy to implement on mobile devices.
