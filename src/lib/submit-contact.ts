export async function submitContact(data: {
  name?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  turnstileToken?: string | null;
}): Promise<{ success: boolean; error?: string }> {
  try {
    if (!data.turnstileToken) {
      return {
        success: false,
        error: "Potvrďte prosím bezpečnostní ověření.",
      };
    }

    const res = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) return { success: true };

    const json = await res.json().catch(() => ({}));
    return {
      success: false,
      error: (json as { error?: string }).error ?? "Odeslání selhalo.",
    };
  } catch {
    return {
      success: false,
      error: "Odeslání selhalo. Zkuste nás kontaktovat přímo na info@espron.sk.",
    };
  }
}
