---
layout: post
title: Agile development
post_author: Nigel Robb
---
In another [post]({{ site.url }}/2014/12/23/human-centred-design/), I discussed the human-centred design process being used in the TASTER project. The idea is simple: we use the preferences and needs of the people who'll be playing our game to dictate what the game will actually be like. As part of this process, we'll have playtesting sessions in which kids with PWS try out a prototype of the game. Now it's highly unlikely that every kid will absolutely love the first prototype I produce. In a sense, I expect the prototypes to (partially) fail. Actually, *I want them to fail* (again, only partially!), because that's the quickest way to learn what I need to change in the next phase of development.

What I'm doing, then, is accepting that design changes will occur even after I've started to program the game. And this, in a nutshell, is what makes my approach to software development *agile*.

[Agile software development](http://www.agilemanifesto.org/) is a group of approaches to software development that share some common features. Primarily, agile methods aim to produce working software quickly (like the prototypes I mentioned above), to maximise customer collaboration, and to *embrace changes to the design* of the software, even after development is underway.

I don't subscribe to one particular style of agile development, but I tend to use quite a few techniques from the agile methodology known as [Extreme Programming (XP)](http://xprogramming.com/what-is-extreme-programming/). These are:

1. Simple, continuous design. I think of myself as designing right through the development process. Even at the final stages, I'm prepared to make changes to the design of the game.
2. Test-driven development (TDD). A computer program is usually made up of a large number of small, self-contained modules or units. For each of these units, you can write a test (called a unit test) to check that that module works. TDD involves writing these tests *first*, before you've written the module being tested. Initially, the test will obviously fail (because the module being tested doesn't exist). The programmer's job is then to write just enough code to make the test pass.
3. Continuous integration. In large software companies, this can be quite a complex process, but with a one-person team, it's really simple. For me, continuous integration just means that every time I add something new, I compile the program and check that it still works.
4. Regular, small releases. Rather than spend a very long time producing a feature-rich program (and then possibly finding out that your customers don't like it), it's better to release a feature-lean program earlier. Again, this is about involving the users of your software in the developmemt. The best way to find out what's wrong with your game is to release it and have the players tell you.

I've heard some software developers say that it's difficult to integrate the design process with the development process in the way I'm describing. Personally, I disagree. I think that it's difficult to integrate *designers* and *developers*. But since I'm both the sole designer and sole developer on the TASTER project, this obviously isn't an issue.
