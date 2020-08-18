---
layout: post
title:  "MathJax 3 in Jekyll and Kramdown"
date:   2020-03-06 20:45 -0400
categories: webdev
excerpt: >
  Setting up MathJax 3 in Jekyll with Kramdown is a bit trickier than it was with MathJax 2. Here is how to do it, with a bonus script for always keeping an inline MathJax equation on the same line as immediately adjacent punctuation.
---

## MathJax 3 in Jekyll

**EDIT, 8/18/20**: A recent Kramdown update has rendered much of this post obsolete.

***


I’ve [blogged before](/math/2019/06/15/testing-mathjax-using-trace-to-rearrange-matrix-products.html) about serving MathJax 2 *conditionally* in Jekyll. It’s the same for MathJax 3&mdash;just link to the [appropriate file](https://docs.mathjax.org/en/latest/web/components/combined.html) (the *[tex-chtml](https://docs.mathjax.org/en/latest/web/components/combined.html#tex-chtml)* component suffices for my purposes).

## MathJax 3 in Kramdown

Jekyll uses Kramdown by default, and Kramdown comes with [native support for MathJax](https://kramdown.gettalong.org/syntax.html#math-blocks) that uses `$$` as delimiters (for *both* inline and display math). The inline-math blocks [get rendered as](https://kramdown.gettalong.org/math_engine/mathjax.html#math-engine-mathjax) <span class="no-wrap">`<script type="math/tex">`</span> tags, and the display-math blocks get rendered as <span class="no-wrap">`<script type="math/tex; mode=display">`</span> tags.

Unfortunately, support for those `<script>` tags [has been dropped](https://docs.mathjax.org/en/latest/upgrading/v2.html#math-script-example) in the new MathJax 3! The link there has a snippet of code that solves the problem (to be run *before* MathJax), though if you use it with Kramdown you’ll have to replace <span class="no-wrap">`'script[type^="text/tex"]'`</span> with <span class="no-wrap">`'script[type^="math/tex"]'`</span>.

## Keep Inline Math on the Same Line as Immediately Adjacent Punctuation

One thing that LaTeX does that MathJax doesn’t is keep inline math on the same line as immediately adjacent punctuation. Browsers are perfectly happy to insert a line break between MathJax and a comma, period, colon, parenthesis, or dash, for example. This isn’t *often* a problem, but it’s more common than you might think, and when it strikes it’s a real eyesore! It’s also hard to “diagnose,” since it depends on screen width and browser, which are variable.

While implementing the Kramdown solution mentioned above, I took the opportunity to solve this line-break problem for myself once and for all. Here is the code, which I use [on this blog](https://github.com/MichaelAllenWarner/MichaelAllenWarner.github.io/blob/master/assets/mathjax-prescript.js) in conjunction with a <span class="no-wrap">`.no-wrap: { white-space: nowrap; }` </span> style rule:

```javascript
const getInlineReplacement = (node, text) => {
  const [prevSib, nextSib] = ['previousSibling', 'nextSibling'].map(prop => node[prop]);
  const [prevIsText, nextIsText] = [prevSib, nextSib].map(sib => sib && sib.nodeType === Node.TEXT_NODE);
  const prevChar = prevIsText ? prevSib.textContent.slice(-1) : '';
  const nextChar = nextIsText ? nextSib.textContent[0] : '';
  const [keepPrevChar, keepNextChar] = [prevChar, nextChar].map(char => /\S/.test(char));

  if (!keepPrevChar && !keepNextChar) return text;

  const span = document.createElement('span');
  span.classList.add('no-wrap');

  if (keepPrevChar) {
    prevSib.textContent = prevSib.textContent.slice(0, -1);
    span.appendChild(document.createTextNode(prevChar));
  }

  span.appendChild(text);

  if (keepNextChar) {
    nextSib.textContent = nextSib.textContent.slice(1);
    span.appendChild(document.createTextNode(nextChar));
  }

  return span;
};

window.MathJax = {
  options: {
    renderActions: {
      find: [10, doc => {
        for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
          const display = !!node.type.match(/; *mode=display/);
          const text = document.createTextNode('');
          const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
          math.start = { node: text, delim: '', n: 0} ;
          math.end = { node: text, delim: '', n: 0 };
          doc.math.push(math);
          const replacement = display ? text : getInlineReplacement(node, text);
          node.parentNode.replaceChild(replacement, node);
        }
      }, '']
    }
  }
};
```

This code could certainly be adapated to non-Kramdown situations.

Anyway, the new MathJax 3 is more modular, lighter-weight, and faster to load than its predecessor, so I do recommend it. I’ve made good use of it in my post on [covariant electrodynamics](/physics/2019/07/16/vector-triple-products-in-minkowski-spacetime.html).
