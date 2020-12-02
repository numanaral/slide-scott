/**
 * Returns true if at least one source value is contained in the
 * from array
 *
 * @example
 * // Does user have any roles that match access roles?
 * const userRoles = ['A'];
 * const canAccessRoles = ['A', 'B'];
 * hasAnyFrom(canAccessRoles, userRoles) === true // true
 * @param {Array} source - List to match at least 1 element with
 * @param {Array} list - List to check if the element exists
 */
const hasAnyFrom = (source, from) =>
	source?.length === 0 || source.some(e => from.indexOf(e) >= 0);

export { hasAnyFrom };
