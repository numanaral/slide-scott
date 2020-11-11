import React from 'react';
import baseLoadable from '@loadable/component';

import LoadingIndicator from 'components/LoadingIndicator';

/**
 * @typedef FallbackSizeOptions <LoadingIndicator /> size options
 * @property {String} size <LoadingIndicator /> size
 * - 'small' | 'medium' | 'large'
 * - defaults to medium
 * @property {String} noFallback If you don't want a fallback option
 * - true | false
 * - defaults to false
 */

/**
 * Creates lazily loadable component with default fallback using the
 * <LoadingIndicator />
 *
 * @example
 * ```js
 * // Default - creates medium sized <LoadingIndicator /> as a fallback
 * const LazySomeComponent = loadable(() => import('components/SomeComponent'));
 * const Container = () => <LazySomeComponent />;
 *
 * // Custom Size - creates large sized <LoadingIndicator /> as a fallback
 * const LazySomeComponent = loadable(() => import('components/SomeComponent'), { size: 'large' });
 * const Container = () => <LazySomeComponent />;
 *
 * // Custom Fallback - uses custom component passed in as the fallback
 * const LazySomeComponent = loadable(() => import('components/SomeComponent'), { fallback: <MyCustomLoadingIndicator /> });
 * const Container = () => <LazySomeComponent />;
 *
 * // No fallback - does not create a loading indicator as a fallback
 * const LazySomeComponent = loadable(() => import('components/SomeComponent'), { noFallback: true });
 * const Container = () => <LazySomeComponent />;
 *
 * // Shared Component - prevents caching when different instantiations are needed based on the given key and passed in prop
 * const LazySharedComponent = loadable(() => import('components/SharedComponent'), { cacheKey: 'entity'});
 * const ContainerA = () => <LazySharedComponent entity="A" />;
 * const ContainerB = () => <LazySharedComponent entity="B" />;
 *
 * ```
 *
 * @param {Function} loadFn Import function, eg:
 * - () => import('components/SomeComponent')
 * @param {import('@loadable/component').OptionsWithoutResolver|FallbackSizeOptions} fallback Loadable options
 * - Leaving this empty will result in the following options object to be passed in
 * - {
 *		fallback: <LoadingIndicator size={options.size || 'medium'} />,
 *	}
 * - Otherwise, you can provide OptionsWithoutResolver & FallbackSizeOptions:
 * - fallback, cacheKey, size, noFallback
 */
const loadable = (loadFn, { fallback, cacheKey, size, noFallback } = {}) => {
	const fallbackOption = {
		...((noFallback && {}) || {
			fallback: fallback || <LoadingIndicator size={size || 'medium'} />,
		}),
	};
	const options = {
		...(cacheKey && { cacheKey }),
		...fallbackOption,
	};

	return baseLoadable(loadFn, options);
};

export default loadable;
