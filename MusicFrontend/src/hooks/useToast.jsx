import { useEffect } from "react";

export default function useToast(value, func) {
  useEffect(() => {
    if (value) {
        setTimeout(func, 1500);
    }
  }, [value]);
} 