import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { submitPackageBooking } from "@/api/bookingApi";
import { useToast } from "@/context/ToastContext";
import BookingModal from "@components/BookingModal";
import type { TravelPackage } from "@utils";

type BookingContextValue = {
  openBooking: (pkg: TravelPackage) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const { showToast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openBooking = useCallback((pkg: TravelPackage) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    if (isSubmitting) {
      return;
    }
    setIsModalOpen(false);
    setSelectedPackage(null);
  }, [isSubmitting]);

  const handleSubmit = useCallback(
    async (details: {
      email: string;
      phone: string;
      plannedTripDate: string;
    }) => {
      if (!selectedPackage) {
        return;
      }

      setIsSubmitting(true);
      const result = await submitPackageBooking({
        pkg: selectedPackage,
        email: details.email,
        phone: details.phone,
        plannedTripDate: details.plannedTripDate,
      });
      setIsSubmitting(false);

      if (result.success) {
        setIsModalOpen(false);
        setSelectedPackage(null);
        showToast(
          "success",
          "Booking sent!",
          result.message ??
            "We received your request and will contact you shortly.",
        );
        return;
      }

      showToast(
        "error",
        "Booking failed",
        result.error ?? "Something went wrong. Please try again.",
      );
    },
    [selectedPackage, showToast],
  );

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {selectedPackage && (
        <BookingModal
          key={selectedPackage.id}
          pkg={selectedPackage}
          isOpen={isModalOpen}
          isSubmitting={isSubmitting}
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      )}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextValue => {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
};
