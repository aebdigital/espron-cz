export async function submitContact(data: {
  name?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) return { success: true };

    const json = await res.json().catch(() => ({}));
    return {
      success: false,
      error: (json as { error?: string }).error ?? "Odoslanie zlyhalo.",
    };
  } catch {
    return {
      success: false,
      error: "Odoslanie zlyhalo. Skúste nás kontaktovať priamo na info@espron.sk.",
    };
  }
}
