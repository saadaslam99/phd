// Client-side PDF generation & Direct Print Bridge

export async function downloadServerPDF(formId, htmlContent, formData) {
  try {
    const response = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, application/pdf'
      },
      body: JSON.stringify({
        formId,
        html: htmlContent,
        data: formData
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.message || `Server PDF generation failed with status ${response.status}`);
    }

    const contentType = response.headers.get('content-type') || '';

    // If server returned JSON with direct download endpoint
    if (contentType.includes('application/json')) {
      const result = await response.json();
      const filename = result.filename || `${formId.toUpperCase()}_Official_Iqra_University.pdf`;
      const downloadUrl = result.downloadUrl;

      // Trigger standard browser HTTP attachment download
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = downloadUrl;
      a.download = filename;
      a.setAttribute('download', filename);
      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        a.remove();
      }, 10000);

      return {
        success: true,
        filename,
        downloadUrl,
        previewUrl: result.previewUrl
      };
    }

    // Direct binary stream fallback
    const arrayBuffer = await response.arrayBuffer();
    const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
    const filename = `${formId.toUpperCase()}_Official_Iqra_University.pdf`;

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(pdfBlob, filename);
      return { success: true, filename };
    }

    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();

    // Do NOT revoke immediately! Keep URL alive for 60s so Chromium's download manager can write the file
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      a.remove();
    }, 60000);

    return { success: true, filename };
  } catch (error) {
    console.warn('Backend Puppeteer endpoint unavailable or returned error, falling back to direct print:', error);
    triggerBrowserPrint();
    return { success: false, fallbackUsed: true, error: error.message };
  }
}

export function triggerBrowserPrint() {
  window.print();
}

export function exportFormDataAsJson(formId, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${formId}_data.json`;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
}
