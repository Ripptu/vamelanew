import DOMPurify from 'dompurify';

/**
 * Sanitizes a string to prevent XSS attacks.
 * @param html The string to sanitize.
 * @returns The sanitized string.
 */
export function sanitize(html: string): string {
  if (typeof window === 'undefined') {
    // Basic server-side sanitization
    return html.replace(/<[^>]*>?/gm, '').trim();
  }
  return DOMPurify.sanitize(html).trim();
}

/**
 * Validates an email address.
 * @param email The email to validate.
 * @returns True if valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Checks if a honeypot field is filled (indicating a bot).
 * @param value The value of the honeypot field.
 * @returns True if it's likely a bot, false otherwise.
 */
export function isBot(value: string): boolean {
  return value.length > 0;
}

/**
 * Limits a string to a maximum length.
 * @param str The string to truncate.
 * @param length The maximum length.
 * @returns The truncated string.
 */
export function limitLength(str: string, length: number): string {
  return str.substring(0, length);
}

/**
 * Sanitizes an alt text string to prevent XSS.
 * @param text The alt text to sanitize.
 * @returns The sanitized alt text.
 */
export function sanitizeAlt(text: string): string {
  return text.replace(/[^\w\s-]/gi, '').trim();
}
