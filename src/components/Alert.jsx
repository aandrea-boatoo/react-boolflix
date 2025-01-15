import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function Alert() {
  const { alertData, setAlertData } = useGlobalContext();
  const { type, message } = alertData;
  useEffect(
    () => {
      let timer1 = setTimeout(
        () => setAlertData({ type: "", message: "" }),
        3000
      );

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );

  if (!message) return null;

  return (
    <div className={`alert alert-${type} alert-dismissible`} role="alert">
      <div>{message}</div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => setAlertData({ type: "", message: "" })}
      ></button>
    </div>
  );
}
