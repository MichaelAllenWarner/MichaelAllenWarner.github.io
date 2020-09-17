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

const rem = px => `${px / 16}rem`;

window.MathJax = {
  tex: {
    macros: {
      del: '\\boldsymbol{\\nabla}',
      vecpartial: '\\style{transform: rotate(-16deg);}{\\boldsymbol{\\partial}}',
      dyadic: [`\\class{dyadic}{\\overset{\\style{margin-top: ${rem(-5)}; padding-top: ${rem(3)};}{\\tiny \\boldsymbol \\leftrightarrow}}{ \\mathsf{ #1 } }}`, 1],
      dyadicpartial: `\\class{dyadic}{\\overset{\\style{margin-top: ${rem(-5)}; padding-top: ${rem(3)}; transform: translateX(${rem(-2)});}{\\tiny \\boldsymbol \\leftrightarrow}}{ \\style{ transform: rotate(-16deg); }{ \\partial } }}`
    }
  },
  startup: {
    ready() {
      window.MathJax.startup.defaultReady();
      window.MathJax.startup.promise.then(preventLineWrapForPunctuation);
    }
  }
};