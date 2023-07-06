---
title: What not to name your Astro JSON data
date: 2023-06-27
tags:
  - web
---

I was having some trouble recently as I was playing with getting a little side project set up using Astro. I wanted to set up some basic site data in a JSON file, and then use that in some templates.

Having done this before in Eleventy, I was copying and modifying some files from previous work, but something kept going wrong.

```txt
Error: Cannot split a chunk that has already been edited
```

So, of course, I went to the ol' Google machine to find out what the heck this even meant. I had little luck, not so much because there weren't Stack Overflow questions, Github issues, or even blog posts about it, but because all of these referred to parts of Astro that I'm less familiar with--first time with Vite, hey-o!--and I didn't seem to apply.

I wasn't that far along yet in my build, so it wasn't too hard to tinker with the templates I had in my debugging. Nothing seemed to work, until I had a flash of insight to try renaming the file. Bingo!

So here's my lesson: **you cannot import your JSON file as `meta`**.

I thought it had to do with 'meta' being the name of an HTML element. Since I was editing the primary document template with a few `meta` elements in the `head`, I thought perhaps there was some interference with the name of the import. I tried changing the file name to several other HTML elements, but `meta` was the only problematic one. I checked the [list of reserved words in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) and it wasn't any one of those.
