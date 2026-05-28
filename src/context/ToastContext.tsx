import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import NotificationToast, {
  type ToastItem,
} from "@components/NotificationToast";

type ToastContextValue = {
  showToast: (
    variant: "success" | "error",
    title: string,
    message: string,
  ) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const createToastId = (): string =>
  `toast-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t)),
    );
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 320);
  }, []);

  const showToast = useCallback(
    (variant: "success" | "error", title: string, message: string) => {
      const id = createToastId();
      setToasts((prev) => [...prev, { id, variant, title, message }]);
    },
    [],
  );

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <NotificationToast toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
};
