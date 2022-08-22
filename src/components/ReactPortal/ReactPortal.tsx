import TReactPortalProps from '../../@types/reactPortals';
import React, { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import createWrapperAndAppendToBody from './utils/createWrapperAndAppendToBody';

const ReactPortal = ({ children, wrapperId = 'react-portal-wrapper' }: TReactPortalProps) => {
  const [wrapperEl, setWrapperEl] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperEl(element);

    return () => {
      if (systemCreated && element?.parentNode) element.parentNode.removeChild(element);
    };
  }, [wrapperId]);

  if (wrapperEl === null) return null;

  return createPortal(children, wrapperEl);
};

export default ReactPortal;
