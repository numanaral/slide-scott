import React, { forwardRef } from 'react';
import Avatar from 'avataaars';

import { propTypes, defaultProps } from './types';

const Bitmoji = forwardRef((props, ref) => <Avatar {...props} ref={ref} />);

Bitmoji.propTypes = propTypes;
Bitmoji.defaultProps = defaultProps;

export default Bitmoji;
