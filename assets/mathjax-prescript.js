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
    tags: 'ams',
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


// Show equation in tooltip when hovering reference-link.
// Adapted from: https://gist.github.com/mauriciopoppe/ec311235997fab7b2993

const tooltip = document.createElement('div');

Object.assign(tooltip.style, {
  visibility: 'hidden',
  transitionProperty: 'opacity',
  transitionDuration: '.2s',
  opacity: '0',
  width: '100%',
  paddingRight: rem(10),
  position: 'absolute',
  backgroundColor: 'rgba(43, 45, 47, .95)',
  color: 'white'
});

// use `main article` as tooltip container (it's set to relative-positioning)
document.querySelector('main article').appendChild(tooltip);

const onMouseOver = e => {
  const a = e.currentTarget.closest('a');
  if (!a) return;

  /*
    MathJax currently puts colon in ids, which is invalid and causes
    methods like `document.querySelector` and `document.getElementById`
    to error out. To get around this, we use `[id^="..."][id$="..."]`
    as the selector if needed, where the first part has everything
    before the colon and the last part has everything after the colon.
  */
  let target;
  try {
    target = document.querySelector(a.hash);
  } catch (err) {
    const [idStart, idEnd] = a.hash.slice(1).split(encodeURIComponent(':'));
    target = document.querySelector(`[id^="${idStart}"][id$="${idEnd}"]`);
  }

  const equation = target.closest('mjx-container');
  const { height } = equation.getBoundingClientRect();

  Object.assign(tooltip.style, {
    top: rem(a.closest('.MathJax').offsetTop - height - 50),
    visibility: 'visible',
    opacity: '1'
  });

  tooltip.appendChild(equation.cloneNode(true));
};

// hide mechanism accounts for `transitioncancel` to prevent the
// tooltip's state from getting permanently "stuck" by fast-mousing
const hide = () => {
  tooltip.innerHTML = '';
  tooltip.style.visibility = 'hidden';
  tooltip.removeEventListener('transitionend', hide);
  tooltip.removeEventListener('transitioncancel', hide);
};

const onMouseOut = e => {
  if (!e.currentTarget.closest('a')) return;
  tooltip.addEventListener('transitionend', hide);
  tooltip.addEventListener('transitioncancel', hide);
  tooltip.style.opacity = '0';
};

document.addEventListener('DOMContentLoaded', async () => {
  await MathJax.startup.promise;
  document.querySelectorAll('.MathJax_ref').forEach(el => {
    el.addEventListener('mouseover', onMouseOver);
    el.addEventListener('mouseout', onMouseOut);
  });
});