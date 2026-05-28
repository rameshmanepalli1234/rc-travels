import { FormEvent, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useCustomerAuth } from "@/context/CustomerAuthContext";
import { useToast } from "@/context/ToastContext";
import { sanitizeNameInput, sanitizePhoneInput } from "@utils";
import {
  buildFullName,
  getProfileFirstName,
  getProfileLastName,
} from "@/utils/customerProfileUtils";
import {
  StyledAuthBody,
  StyledAuthHeader,
  StyledAuthModal,
  StyledAuthOverlay,
} from "./style";

const ProfileModal = () => {
  const {
    isProfileOpen,
    isProfileOnboarding,
    closeProfile,
    user,
    profile,
    saveProfile,
  } = useCustomerAuth();
  const { showToast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isProfileOpen || !profile) {
      return;
    }

    setFirstName(getProfileFirstName(profile));
    setLastName(getProfileLastName(profile));
    setPhone(profile.phone);
    setDateOfBirth(profile.date_of_birth ?? "");
    setCity(profile.city ?? "");
    setError(null);
  }, [profile, isProfileOpen]);

  if (!isProfileOpen || !user) {
    return null;
  }

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setError(null);

    if (firstName.trim().length < 2) {
      setError("Please enter your first name.");
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);
    const result = await saveProfile({
      first_name: firstName,
      last_name: lastName,
      full_name: buildFullName(firstName, lastName),
      phone,
      date_of_birth: dateOfBirth.trim() || null,
      city: isProfileOnboarding ? city.trim() || null : profile?.city ?? null,
    });
    setIsSubmitting(false);

    if (result.success) {
      showToast(
        "success",
        isProfileOnboarding ? "Profile complete" : "Profile saved",
        isProfileOnboarding
          ? "Your account is ready. Happy travels!"
          : "Your details were updated.",
      );
      return;
    }

    setError(result.error ?? "Could not save profile.");
  };

  const maxBirthDate = new Date().toISOString().slice(0, 10);

  return (
    <StyledAuthOverlay
      role="presentation"
      onClick={isProfileOnboarding ? undefined : closeProfile}
      data-testid="overlay-customer-profile"
    >
      <StyledAuthModal
        role="dialog"
        aria-modal="true"
        aria-labelledby="customer-profile-title"
        onClick={(e) => e.stopPropagation()}
      >
        {!isProfileOnboarding && (
          <button
            type="button"
            className="auth-close"
            aria-label="Close"
            onClick={closeProfile}
          >
            <FiX />
          </button>
        )}

        <StyledAuthHeader>
          <h2 id="customer-profile-title">
            {isProfileOnboarding ? "Complete your profile" : "Edit profile"}
          </h2>
          <p>
            {isProfileOnboarding
              ? "Add your details to finish setting up your account."
              : "Update your name, date of birth, and phone number."}
          </p>
        </StyledAuthHeader>

        <StyledAuthBody>
          <form onSubmit={handleSubmit}>
            {isProfileOnboarding && (
              <div className="auth-field">
                <label className="auth-label" htmlFor="profile-email">
                  Email
                </label>
                <input
                  id="profile-email"
                  className="auth-input auth-input-readonly"
                  type="email"
                  value={user.email ?? ""}
                  readOnly
                  disabled
                />
              </div>
            )}

            <div className="auth-field">
              <label className="auth-label" htmlFor="profile-first-name">
                First name
              </label>
              <input
                id="profile-first-name"
                className="auth-input"
                type="text"
                value={firstName}
                onChange={(e) =>
                  setFirstName(sanitizeNameInput(e.target.value))
                }
                disabled={isSubmitting}
                required
                autoComplete="given-name"
                data-testid="input-profile-first-name"
              />
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="profile-last-name">
                Last name (optional)
              </label>
              <input
                id="profile-last-name"
                className="auth-input"
                type="text"
                value={lastName}
                onChange={(e) =>
                  setLastName(sanitizeNameInput(e.target.value))
                }
                disabled={isSubmitting}
                autoComplete="family-name"
                data-testid="input-profile-last-name"
              />
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="profile-dob">
                Date of birth (optional)
              </label>
              <input
                id="profile-dob"
                className="auth-input"
                type="date"
                value={dateOfBirth}
                max={maxBirthDate}
                onChange={(e) => setDateOfBirth(e.target.value)}
                disabled={isSubmitting}
                data-testid="input-profile-dob"
              />
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="profile-phone">
                Phone number
              </label>
              <input
                id="profile-phone"
                className="auth-input"
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(sanitizePhoneInput(e.target.value))
                }
                disabled={isSubmitting}
                required
                autoComplete="tel"
                data-testid="input-profile-phone"
              />
            </div>

            {isProfileOnboarding && (
              <div className="auth-field">
                <label className="auth-label" htmlFor="profile-city">
                  City (optional)
                </label>
                <input
                  id="profile-city"
                  className="auth-input"
                  type="text"
                  placeholder="e.g. Rajamahendravaram"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={isSubmitting}
                  data-testid="input-profile-city"
                />
              </div>
            )}

            {error && (
              <p className="auth-error" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="auth-submit"
              disabled={isSubmitting}
              data-testid="button-profile-save"
            >
              {isSubmitting
                ? "Saving…"
                : isProfileOnboarding
                  ? "Save and continue"
                  : "Save changes"}
            </button>
          </form>
        </StyledAuthBody>
      </StyledAuthModal>
    </StyledAuthOverlay>
  );
};

export default ProfileModal;
