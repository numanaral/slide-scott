import * as yup from 'yup';

import { FORM_COMPONENT_TYPES } from 'components/Form';
import {
	TextQuestionIcon,
	MultipleChoiceQuestionIcon,
	ImageIcon,
	VideoIcon,
	AudioIcon,
	TextIcon,
	LinkIcon,
	BitmojiIcon,
	ChatBubbleIcon,
	// ShapeIcon,
} from 'icons';
import MultipleChoiceQuestion from './components/MultipleChoiceQuestion';
import TextQuestion from './components/TextQuestion';
import Image from './components/Image';
import Video from './components/Video';
import Audio from './components/Audio';
import Link from './components/Link';
import Text from './components/Text';
import Bitmoji from './components/Bitmoji';
import ChatBubble from './components/ChatBubble';
// import Shape from './components/Shape';

const TOOL_TYPES = {
	TEXT_QUESTION: 'textQuestion',
	MULTIPLE_CHOICE_QUESTION: 'multipleChoiceQuestion',
	IMAGE: 'image',
	VIDEO: 'video',
	AUDIO: 'audio',
	LINK: 'link',
	TEXT: 'text',
	BITMOJI: 'bitmoji',
	CHAT_BUBBLE: 'chatBubble',
	// SHAPE: 'shape'
};

const {
	TEXT_QUESTION,
	MULTIPLE_CHOICE_QUESTION,
	IMAGE,
	VIDEO,
	AUDIO,
	LINK,
	TEXT,
	BITMOJI,
	CHAT_BUBBLE,
	// SHAPE
} = TOOL_TYPES;

const TOOL_COMPONENTS = {
	[TEXT_QUESTION]: TextQuestion,
	[MULTIPLE_CHOICE_QUESTION]: MultipleChoiceQuestion,
	[IMAGE]: Image,
	[VIDEO]: Video,
	[AUDIO]: Audio,
	[LINK]: Link,
	[TEXT]: Text,
	[BITMOJI]: Bitmoji,
	[CHAT_BUBBLE]: ChatBubble,
	// [SHAPE]: Shape,
};

