---
layout: posts
title: The Blue Dawn Website
datestring: Saturday, June 08, 2019
category: projects
project: thebluedawn
---

<a href="https://thebluedawn.org">
  <img src="/static/images/thebluedawn-banner.png" class="img-responsive" />
</a>

The Blue Dawn is a volunteer collective that connects Bahujan people with
cast-aware mental health therapists, and sometimes with supporters who will
sponsor sessions directly. I recently built them a WordPress site using
Roots's Bedrock and Timber/Twig templating.

This project started because a friend reached out asking if I'd speak with
a friend of a friend who was working on a new nonprofit and needed
a website. I connected with TBD's founder, Divya Kandukuri, and spoke about
their needs. They didn't neet much -- just a site with a CMS and some forms.
I got the sense that Divya was supremely competent and had picked a really
good intervention point: directly connecting people with resources that can
help them in their time of greatest need, raising awareness about one of 
the most vicious forms of oppression, and helping those affected build 
community resilience among those affected by it. 

How could I not get involved with such a great project! Besides, I was taking
some extra time off work anyway, and I am trying to find more ways to be _directly
useful_ to _smaller organisations_ rather than always (as I do at my day job) 
working with larger scale tech systems for more professionalised organisations.

_[Check out the repository here](https://github.com/michaelsnook/thebluedawn-wp-bedrock)_

We have been using Bedrock at work so I started there. The other WordPress 
site I maintain uses Sage, so I used that to deploy the first
draft of the site at [thebluedawn.org](https://thebluedawn.org). But the
design I wanted wasn't easy to execute even with Sage's relatively simple
(but still very WordPress-y), so I added the Timber plugin and started 
porting the theme into [Twig templates like this one](https://github.com/michaelsnook/thebluedawn-wp-bedrock/blob/master/web/app/themes/thebluedawn/resources/views/home.twig). 

<img src="/static/images/thebluedawn-jumbotron.png" class="img-responsive" />
<img src="/static/images/thebluedawn-counselors.png" class="img-responsive" />
<img src="/static/images/thebluedawn-whatwedo.png" class="img-responsive" />

The styles are BootStrap 4 with very little customisation. The WordPress
server is my own Digital Ocean box where I host another WP site. And Cloudflare
manages the DNS and provides its free Universal SSL. Since I already had the
server, the site is basically free to run for the foreseeable future (which
is important for a volunteer collective that doesn't have funding). 

Left to do:

* Replace the remaining Blade templates with Twig templates
* Different index pages for different post types, like Media/Press
* WP Admin control over the content on the Home page or in the Banner. Right now it's just an index of recent posts, with a lot of hard-coded content before it, which means it's only a good solution as long as I remain actively involved and available to make updates.
* Figure out how to better control plugins and mu-plugins.
* Establish some proper seed data to make the site easier for others to develop on.
