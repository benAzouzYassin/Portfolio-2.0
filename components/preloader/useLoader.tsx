import { useEffect, useState } from "react";

export default function useLoader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "visible";
    }, 1500);
  }, []);
  return loading;
}