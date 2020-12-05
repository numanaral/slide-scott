const sortByFirebaseDate = (sort = 'desc') => (a, b) =>
	((sort === 'desc' && 1) || -1) * a.updatedOn.seconds - b.updatedOn.seconds;

const getDateFromFirebaseObject = obj => new Date(obj.seconds * 1000);

export { sortByFirebaseDate, getDateFromFirebaseObject };