const TOOLS_SETTINGS = {
	INTERACTABLE: {
		TEXT: {
			icon: TextQuestionIcon,
			name: 'Q & A',
			type: TOOL_TYPES.TEXT_QUESTION,
			items: [
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Question',
					name: 'question',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Correct Answer',
					name: 'correctAnswer',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.CHECKBOX,
					label: 'Display background',
					name: 'hasBg',
					defaultValue: true,
				},
				{
					type: FORM_COMPONENT_TYPES.COLOR_PICKER,
					label: 'Background color',
					name: 'bg',
				},
			],
			schema: yup.object().shape({
				question: yup.string().label('Question').required(),
				correctAnswer: yup.string().label('Correct Answer').required(),
				hasBg: yup.boolean().label('Display background'),
				bg: yup.string().label('Background color'),
			}),
		},
		MULTIPLE_CHOICE: {
			icon: MultipleChoiceQuestionIcon,
			name: 'Multiple Choice',
			type: TOOL_TYPES.MULTIPLE_CHOICE_QUESTION,
			items: [
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Question',
					name: 'question',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Answer A',
					name: 'answerA',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Answer B',
					name: 'answerB',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Answer C',
					name: 'answerC',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Answer D',
					name: 'answerD',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Correct Answer',
					name: 'correctAnswer',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.CHECKBOX,
					label: 'Display background',
					name: 'hasBg',
					defaultValue: true,
				},
				{
					type: FORM_COMPONENT_TYPES.COLOR_PICKER,
					label: 'Background color',
					name: 'bg',
				},
			],
			schema: yup.object().shape({
				question: yup.string().label('Question').required(),
				answerA: yup.string().label('Answer A').required(),
				answerB: yup.string().label('Answer B').required(),
				answerC: yup.string().label('Answer C').required(),
				answerD: yup.string().label('Answer D').required(),
				correctAnswer: yup
					.string()
					.label('Correct Answer')
					.length(1)
					.oneOf(['A', 'B', 'C', 'D', 'a', 'b', 'c', 'd'])
					.required(),
				hasBg: yup.boolean().label('Display background'),
				bg: yup.string().label('Background color'),
			}),
		},
	},
	STATIC: {
		IMAGE: {
			icon: ImageIcon,
			name: 'Image',
			type: TOOL_TYPES.IMAGE,
			items: [
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Source Url',
					name: 'src',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Alternative Text',
					name: 'alt',
					required: true,
				},
			],
			schema: yup.object().shape({
				src: yup.string().url().label('Image Url').required(),
				alt: yup.string().label('Image alternative text').required(),
			}),
		},
		VIDEO: {
			icon: VideoIcon,
			name: 'Video',
			type: TOOL_TYPES.VIDEO,
			items: [
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Source Url',
					name: 'src',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Alternative Text',
					name: 'alt',
					required: true,
				},
			],
			schema: yup.object().shape({
				src: yup.string().url().label('Video Url').required(),
				alt: yup.string().label('Video alternative text').required(),
			}),
		},
		AUDIO: {
			icon: AudioIcon,
			name: 'Audio',
			type: TOOL_TYPES.AUDIO,
			items: [
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Source Url',
					name: 'src',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Alternative Text',
					name: 'alt',
					required: true,
				},
			],
			schema: yup.object().shape({
				src: yup.string().url().label('Audio Url').required(),
				alt: yup.string().label('Audio alternative text').required(),
			}),
		},
		LINK: {
			icon: LinkIcon,
			name: 'Link',
			type: TOOL_TYPES.LINK,
			items: [
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Url',
					name: 'url',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Display Text',
					name: 'displayText',
					required: true,
				},
			],
			schema: yup.object().shape({
				url: yup.string().url().label('Link Url').required(),
				displayText: yup.string().label('Display Text').required(),
			}),
		},
		TEXT: {
			icon: TextIcon,
			name: 'Text',
			type: TOOL_TYPES.TEXT,
			items: [
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Text',
					name: 'text',
					required: true,
				},
				{
					type: FORM_COMPONENT_TYPES.CHECKBOX,
					label: 'Display background',
					name: 'hasBg',
					defaultValue: true,
				},
				{
					type: FORM_COMPONENT_TYPES.COLOR_PICKER,
					label: 'Background color',
					name: 'bg',
				},
			],
			schema: yup.object().shape({
				text: yup.string().label('Text').required(),
				hasBg: yup.boolean().label('Display background'),
				bg: yup.string().label('Background color'),
			}),
		},
		BITMOJI: {
			icon: BitmojiIcon,
			name: 'Bitmoji',
			type: TOOL_TYPES.BITMOJI,
		},
		CHAT_BUBBLE: {
			icon: ChatBubbleIcon,
			name: 'Chat Bubble',
			type: TOOL_TYPES.CHAT_BUBBLE,
			items: [
				{
					type: FORM_COMPONENT_TYPES.TEXT,
					label: 'Text',
					name: 'text',
					required: true,
				},
			],
			schema: yup.object().shape({
				text: yup.string().label('Text').required(),
			}),
		},
	},
};

const TOOLS = {
	[TEXT_QUESTION]: {
		settings: TOOLS_SETTINGS.INTERACTABLE.TEXT,
		interactive: true,
	},
	[MULTIPLE_CHOICE_QUESTION]: {
		settings: TOOLS_SETTINGS.INTERACTABLE.MULTIPLE_CHOICE,
		interactive: true,
	},
	[BITMOJI]: {
		settings: TOOLS_SETTINGS.STATIC.BITMOJI,
	},
	[TEXT]: {
		settings: TOOLS_SETTINGS.STATIC.TEXT,
	},
	[CHAT_BUBBLE]: {
		settings: TOOLS_SETTINGS.STATIC.CHAT_BUBBLE,
	},
	[LINK]: {
		settings: TOOLS_SETTINGS.STATIC.LINK,
	},
	[IMAGE]: {
		settings: TOOLS_SETTINGS.STATIC.IMAGE,
	},
	[VIDEO]: {
		settings: TOOLS_SETTINGS.STATIC.VIDEO,
	},
	[AUDIO]: {
		settings: TOOLS_SETTINGS.STATIC.AUDIO,
	},
	// [SHAPE]: {
	// 	settings: TOOLS_SETTINGS.STATIC.SHAPE,
	// },
};

export { TOOL_TYPES, TOOL_COMPONENTS, TOOLS_SETTINGS };
export default TOOLS;
