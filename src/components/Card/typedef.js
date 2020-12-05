/**
 * @typedef {Object} BottomAction
 * @property {String} text Button text
 * @property {Function} onClick Function to call when clicked
 * - id => {}
 */

/**
 * @typedef Card
 * @property {String} id Id of the item
 * @property {String} title Title of the card
 * @property {String} [thumbnail = ''] Thumbnail url
 * @property {String} [creator = ''] Creator name / title
 * @property {String} [description = ''] Description for the card
 * @property {String} [date = ''] Date
 * @property {String} [updatedOn = ''] Updated On Date
 * - This will replace the date if exists
 * @property {Function} [onCardClick = ''] - Function called when the card is clicked
 * - id => {}
 * @param {import("react").ReactElement} [headerAction = ''] Header element, a react node
 * @property {import("react").ReactElement|BottomAction>} [bottomActions = ''] List of react nodes or BottomAction type objects
 */
