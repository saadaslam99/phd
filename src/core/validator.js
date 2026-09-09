// Field & Schema Validation Engine

export function validateFormData(fields, data) {
  const errors = [];

  fields.forEach(f => {
    const val = (data[f.name] !== undefined && data[f.name] !== null) ? String(data[f.name]).trim() : '';

    if (f.required && !val) {
      errors.push({
        field: f.name,
        label: f.label,
        message: `${f.label} is required.`
      });
    }

    if (f.type === 'email' && val) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        errors.push({
          field: f.name,
          label: f.label,
          message: `Please enter a valid email address for ${f.label}.`
        });
      }
    }

    if (f.maxLength && val.length > f.maxLength) {
      errors.push({
        field: f.name,
        label: f.label,
        message: `${f.label} exceeds maximum allowed character length (${val.length}/${f.maxLength}).`
      });
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}
