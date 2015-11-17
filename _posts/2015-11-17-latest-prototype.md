---
layout: post
title: The latest version of our prototype game
post_author: Nigel Robb
---
The latest version of our prototype cognitive training game has been released. It has lots more features, has been optimised for performance, and has fewer bugs. You can download it on Android devices from the Play Store, or play it in Chrome or Firefox here. To play in Chrome on iOS, use this link instead.

Some details about this latest version:

In a few previous posts, I explained how we were testing different control systems in our game. After lots of feedback from players, and observation of children playing the game, it seems very clear that simple touchscreen controls are by far the best, both in terms of how immersive the game is, and also in terms of simple usability (which is, in fact, related – becoming more immersed in a game is partly about being able to control the game without thinking too much about what you’re doing with your hands, so more usable controls are more likely to be associated with higher immersion).

Further analysis of action video games has given me lots of great ideas for features to include in our cognitive training game. The latest prototype has power-ups, particle effects, screen-shake effects, information displayed on screen, unexpected changes to the current task, and more besides. All these features are there for a specific reason: to recreate the kind of fast-paced, hectic, messy, complex learning environments that entertainment games (especially action games) provide, because I think that this messiness is important in creating learning that transfers beyond the training environment.

The latest version of the game also has music and more sound effects, which we found were important for increasing player arousal in an earlier playtest.

Another major change has been made behind the scenes. Previously, the game relied heavily on the State Design Pattern. This was ok, but I was experiencing some unusual bugs and had performance issues. I had been meaning to switch to an Entity-Component System (ECS) at some point, and I decided now was the time to do it. The system I’ve implemented isn’t perfect (software never is), but I’m finding the game is running a lot better and the unusual bugs have disappeared, so I think the switch has paid off.
