import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import loadable from 'utils/loadable';

export {
	WbSunny as LightThemeIcon,
	Brightness2 as DarkThemeIcon,
	SentimentVeryDissatisfied as SadIcon,
	AccountCircleRounded as AccountIcon,
	Assessment as AnalyticsIcon,
	Bookmarks as BookmarksIcon,
	MoreVert as MoreItemsIcon,
	Favorite as HeartIcon,
	Share as ShareIcon,
	Create as EditIcon,
	Delete as DeleteIcon,
	Star as StarIcon,
	FeaturedPlayList as TemplateIcon,
	// Temp on the preferences
	SlowMotionVideo as AnimationIcon,
	SettingsBrightness as ThemeIcon,
	Palette as PaletteIcon,
} from '@material-ui/icons';

const LazyIcon = loadable(async ({ name }) => {
	const { [name]: Icon } = await import(`@material-ui/icons`);

	return props => <Icon {...props} />;
});
export { LazyIcon };

const GoogleIcon = props => <FontAwesomeIcon icon={faGoogle} {...props} />;
const GithubIcon = props => <FontAwesomeIcon icon={faGithub} {...props} />;
const LayerIcon = props => <FontAwesomeIcon icon={faLayerGroup} {...props} />;
export { GoogleIcon, GithubIcon, LayerIcon };
