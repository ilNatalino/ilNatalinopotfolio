

const oneElement = document.querySelector('#one')
const otherElement = document.querySelector('#other')
  
init(oneElement, { showCursor: true, strings: ['Nice', 'One' ] });
init(otherElement, { disableBackTyping: true, strings: ['iTyped is', 'Awesome'] });