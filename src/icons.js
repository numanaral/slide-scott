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
	SentimentSatisfied as HappyIcon,
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
	Add as AddIcon,
	Send as SubmitIcon,
	Palette as PaletteIcon,
	Settings as SettingsIcon,
	// Temp on the preferences
	SlowMotionVideo as AnimationIcon,
	SettingsBrightness as ThemeIcon,
	// Modal
	Fullscreen as FullscreenIcon,
	FullscreenExit as ExitFullscreenIcon,
	// Tools
	TextFields as TextQuestionIcon,
	Toc as MultipleChoiceQuestionIcon,
	Image as ImageIcon,
	Movie as VideoIcon,
	Audiotrack as AudioIcon,
	Assignment as TextIcon,
	Link as LinkIcon,
	ChangeHistory as ShapeIcon,
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
