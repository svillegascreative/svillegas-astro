---
title: What not to name your Astro JSON data
date: 2023-06-27
lede: Just a quick tip about naming data files in Astro.
tags:
  - web
  - Astro
---

I was having some trouble recently as I was playing with getting a little side
project set up using Astro. I wanted to set up some basic site data in a JSON
file, and then use that in some templates.

Having done this before in Eleventy, I was copying and modifying some files from
previous work, but something kept going wrong:

```txt
Error: Cannot split a chunk that has already been edited
```

So, of course, I went to the ol' Google machine to find out what the heck this
even meant. I had little luck, not so much because there weren't Stack Overflow
questions, Github issues, or even blog posts about it, but because all of these
referred to parts of Astro that I'm less familiar with--first time with Vite,
hey-o!--and they didn't seem to apply to my case.

## Debugging

I wasn't that far along yet in my build, so it wasn't too hard to tinker with
the templates I had in my debugging. Nothing seemed to work, until I had a flash
of insight to try renaming the file. Bingo!

```js
// ❌ This naming causes an error 👇
import meta from "../data/meta.json";
```

I thought it had to do with 'meta' being the name of
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta">an HTML
element</a>. Since I was editing the primary document template with a few `meta`
elements in the `head`, I thought perhaps there was some interference with the
name of the import, and that importing a file with the name of _any_ HTML
element might cause a problem. I tried changing the file name to several other
HTML element names, but 'meta' was the only problematic one. I also checked the
list of
[reserved words in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)
and it wasn't any one of those, so the issue didn't lie there.

## Conclusion

I never did figure out what the actual root of the problem is &mdash; it feels a
bit beyond me, well into some Astro internals probably? &mdash; so I leave this
here as a simple reminder to myself and cautionary instruction to anyone who
might come upon it:

**You cannot import your JSON file as `meta`**.
