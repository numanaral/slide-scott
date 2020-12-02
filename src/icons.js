import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

export {
	WbSunny as LightThemeIcon,
	Brightness2 as DarkThemeIcon,
	SentimentVeryDissatisfied as SadIcon,
	AccountCircleRounded as AccountIcon,
} from '@material-ui/icons';

const GoogleIcon = props => <FontAwesomeIcon icon={faGoogle} {...props} />;
const GithubIcon = props => <FontAwesomeIcon icon={faGithub} {...props} />;
export { GoogleIcon, GithubIcon };
