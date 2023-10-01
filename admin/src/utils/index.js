export { default as checkFormValidity } from './checkFormValidity';
export { default as createRoute } from './createRoute';
export { default as formatAPIErrors } from './formatAPIErrors';
export { default as getAttributesToDisplay } from './getAttributesToDisplay';
export { default as makeUniqueRoutes } from './makeUniqueRoutes';
export { default as sortLinks } from './sortLinks';
export { default as getExistingActions } from './getExistingActions';
export { default as getRequestUrl } from './getRequestUrl';
export { default as getFullName } from './getFullName';
export { default as hashAdminUserEmail } from './uniqueAdminHash';

export const toSentenceCase = camelCase => {
  if (camelCase) {
      const result = camelCase.replace(/([A-Z])/g, ' $1');
      return result[0].toUpperCase() + result.substring(1).toLowerCase();
  }
  return '';
};
