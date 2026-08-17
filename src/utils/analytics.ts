import { AnalyticsEvent } from '../types';

/**
 * Lightweight and privacy-safe event dispatcher for conversion tracking
 * (WhatsApp clicks, Telegram clicks, FAQ toggles, section views).
 */
export function trackEvent(event: AnalyticsEvent) {
  // If window.dataLayer exists (Google Tag Manager / GA4), push the event cleanly
  if (typeof window !== 'undefined') {
    const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({
        event: event.name,
        ...event,
        timestamp: new Date().toISOString(),
      });
    }
  }

  // Developer console notification for testing
  if (process.env.NODE_ENV !== 'production') {
    console.log(`📊 [Analytics Event]:`, event);
  }
}
