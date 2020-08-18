const preventLineWrapForPunctuation = () => {
  const inlineEquations = document.querySelectorAll('mjx-container:not([display=true])');

  for (const equation of inlineEquations) {
    const [prevSib, nextSib] = ['previousSibling', 'nextSibling'].map(prop => equation[prop]);
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
  tex: {
    macros: {
      partialup: '\\style{transform: rotate(-16deg)}{\\boldsymbol \\partial}',
      del: '\\boldsymbol \\nabla'
    }
  },
  startup: {
    ready() {
      window.MathJax.startup.defaultReady();

      const font = window.MathJax.startup.output.font;
      font.getChar('bold', 0x2202)[3].smp = font.getChar('bold-italic', 0x2202)[3].smp;

      window.MathJax.startup.promise.then(preventLineWrapForPunctuation);
    }
  } 
};