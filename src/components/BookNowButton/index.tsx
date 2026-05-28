import type { TravelPackage, TableTravelPackage } from "@utils";
import { TOOLTIPS } from "@utils";
import { useBooking } from "@/context/BookingContext";
import Tooltip from "@components/Tooltip";

type BookNowButtonProps = {
  pkg: TravelPackage | TableTravelPackage;
  className?: string;
  disabled?: boolean;
};

const BookNowButton = ({
  pkg,
  className = "",
  disabled = false,
}: BookNowButtonProps) => {
  const { openBooking } = useBooking();
  const isUnavailable =
    disabled || ("available" in pkg && pkg.available === false);

  if (isUnavailable) {
    return (
      <button
        type="button"
        disabled
        className={className}
        data-testid="button-book-now-disabled"
      >
        Book Now
      </button>
    );
  }

  return (
    <Tooltip content={TOOLTIPS.packages.bookNow} placement="top">
      <button
        type="button"
        className={className}
        onClick={() => openBooking(pkg)}
        data-testid="button-book-now"
      >
        Book Now
      </button>
    </Tooltip>
  );
};

export default BookNowButton;
