import { useEffect } from "react";
import { FiAlertCircle, FiCheckCircle, FiX } from "react-icons/fi";
import { StyledToast, StyledToastStack } from "./style";

export type ToastItem = {
  id: string;
  variant: "success" | "error";
  title: string;
  message: string;
  exiting?: boolean;
};

type NotificationToastProps = {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
};

const NotificationToast = ({ toasts, onDismiss }: NotificationToastProps) => {
  if (toasts.length === 0) {
    return null;
  }

  return (
    <StyledToastStack
      role="region"
      aria-live="polite"
      aria-label="Notifications"
      data-testid="section-toast-stack"
    >
      {toasts.map((toast) => (
        <ToastCard key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </StyledToastStack>
  );
};

const ToastCard = ({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: (id: string) => void;
}) => {
  useEffect(() => {
    const timer = window.setTimeout(() => onDismiss(toast.id), 5200);
    return () => window.clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const testId =
    toast.variant === "success" ? "toast-booking-success" : "toast-booking-error";

  return (
    <StyledToast
      $variant={toast.variant}
      {...(toast.exiting ? { $exiting: true } : {})}
      data-testid={testId}
    >
      <span className="toast-icon" aria-hidden>
        {toast.variant === "success" ? <FiCheckCircle /> : <FiAlertCircle />}
      </span>
      <div className="toast-body">
        <p className="toast-title">{toast.title}</p>
        <p className="toast-message">{toast.message}</p>
      </div>
      <button
        type="button"
        className="toast-close"
        aria-label="Dismiss notification"
        onClick={() => onDismiss(toast.id)}
      >
        <FiX />
      </button>
    </StyledToast>
  );
};

export default NotificationToast;
