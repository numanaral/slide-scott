import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { string } from 'prop-types';
import styled from 'styled-components';
import * as yup from 'yup';

import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import PrettyLink from 'components/PrettyLink';
import Spacer from 'components/Spacer';
import useLocalStorage from 'hooks/useLocalStorage';
import useDialogProvider from 'store/redux/hooks/useDialogProvider';
import Form, { FORM_COMPONENT_TYPES } from 'components/Form';
import TooltipButton from 'components/TooltipButton';
import { AddIcon, DeleteIcon, EditIcon } from 'icons';
import { editItemInArray, removeItemInArray } from 'utils/object';

const Wrapper = styled.div`
	${({ theme }) => `
		color: ${theme.palette.text.primary};
	`}
`;

/* eslint-disable max-len */
const EDUCATOR_RESOURCES = [
	{
		linkName: 'AdLit.org',
		link: 'http://www.adlit.org/',
		description:
			'Adolescent literacy resources for parents and educators of kids in grades 4-12.',
		imageLink: 'https://www.refseek.com/data/logos/adlit.png',
		imageAlt: 'AdLit.org',
	},
	{
		linkName: 'Brainscape',
		link: 'https://www.brainscape.com/',
		description:
			'Browse flashcards sets or create your own and share them with students.',
		imageLink: 'https://www.refseek.com/data/logos/brainscape.png',
		imageAlt: 'Brainscape',
	},
	{
		linkName: 'ClassDojo',
		link: 'https://www.classdojo.com/',
		description:
			'Classroom communication and collaboration app connecting teachers, parents, and students.',
		imageLink: 'https://www.refseek.com/data/logos/classdojo.png',
		imageAlt: 'ClassDojo',
	},
	{
		linkName: 'Discovery Education',
		link: 'https://www.discoveryeducation.com/',
		description:
			'Lesson plans, student activities, and video clips for teachers.',
		imageLink: 'https://www.refseek.com/data/logos/discovery.png',
		imageAlt: 'Discovery Education',
	},
	{
		linkName: 'Ed Helper',
		link: 'https://www.edhelper.com/',
		description: 'Teacher resources organized by subject matter and grade.',
		imageLink: 'https://www.refseek.com/data/logos/edhelper.png',
		imageAlt: 'Ed Helper',
	},
	{
		linkName: 'EdShelf',
		link: 'https://edshelf.com/',
		description:
			'Socially-curated directory of education websites, mobile apps, and desktop programs.',
		imageLink: 'https://www.refseek.com/data/logos/edshelf.png',
		imageAlt: 'EdShelf',
	},
	{
		linkName: 'EDSITEment',
		link: 'https://edsitement.neh.gov/',
		description:
			'Information on the humanities for parents, students, and teachers.',
		imageLink: 'https://www.refseek.com/data/logos/edsitement.png',
		imageAlt: 'EDSITEment',
	},
	{
		linkName: 'Education World',
		link: 'https://www.educationworld.com/',
		description:
			'Offers lesson plans, educator profiles, daily columns, and more.',
		imageLink: 'https://www.refseek.com/data/logos/educationworld.png',
		imageAlt: 'Education World',
	},
	{
		linkName: 'Edutopia',
		link: 'https://www.edutopia.org/',
		description:
			'Parenting tips and advice as well as educational activities and ideas.',
		imageLink: 'https://www.refseek.com/data/logos/edutopia.png',
		imageAlt: 'Edutopia',
	},
	{
		linkName: 'HippoCampus',
		link: 'https://www.hippocampus.org/',
		description:
			'Multimedia lessons and course materials to assist students in self-study.',
		imageLink: 'https://www.refseek.com/data/logos/hippocampus.png',
		imageAlt: 'HippoCampus',
	},
	{
		linkName: 'Kahoot',
		link: 'https://kahoot.com/',
		description: 'Free game-based classroom learning platform that make.',
		imageLink: 'https://www.refseek.com/data/logos/kahoot.png',
		imageAlt: 'Kahoot',
	},
	{
		linkName: 'Learning A-Z (Subscription)',
		link: 'https://www.learninga-z.com/',
		description:
			'Source for a broad selection of professional online curriculum materials.',
		imageLink: 'https://www.refseek.com/data/logos/learningaz.png',
		imageAlt: 'Learning A-Z (Subscription)',
	},
	{
		linkName: 'Open Educational Resources',
		link: 'https://www.oercommons.org/',
		description:
			'Network where teachers and professors can access and share course materials.',
		imageLink: 'https://www.refseek.com/data/logos/oer.png',
		imageAlt: 'Open Educational Resources',
	},
	{
		linkName: 'OpenLearn',
		link: 'http://www.open.edu/openlearn/',
		description: 'Free access to Open University course materials.',
		imageLink: 'https://www.refseek.com/data/logos/openlearn.png',
		imageAlt: 'OpenLearn',
	},
	{
		linkName: 'PBS Learning Media',
		link: 'https://www.pbslearningmedia.org/',
		description: 'High quality classroom materials for preK-12 education.',
		imageLink: 'https://www.refseek.com/data/logos/pbs.png',
		imageAlt: 'PBS Learning Media',
	},
	{
		linkName: 'Quizlet',
		link: 'http://quizlet.com/',
		description:
			'Well designed site where students can create and share flash card sets.',
		imageLink: 'https://www.refseek.com/data/logos/quizlet.png',
		imageAlt: 'Quizlet',
	},
	{
		linkName: 'Reading Rockets',
		link: 'https://www.readingrockets.org/',
		description:
			'Research-based strategies for helping young children become strong, confident readers.',
		imageLink: 'https://www.refseek.com/data/logos/readingrockets.png',
		imageAlt: 'Reading Rockets',
	},
	{
		linkName: 'ReadWrite Think',
		link: 'http://www.readwritethink.org/',
		description:
			'Lesson plans, student interactives, and professional development resources.',
		imageLink: 'https://www.refseek.com/data/logos/rwt.png',
		imageAlt: 'ReadWrite Think',
	},
	{
		linkName: 'Scholastic For Teachers',
		link: 'http://www.scholastic.com/teachers',
		description:
			'Lesson plans, student activities, and video clips for teachers.',
		imageLink: 'https://www.refseek.com/data/logos/scholastic.png',
		imageAlt: 'Scholastic For Teachers',
	},
	{
		linkName: 'Socrative',
		link: 'https://socrative.com/',
		description:
			'Assess students with activities or real time questions for insight into student understanding',
		imageLink: 'https://www.refseek.com/data/logos/socrative.png',
		imageAlt: 'Socrative',
	},
	{
		linkName: 'Super Teacher Worksheets',
		link: 'https://www.superteacherworksheets.com/',
		description:
			'Printable worksheets and activities for teachers, parents, tutors, and homeschool families.',
		imageLink: 'https://www.refseek.com/data/logos/stw.png',
		imageAlt: 'Super Teacher Worksheets',
	},
	{
		linkName: 'SuperSTAAR',
		link: 'http://superstaar.org/',
		description:
			'Science teaching and assessment resources from Baylor College of Medicine.',
		imageLink: 'https://www.refseek.com/data/logos/superstaar.png',
		imageAlt: 'SuperSTAAR',
	},
	{
		linkName: 'Teacher Vision',
		link: 'https://www.teachervision.com/',
		description: 'Classroom-ready lesson plans, printables, and resources.',
		imageLink: 'https://www.refseek.com/data/logos/teachervision.png',
		imageAlt: 'Teacher Vision',
	},
	{
		linkName: 'Teachers First',
		link: 'https://www.teachersfirst.com/',
		description:
			'Collection of lessons, units, and web resources in a user-friendly and ad-free format.',
		imageLink: 'https://www.refseek.com/data/logos/teachersfirst.png',
		imageAlt: 'Teachers First',
	},
	{
		linkName: 'Teachers.net',
		link: 'https://teachers.net/',
		description:
			'Social tools, lesson plans, and advice column for teachers.',
		imageLink: 'https://www.refseek.com/data/logos/teachersnet.png',
		imageAlt: 'Teachers.net',
	},
	{
		linkName: 'Teachnology',
		link: 'https://www.teach-nology.com/',
		description:
			'Online resources for educators including worksheets, lesson plans, rubrics, and more.',
		imageLink: 'https://www.refseek.com/data/logos/teachnology.png',
		imageAlt: 'Teachnology',
	},
	{
		linkName: 'TED Ed',
		link: 'https://ed.ted.com/',
		description:
			'Build a lesson around any TED-Ed Original, TED Talk or YouTube video.',
		imageLink: 'https://www.refseek.com/data/logos/ted.png',
		imageAlt: 'TED Ed',
	},
	{
		linkName: 'WNET Education',
		link: 'https://www.wnet.org/education/',
		description:
			'Lesson plans, classroom activities, multimedia, and links to curriculum-based sites.',
		imageLink: 'https://www.refseek.com/data/logos/pbs.png',
		imageAlt: 'WNET Education',
	},
];

