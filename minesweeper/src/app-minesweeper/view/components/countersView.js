import createElement from '../createElement';

const CLASSES = {
  section: 'counters',
  counter: {
    block: 'counter',
    title: 'counter__title',
    value: 'counter__value',
  },
};

const section = createElement('div', CLASSES.section);
const counters = {};
['seconds', 'steps', 'flags', 'mines'].forEach((counterName) => {
  const counter = createCounter(counterName);
  counters[counterName] = counter;
  section.append(counter.getElement());
});

export function setValues(data) {
  Object.entries(counters).forEach(([counterName, counterObject]) => {
    counterObject.setValue(data[counterName]);
  });
}

export function count(counterName) {
  counters[counterName].count();
}

export function getElement() {
  return section;
}

function createCounter(name) {
  let counterValue;
  const blockElement = createElement('div', CLASSES.counter.block);
  const titleElement = createElement('p', CLASSES.counter.title);
  titleElement.textContent = name;
  const valueElement = createElement('p', CLASSES.counter.value);
  blockElement.append(titleElement, valueElement);

  return {
    getElement() { return blockElement; },
    setValue(value) {
      counterValue = parseInt(value, 10);
      if (Number.isNaN(counterValue)) return;
      valueElement.textContent = value;
    },
    count() {
      counterValue += 1;
      this.setValue(counterValue);
    },
  };
}
