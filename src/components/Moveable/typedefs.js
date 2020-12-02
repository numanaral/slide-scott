/**
 * Clones element when a tool is dragged from the toolbox and
 * dropped into the droppable area
 *
 * @callback cloneNewElement
 * @param {String} draggableClassifier getAttribute('draggable-classifier')
 * @param {String|Number} size Size to be used by width and height
 * @param {HTMLElement} container e.target
 * @param {Number} clientX e.clientX
 * @param {Number} clientY e.clientY
 */

/**
 * Generates a pre-existing elements on the droppable area
 *
 * @callback generateElement
 * @param {String} id Previously generated identifier, eg:
 * - cloned-draggable-image-1605254768341
 * @param {Array<Number>} translateXY style.transform.translate
 * - [0, 0, 0]
 * - index: 2 is generate by moveable but not needed
 * @param {Array<Number>} widthHeight [style.width, style.height]
 * - [100, 100]
 * @param {Array<Number>} topLeft [style.top, style.left]
 * - [100, 100]
 * @param {Number} rotate style.rotate
 * - 0
 * @param {String} transformOrigin style.transformOrigin
 * - '50% 50%'
 * @param {String} slideId Container slide's Id
 * - useRef();
 */
