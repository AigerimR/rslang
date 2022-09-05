import { useEffect, useRef } from "react";

const useKey = (code, cb) => {
  const callbackRef = useRef(cb);
  useEffect(() => { callbackRef.current = cb; });
  useEffect(() => {
    function handle(event) {
      if (event.code === code) {
        callbackRef.current(event);
      }
    }
    document.addEventListener('keypress', handle);
    return () => document.removeEventListener('keypress', handle);
  }, [code]);
}

export default useKey;
