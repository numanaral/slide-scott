import firebase from 'firebase/app';

const sortByFirebaseDate = (sort = 'desc') => (a, b) =>
	((sort === 'desc' && -1) || 1) *
	(a.updatedOn.seconds - b.updatedOn.seconds);

// Can be resolved with const date = updatedOn.toDate();
// const getDateFromFirebaseObject = obj => new Date(obj.seconds * 1000);

/**
 * Stringifies objects before sending them to firebase
 * @param {Object} props Properties to be passed into the firebase request
 */
const toFirestore = props =>
	Object.keys(props).reduce((acc, key) => {
		const value = props[key];
		// eslint-disable-next-line no-param-reassign
		acc[key] =
			(typeof value === 'object' &&
				!(value instanceof Date) &&
				JSON.stringify(value)) ||
			value;
		return acc;
	}, {});

/**
 * Parses stringified objects before passing them to the client
 * @param {Object} props Properties returned from the firebase request
 * @param {Array<String>} keys List of keys that need their value string parsed as JSON object
 */
const fromFirestore = (props, keys) =>
	Object.keys(props).reduce((acc, key) => {
		const value = props[key];
		// eslint-disable-next-line no-param-reassign
		acc[key] =
			(keys.includes(key) && JSON.parse(value)) ||
			(value instanceof firebase.default.firestore.Timestamp &&
				value.toDate()) ||
			value;
		return acc;
	}, {});

const mapFromFireStore = (keys = []) => props => fromFirestore(props, keys);

export {
	sortByFirebaseDate,
	// getDateFromFirebaseObject,
	toFirestore,
	fromFirestore,
	mapFromFireStore,
};
