---
layout: post
title: Game development with HTML5
post_author: Nigel Robb
---
I've chosen to develop the TASTER game using HTML5. HTML5 includes a new canvas element, which is a container for graphics and is perfect for games. I've chosen HTML5 for a few reasons:

1. HTML5 games are actually programmed in JavaScript, which is the programming langauge I have most experience with (it's also my favourite).
2. Since webpages are also made from HTML5 and JavaScript, an HTML5 game can easily be hosted as a web app. This is great, because it means that people can play the game immediately in their web browser, without having to download any software.
3. A variety of platforms exist (e.g. [CocoonJS](https://www.ludei.com/cocoonjs/)) which can deploy HTML5 applications on mobile devices, meaning that an HTML5 game can easily be converted into an almost native application for iOS or Android.

Currently, I'm developing the game using the [Phaser](http://phaser.io/) framework. A framework provides generic functions that will be used over and over again. This is particularly useful in game development, because most games share a common structure. Almost every game involves the following:

1. Drawing animated graphics on screen.
2. Playing music and sound effects.
3. Getting input from the player.
4. Continually updating the state of the game world (in what's known as a game loop).

So rather than every game developer having to start from scratch by programming these functions, why not make use of tried and tested frameworks that already do these things? This isn't cheating; it's good software engineering practice. Phaser, for example, has a team of contributors who are continually developing and testing these core functions, leaving game developers like me free to concentrate on what makes my own game unique: the graphics, sounds, gameplay, characters and so on; in a word, the *design* of the game. Since the TASTER project involves adapting the design of the game to suit the very specific needs of our players, this freedom to concentrate almost entirely on design is extremely important.