const PROFESSIONAL_DEVELOPMENT_RESOURCES = [
	{
		linkName: 'Academia.edu',
		link: 'http://www.academia.edu/',
		description:
			'Social network for academics. Connect and share research.',
		imageLink: 'https://www.refseek.com/data/logos/academia.png',
		imageAlt: 'Academia.edu',
	},
	{
		linkName: 'British Council',
		link: 'https://www.britishcouncil.org/school-resources',
		description:
			'Organization for cultural relations and educational opportunities.',
		imageLink: 'https://www.refseek.com/data/logos/britishcouncil.png',
		imageAlt: 'British Council',
	},
	{
		linkName: 'ERIC',
		link: 'https://eric.ed.gov/',
		description:
			'More than one million journal articles and other education-related materials.',
		imageLink: 'https://www.refseek.com/data/logos/eric3.png',
		imageAlt: 'ERIC',
	},
	{
		linkName: 'Learner.org',
		link: 'https://www.learner.org/',
		description:
			'Teacher resources and professional development programming across the curriculum.',
		imageLink: 'https://www.refseek.com/data/logos/learner.png',
		imageAlt: 'Learner.org',
	},
	{
		linkName: 'National Council of Teachers of English (NCTE)',
		link: 'http://ncte.org/',
		description: 'Professional development resources for English teachers.',
		imageLink: 'https://www.refseek.com/data/logos/ncte.png',
		imageAlt: 'National Council of Teachers of English (NCTE)',
	},
	{
		linkName: 'National Council of Teachers of Mathematics (NCTM)',
		link: 'https://www.nctm.org/',
		description: 'Professional and classroom resources for math teachers.',
		imageLink: 'https://www.refseek.com/data/logos/nctm.png',
		imageAlt: 'National Council of Teachers of Mathematics (NCTM)',
	},
	{
		linkName: 'National Education Association',
		link: 'http://www.nea.org/',
		description: 'Committed to advancing the cause of public education.',
		imageLink: 'https://www.refseek.com/data/logos/nea.png',
		imageAlt: 'National Education Association',
	},
	{
		linkName: 'U.S. Department of Education',
		link: 'https://www.ed.gov/',
		description: 'Educator resources from several federal agencies.',
		imageLink: 'https://www.refseek.com/data/logos/edgov.png',
		imageAlt: 'U.S. Department of Education',
	},
];

