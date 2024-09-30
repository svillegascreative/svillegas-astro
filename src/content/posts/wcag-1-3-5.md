---
title: Deep Dive on WCAG 2.1 SC 1.3.5
date: 2023-06-08
lede:
  I went down a rabbit hole trying to figure out how exactly to interpret and
  implement "input purpose" for the sake of satisfying this Success Criterion.
tags: [web, accessibility, WCAG]
---

I was just reviewing [WCAG 2.1](https://www.w3.org/TR/WCAG21/) Success Criteria
(SC)&mdash;yes, that's a thing that I'm doing, in preparation for
[IAAP WAS certification](https://www.accessibilityassociation.org/s/wascertification)&mdash;and
had to pause at
[SC 1.3.5](https://www.w3.org/TR/WCAG21/#identify-input-purpose):

> **Success Criterion 1.3.5 Identify Input Purpose**
>
> The purpose of each input field collecting information about the user can be
> programmatically determined when:
>
> - The input field serves a purpose identified in the
>   [Input Purposes for User Interface Components section](http://www.w3.org/TR/WCAG21/#input-purposes);
>   and
> - The content is implemented using technologies with support for identifying
>   the expected meaning for form input data.

This SC is so innocently named: "Identify Input Purpose" seems like it should be
relatively straightforward. Still, it raised a series of questions for me, and I
found myself compelled to dig a little deeper into it.

## About the user

Let's start with this part:

> [...] collecting information about the user [...]

So, this means that this SC only applies to _some_ form fields&mdash;namely
those that are about the users themselves? That's not apparent from the SC name
(which is why I stumbled on this), but apparently, yes, that is actually the
case. We'll come back to this.

## Input purposes

Clicking through to the supplied link for
[Input Purposes for User Interface Components section](http://www.w3.org/TR/WCAG21/#input-purposes)
in the first bullet point, I found that the list did indeed provide values for
fields that would presumably relate to a user. For some, that relation is more
direct than others: "name", "username", and all the address and telephone fields
made a lot of sense, but the list also includes credit card fields, preferred
language, and a few less evident ones (each with a brief explanation).

Let's keep in mind, then, that **this SC applies to personal information for the
acting user only**.

## Technologies for input purposes

Having reviewed the list of relevant purposes, I had to wonder how and where
these are used or applied, since they need to be "programmatically determined".
The second bullet point in the SC notes that it depends on the content being
<q>implemented using technologies with support for identifying the expected
meaning for form input data</q>.

Given that I work on the web and build (often indirectly) in HTML, I wondered
whether this was technology that does provide the required support, and if so:
how? Some unfamiliar attribute, perhaps?

Immediately above the list of purposes I had just reviewed, there is a
highlighted note that starts:

> The list of input type purposes is based on the control purposes defined in
> the
> [HTML 5.2 Autofill field section](https://www.w3.org/TR/html52/sec-forms.html#sec-autofill),
> [...]

I took that as a hint and followed the link, further down the rabbit hole, such
that I found myself reviewing the HTML spec for forms, trying to understand how
exactly autofill related to input purpose. [The deep link above didn't actually
connect to the expected section, so I reviewed the
[most closely related section](https://html.spec.whatwg.org/multipage/forms.html#enabling-client-side-automatic-filling-of-form-controls),
hoping/assuming it would be the same content.]

## Hijacking Autofill?

**Autofill, it turns out, is the only available way to provide a "purpose" for
an input field in HTML.**

The intent of "autofill" behaviour is to give the browser a hint as to which
information it should use to automatically fill in a given field, so that the
user is saved the effort of doing so themselves. This is achieved by providing
one of the listed values for the `autocomplete` attribute on the `input`
element.

I suppose it makes sense that autofill is limited to certain types of personal
information, because these are encountered quite frequently and are unlikely to
change, thus having a high likelihood of being "guessed" accurately by the
browser. It's the accurate guessing and completion that provides value to the
user.

In
[Understanding Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
(a non-normative WCAG-supporting document), this method of using the
`autocomplete` attribute is described as a means to satisfy the SC, while also
clearly stating that this strategy involves "adopting and repurposing" the
attribute. It provides two reasons for suggesting this method:

1. The obvious benefit is to save the user the trouble of repeatedly entering
   information that the browser can easily identify and remember for them. This
   is useful for anyone, but is especially useful for anyone with dyslexia,
   difficulty typing, or any other disability that would make this task
   particularly challenging. It also helps prevent errors (which could also said
   to satisfy [3.3.5 Help](https://www.w3.org/TR/WCAG21/#help))
2. Perhaps more hopeful & speculative, it suggests that by reaching for the
   value of the `autocomplete` attribute, assistive technologies could
   <q>present the purpose of the inputs to users in different modalities</q>,
   such as by presenting familiar icons next to the labels.

Okay, the first point has evident merit (it's simply the original intent behind
`autocomplete`), but the second one feels like a stretch.

## Is this really about input purpose?

I'm having trouble following the reasoning behind this SC (at least the way it's
presented), and wonder if perhaps the authors were ultimately engaging in
wishful thinking: _if_ authors use `autocomplete` and _if_ assistive technology
is further developed around it, then we could say there's a way to provide input
purpose programmatically for those fields, and that would be useful so we should
make it a rule. A rule that only applies to auto-fillable fields about the user.

## Summary

The best (and currently only available) technique for satisfying this SC in HTML
is to set the `autofill` attribute to one of the values listed whenever
collecting personal information.
