const El = ({ element, child, dataset, eventListener, ...rest }) => {
  const el = document.createElement(element);
  for (const key in rest) {
    el[key] = rest[key];
  }
  Array.isArray(child) ? el.append(...child) : child && el.append(child);
  if (dataset) {
    for (const key in dataset) {
      // console.log(key);
      el.dataset[key] = dataset[key];
    }
  }
  if (eventListener) {
    eventListener.map((elem) => el.addEventListener(elem.event, elem.callback));
  }
  return el;
};

export default El;