/* eslint-enable max-len */

const StyledImg = styled.img`
	max-height: 80px;
	max-width: 80px;
	border-radius: 20px;
`;

/* eslint-disable react/prop-types */
const LinkWrapper = (onEdit, onDelete) => values => {
	const { description, imageLink, imageAlt, link, linkName, id } = values;
	const hasEditAndDelete = onEdit && onDelete;
	return (
		<PaperContainerWithSpacing
			key={id || link}
			containerProps={{ style: { marginBottom: 16 } }}
		>
			<Grid container spacing={3}>
				<Grid item xs="auto">
					<StyledImg src={imageLink} alt={imageAlt} />
				</Grid>
				<Grid container item xs alignContent="space-between">
					<Grid item xs={12}>
						<PrettyLink to={link} external>
							{linkName}
						</PrettyLink>
					</Grid>
					<Grid item xs={12}>
						<Typography>{description}</Typography>
					</Grid>
				</Grid>
				{hasEditAndDelete && (
					<Grid container item xs={1} alignContent="space-between">
						<Grid item xs={12}>
							<TooltipButton
								tooltip="Delete"
								onClick={onDelete(values)}
								icon={DeleteIcon}
							/>
						</Grid>
						<Grid item xs={12}>
							<TooltipButton
								tooltip="Edit"
								onClick={onEdit(values)}
								icon={EditIcon}
							/>
						</Grid>
					</Grid>
				)}
			</Grid>
		</PaperContainerWithSpacing>
	);
};

LinkWrapper.propTypes = {
	description: string.isRequired,
	imageLink: string.isRequired,
	imageAlt: string.isRequired,
	link: string.isRequired,
	linkName: string.isRequired,
	id: string.isRequired,
};
/* enable-disable react/prop-types */

