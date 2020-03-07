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
  tex: {
    macros: {
      partialup: '\\style{transform: rotate(-16deg)}{\\boldsymbol \\partial}',
      del: '\\boldsymbol \\nabla'
    }
  },
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