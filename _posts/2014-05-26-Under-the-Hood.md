---
layout: posts
title: Under the Hood
datestring: Monday, May 26, 2014
category: posts
---

I really like the stack I'm working with now, so this post is about how I built this site and why I chose to string things together the way I did. The site is pretty simple: just HTML and CSS, with help from Github Pages, Jekyll, Foundation, SCSS, and Disqus. 

###### GitHub Pages

My favorite way to start building a new site\-\-it\'s free, it\'s easy, and it\'s already integrated with my git repo. If you want to start putting HTML, javascript, and CSS up on the web, GitHub Pages is the quickest way to get started. This site is just [a GitHub repository](https://github.com/michaelsnook/michaelsnook), which gets served up as [a static HTML site](http://michaelsnook.github.io/michaelsnook). 

The site has no Apache config to worry about, no URLs.py, and no database, with all the hosting burden having been moved onto Github.  It\'s free and virtually uncrashable. You don\'t even have to log into a server to deploy changes\-\-just `git push` and let GitHub Pages do the rest. [If you\'re not familiar with Github Pages, check it out.](https://pages.github.com/)

###### Jekyll

[Jekyll](http://jekyllrb.com/) is a tool for creating static sites, which is integrated into GithHb Pages. It allows you to use [Liquid templates](http://liquidmarkup.org/), which are almost identical to the templates I\'m used to in Django and Flask, and the combination of Jekyll and GitHub Pages results in a pretty dreamy workflow: 

1. Serve the site locally with `jekyll serve --watch`. 
1. Work on the site. Refresh browser window to view changes.
1. When I\'m ready to publish, commit and `git push`.

The `--watch` flag tells Jekyll to redeploy the site each time it detects that you\'ve saved changes. GitHub pages takes care of the post-commit hook that tells Jekyll to recompile and redeploy the site whenever I push changes. And when a project grows to more than just HTML/CSS scaffolding and requires a real web application behind it, the familiar template format makes that a smooth transition.

###### Foundation

I really can\'t say enough good things about Foundation. I don\'t love to write CSS, or feel terribly good at it. I don\'t like worrying about whether my paddings have caused my paragraphs to overrun, or second-guessing the way I\'ve set up my `.panel` style. Foundation, like its big cousin Bootstrap, provides an easy-to-use grid and utility classes, with simple JavaScript-y add-ons like dropdown menus and modals.

My preference for Foundation isn\'t based on anything terribly scientific; I just find it easier to use. The markup just makes sense to me, and feels less repetitive. It leaves me needing to write less custom CSS, and I rarely if ever find myself writing code to fight against Foundation\'s defaults or the assumptions that went into the design of their grid. 

###### SCSS

Okay, I have to confess: I\'m really not writing any less CSS than I was before I was using SCSS. The fact is, I have been meaning to learn SCSS/SASS or LESS for a while, so I finally did it, thanks to [Foundation\'s incredibly simple instructions](http://foundation.zurb.com/docs/sass.HTML). 

This site\'s styles are so simple, I may decide to revert back to old-fashioned CSS. The current arrangement just adds a step to my workflow (`grunt build` at the command line every time I update the stylesheet). That said, I\'m excited to keep learning SCSS and to try out some of its more advanced features, so I\'ll probably put up with the extra step for now.

###### Disqus

What good is a blog without comments, right? And how are you going to handle comments on a static HTML website with no server or database? Well, that\'s where Disqus came in. It was really a breeze to install. Sign up for an account; they email you the embed code; paste and go. I think some people object to Disqus (some of them liked it before it was cool), and I\'m sure everyone finds it to be generic\-\-but it works! And it\'s free! And it took me all of five minutes to install!

If you have a problem with that, I\'d like you to read one of my favorite tweets of 2014:

<blockquote class="twitter-tweet" lang="en"><p>A cool blog post would be: we used a bunch of boring technology to solve a business problem and got to go home early and play with our kids.</p>&mdash; Candids Burgin&#39; (@moonpolysoft) <a href="https://twitter.com/moonpolysoft/statuses/451494961557434368">April 2, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

###### More To Do

This is definitely my favorite stack to build a website on, so far. As I build out the \"projects\" section, I may end up with project pages that really want to be more like \"apps\" than \"pages\", in which case I\'ll have to re-examine my priorities and the reasons that make this the ideal stack for me, for this site, for now. But for the time being, this is working just fine\-\-it\'s fast, it\'s free, and it\'s fun!

