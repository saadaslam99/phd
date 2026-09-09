import { FORMS_DATA } from './form-definitions-part1.js';
import { FORMS_DATA_PART2 } from './form-definitions-part2.js';
import { FORMS_DATA_PART3 } from './form-definitions-part3.js';
import { FORMS_DATA_PART4 } from './form-definitions-part4.js';
import { FORMS_DATA_PART5 } from './form-definitions-part5.js';

export const ALL_FORMS = {
  ...FORMS_DATA,
  ...FORMS_DATA_PART2,
  ...FORMS_DATA_PART3,
  ...FORMS_DATA_PART4,
  ...FORMS_DATA_PART5
};

export function getFormById(id) {
  return ALL_FORMS[id] || null;
}
