// Long Text Protection & Single-Page Layout Guard
// Ensures entered values do not push single-page forms onto second pages.

export function applyTextGuard(containerEl, maxAllowedHeightPx = 1122) { // 297mm at 96dpi is ~1122px
  if (!containerEl || typeof containerEl.querySelectorAll !== 'function') return { valid: true, overflowPx: 0 };

  const pages = containerEl.querySelectorAll('.doc-page');
  const results = [];

  pages.forEach((page, index) => {
    const scrollHeight = page.scrollHeight;
    const clientHeight = page.clientHeight || 1122;
    const isOverflowing = scrollHeight > (clientHeight + 4); // 4px margin of tolerance

    if (isOverflowing) {
      // Step 1: Try auto font-scaling on long fields
      const autoScaleFields = page.querySelectorAll('.auto-scale-text');
      let recovered = false;

      autoScaleFields.forEach(field => {
        let currentSize = parseFloat(window.getComputedStyle(field).fontSize) || 12;
        if (currentSize > 9) {
          field.style.fontSize = `${currentSize - 1.5}pt`;
        }
      });

      if (page.scrollHeight <= clientHeight + 4) {
        recovered = true;
      }

      results.push({
        pageIndex: index + 1,
        isOverflowing: !recovered,
        overflowPx: scrollHeight - clientHeight,
        recovered
      });
    } else {
      results.push({
        pageIndex: index + 1,
        isOverflowing: false,
        overflowPx: 0
      });
    }
  });

  const hasAnyOverflow = results.some(r => r.isOverflowing);
  return {
    valid: !hasAnyOverflow,
    details: results
  };
}
