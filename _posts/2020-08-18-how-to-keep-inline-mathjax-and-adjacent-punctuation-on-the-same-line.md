---
layout: post
title:  "How to Keep Inline MathJax and Adjacent Punctuation on the Same Line"
date:   2020-08-18 17:30 -0400
categories: webdev
excerpt: >
  Ever notice that sometimes a line break will occur between an inline MathJax equation and an immediately adjacent punctuation mark? In this post I show how to prevent that (with MathJax 3).
---

## Prevent Line Breaks between Inline MathJax Equations and Adjacent Punctuation

With MathJax 3, set a `.no-wrap { white-space: nowrap; }` style rule and have the following script execute before MathJax runs:

```javascript
const preventLineWrapForPunctuation = () => {
  const inlineEquations = document.querySelectorAll('mjx-container:not([display=true])');

  for (const equation of inlineEquations) {
    const { previousSibling: prevSib, nextSibling: nextSib } = equation;
    const [prevIsText, nextIsText] = [prevSib, nextSib].map(sib => sib && sib.nodeType === Node.TEXT_NODE);
    const prevChar = prevIsText ? prevSib.textContent.slice(-1) : '';
    const nextChar = nextIsText ? nextSib.textContent[0] : '';
    const [keepPrevChar, keepNextChar] = [prevChar, nextChar].map(char => /\S/.test(char));
  
    if (!keepPrevChar && !keepNextChar) continue;

    const span = document.createElement('span');
    span.classList.add('no-wrap');
  
    equation.parentNode.replaceChild(span, equation);
  
    if (keepPrevChar) {
      prevSib.textContent = prevSib.textContent.slice(0, -1);
      span.appendChild(document.createTextNode(prevChar));
    }
  
    span.appendChild(equation);
  
    if (keepNextChar) {
      nextSib.textContent = nextSib.textContent.slice(1);
      span.appendChild(document.createTextNode(nextChar));
    }
  }
};

window.MathJax = {
  startup: {
    ready() {
      window.MathJax.startup.defaultReady();
      window.MathJax.startup.promise.then(preventLineWrapForPunctuation);
    }
  }
};
```
