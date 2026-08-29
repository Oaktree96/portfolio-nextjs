"use client"

const REFERRAL_STORAGE_KEY = "osborne_ref_code"

/** Get the referral code from current URL params */
export function getReferralFromUrl(): string | null {
  if (typeof window === "undefined") return null
  const params = new URLSearchParams(window.location.search)
  return params.get("ref")
}

/** Save referral code to localStorage so it persists across pages */
export function saveReferralCode(code: string) {
  if (typeof window === "undefined") return
  // Only save if no existing code — first referrer wins
  const existing = localStorage.getItem(REFERRAL_STORAGE_KEY)
  if (!existing) {
    localStorage.setItem(REFERRAL_STORAGE_KEY, code)
  }
}

/** Get the stored referral code */
export function getStoredReferralCode(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(REFERRAL_STORAGE_KEY)
}

/** Clear stored referral code */
export function clearReferralCode() {
  if (typeof window === "undefined") return
  localStorage.removeItem(REFERRAL_STORAGE_KEY)
}

/** Initialise referral tracking — call once on page load */
export function initReferralTracking() {
  const ref = getReferralFromUrl()
  if (ref) {
    saveReferralCode(ref)
  }
}