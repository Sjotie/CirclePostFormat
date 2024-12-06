const WEBHOOK_URL = 'https://primary-production-c380.up.railway.app/webhook/7e18545e-f0ce-4d65-93fd-c8d0dca548fa';

export async function submitLink(url: string): Promise<void> {
  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Failed to submit link');
  }
}