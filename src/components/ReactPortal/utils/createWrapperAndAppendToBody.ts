const createWrapperAndAppendToBody = (wrapperId: string): HTMLDivElement => {
  const wrapperEl = document.createElement('div');
  wrapperEl.setAttribute('id', wrapperId);
  document.body.append(wrapperEl);
  return wrapperEl;
};

export default createWrapperAndAppendToBody;