const resourceSchema = yup.object().shape({
	linkName: yup.string().label('Link Name').required(),
	link: yup
		.string()
		// .matches(
		// 	/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		// 	'Incorrect Url'
		// )
		.label('Link Url')
		.required(),
	description: yup.string().label('Description'),
	imageLink: yup
		.string()
		// .matches(
		// 	/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		// 	'Incorrect Url'
		// )
		.label('Image Url'),
	imageAlt: yup.string().label('Image Alternative Text'),
});

const items = [
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'Link Name',
		name: 'linkName',
		required: true,
	},
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'Link Url',
		name: 'link',
		required: true,
	},
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'Description',
		name: 'description',
	},
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'Image Url',
		name: 'imageLink',
	},
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'Image Alternative Text',
		name: 'imageAlt',
	},
];

const USER_RESOURCES_LOCAL_STORAGE_KEY = 'user-resources';

const Resources = () => {
	const {
		openComponentDialog,
		openConfirmDialog,
		closeDialog,
	} = useDialogProvider();
	const [userResources, setUserResources] = useLocalStorage(
		USER_RESOURCES_LOCAL_STORAGE_KEY,
		[
			{
				linkName: 'https://git.io/numanaral',
				link: 'https://git.io/numanaral',
				description: 'Complete portfolio? Not yet, on its way!',
				imageLink:
					'https://avatars3.githubusercontent.com/u/25233323?s=460&u=89298164f17394d22e4a07e6115198e38b5e95f3&v=4',
				imageAlt: 'Numan',
			},
			{
				linkName: 'Chin Scraper - Practice writing in chinese',
				link: 'https://git.io/chin-scraper',
				description: `Practice writing kanji using the animated drawings. When you are ready, jump into the practice mode and start drawing directly inside the app!`,
				imageLink:
					'https://repository-images.githubusercontent.com/307018328/f6186c80-3500-11eb-9d35-467720f048c1',
				imageAlt: 'Numan',
			},
		]
	);

	const onCreateResource = () => {
		openComponentDialog(
			'Add new resource',
			<Form
				schema={resourceSchema}
				items={items}
				onSubmit={data => {
					setUserResources(prev => [
						{ ...data, id: Date.now().toString },
						...prev,
					]);
					closeDialog();
				}}
			/>
		);
	};

	const onEdit = values => () => {
		openComponentDialog(
			'Edit resource',
			<Form
				schema={resourceSchema}
				items={items}
				defaultValues={values}
				submitText="Save"
				onSubmit={data => {
					setUserResources(prev => {
						const index = prev.findIndex(
							resource => resource.id === values.id
						);
						const newResult = editItemInArray(prev, index, data);

						return newResult;
					});
					closeDialog();
				}}
			/>
		);
	};
	const onDelete = values => () => {
		openConfirmDialog(
			'Are you sure you want to delete this resource?',
			() => {
				setUserResources(prev => {
					const index = prev.findIndex(
						resource => resource.id === values.id
					);
					const newResult = removeItemInArray(prev, index);

					return newResult;
				});
			}
		);
	};

	return (
		<Wrapper>
			<Spacer direction="top" spacing="2" />
			<TooltipButton
				tooltip="Add a new resource"
				text="Add new resource"
				bg="primary"
				onClick={onCreateResource}
				icon={AddIcon}
			/>

			<Spacer direction="top" spacing="3" />
			<Typography component="h1" variant="h3">
				Your Resources
			</Typography>
			<Spacer direction="top" spacing="2" />
			{(!!userResources?.length &&
				userResources.map(LinkWrapper(onEdit, onDelete))) || (
				<Typography variant="h5"> N / A</Typography>
			)}

			<Spacer direction="top" spacing="3" />
			<Typography component="h1" variant="h3">
				Educator Resources{' '}
				<PrettyLink
					to="https://www.refseek.com/directory/teacher_resources.html"
					external
				>
					Source
				</PrettyLink>
			</Typography>
			<Spacer direction="top" spacing="2" />
			{EDUCATOR_RESOURCES.map(LinkWrapper())}

			<Spacer direction="top" spacing="5" />
			<Typography component="h1" variant="h3">
				Professional Development{' '}
				<PrettyLink
					to="https://www.refseek.com/directory/teacher_resources.html"
					external
				>
					Source
				</PrettyLink>
			</Typography>
			<Spacer direction="top" spacing="2" />
			{PROFESSIONAL_DEVELOPMENT_RESOURCES.map(LinkWrapper())}
		</Wrapper>
	);
};

export default Resources;
