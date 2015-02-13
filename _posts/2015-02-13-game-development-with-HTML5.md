---
layout: post
title: Game development with HTML5
post_author: Nigel Robb
---
I've chosen to develop the TASTER game using HTML5. HTML5 includes a new canvas element, which is a container for graphics and is perfect for games. I've chosen HTML5 for a few reasons:

1. HTML5 games are actually programmed in JavaScript, which is my favourite programming language, and the one I have most experience with.
2. Since webpages are also made from HTML5 and JavaScript, an HTML5 game can easily be hosted as a web app. This is great, because it means that people can play the game immediately in their web browser, without having to download any software.
3. A variety of platforms exist (e.g. CocoonJS) which can deploy HTML5 applications on mobile devices, meaning that an HTML5 game can easily be converted into an almost native application for IOS or Android.

Currently, I'm developing the game using the Phaser framework. A framework provides generic functions that will be used over and over again. This is particularly useful in game development, because all games share a common structure. Almost every game involves the following: drawing animated graphics on screen in a continual loop, playing music and sound effects, getting input from the player, and updating the state of the game world. So rather than every game developer having to start from scratch by programming these functions, why not make use of tried and tested frameworks that already do these things? This isn't cheating; it's good software engineering practice. Phaser, for example, has a team of contributors who are continually developing and testing these core functions, leaving game developers like me free to concentrate on what makes my own game unique: the graphics, sounds, gameplay, characters and so on; in a word, the design of the game. Since the TASTER project involves adapting the design of the game to suit the very specific needs of our players, this freedom to concentrate almost entirely on design extremely important.
