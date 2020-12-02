import React from 'react';
import styled from 'styled-components';
import {
	Divider,
	FormGroup,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import LoadingIndicator from 'components/LoadingIndicator';
import { GithubIcon, GoogleIcon, SadIcon } from 'icons';
import ResponsiveCenteredContainer from 'components/ResponsiveCenteredContainer';
import TooltipButton from 'components/TooltipButton';
import useLogin from 'store/firebase/hooks/useLogin';
import Spacer from 'components/Spacer';
import { BASE_PATH } from 'routes/constants';
import PrettyLink from 'components/PrettyLink';
import { string } from 'prop-types';
import { routerBasePropTypes, routerBaseDefaultProps } from './types';

const StyledSadIcon = styled(SadIcon)`
	font-size: 3rem;
	margin-left: 10px;
`;

const StyledTextField = styled(TextField)`
	${({ theme }) => `
		margin-bottom: ${theme.spacing(2)}px;
	`}
`;

const loginSchema = yup.object().shape({
	email: yup.string().email().label('Email').required(),
	password: yup
		.string()
		.label('Password')
		// .min(8)
		// .max(16)
		// .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
		.required(),
});

const StyledDivider = styled(Divider)`
	width: 40%;
	${({ theme }) => `
		margin: ${theme.spacing(5, 0)};
	`}
`;
const StyledSpan = styled(Typography)`
	text-align: center;
	width: 20%;
`;

const StyledPaperContainerWithSpacing = styled(PaperContainerWithSpacing)`
	${({ theme }) => `
		background-color: ${theme.palette.background.level2};
	`}
`;

const LoginContainer = ({ returnUrl }) => {
	const { googleLogin, githubLogin, emailLogin } = useLogin();

	const { control, handleSubmit, watch, errors } = useForm({
		resolver: yupResolver(loginSchema),
	});
	const onSubmit = data => emailLogin(data);

	const getRequiredField = fieldName => {
		const props = {
			required: true,
			rules: { required: true },
		};

		const field = errors[fieldName];
		console.log(field);
		if (field) {
			props.helperText = `${field.message}`;
			props.error = true;
		}

		return props;
	};

	return (
		<ResponsiveCenteredContainer>
			<StyledPaperContainerWithSpacing padding="80px">
				<Spacer direction="top" spacing="4" />
				<ContainerWithCenteredItems>
					<Typography component="h1" variant="h5">
						Login with your social account
					</Typography>
					<Spacer direction="top" spacing="2" />
					<ContainerWithCenteredItems>
						<TooltipButton
							tooltip="Login with Google"
							onClick={googleLogin}
							icon={<GoogleIcon size="lg" />}
							fontSize="large"
						/>
						<TooltipButton
							tooltip="Login with Github"
							onClick={githubLogin}
							icon={<GithubIcon size="lg" />}
							fontSize="large"
						/>
					</ContainerWithCenteredItems>
				</ContainerWithCenteredItems>

				<ContainerWithCenteredItems
					container
					alignItems="center"
					justify="space-between"
					style={{ width: '100%' }}
				>
					<StyledDivider />
					<StyledSpan>OR</StyledSpan>
					<StyledDivider />
				</ContainerWithCenteredItems>
				{/* TODO: DEFINITELY need to abstract this and create a Wrapper */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					autoComplete="off"
				>
					<FormGroup>
						<ContainerWithCenteredItems>
							<Typography component="h1" variant="subtitle1">
								Login with your site account
							</Typography>
						</ContainerWithCenteredItems>
					</FormGroup>
					<Spacer direction="bottom" spacing="2" />
					<FormGroup>
						<Controller
							as={StyledTextField}
							control={control}
							defaultValue=""
							name="email"
							label="Email"
							variant="outlined"
							{...getRequiredField('email')}
						/>
					</FormGroup>
					<FormGroup>
						<Controller
							as={StyledTextField}
							control={control}
							defaultValue=""
							type="password"
							name="password"
							label="Password"
							variant="outlined"
							required
							rules={{ required: true }}
							{...getRequiredField('password')}
						/>
					</FormGroup>
					<Spacer direction="bottom" spacing="2" />
					<ContainerWithCenteredItems container>
						<Grid
							container
							justify="center"
							item
							xs={12}
							sm={8}
							md={6}
						>
							<TooltipButton
								tooltip="Login"
								text="Login"
								type="submit"
								fullWidth
								bg="primary"
								variant="contained"
							/>
						</Grid>
					</ContainerWithCenteredItems>
				</form>
				<Spacer direction="bottom" spacing="4" />
				<ContainerWithCenteredItems>
					<Typography component="span">
						Don&apos;t have an account yet? You can register{' '}
						<Typography
							component={PrettyLink}
							to={`${BASE_PATH}/register?returnUrl=${returnUrl}`}
						>
							{' '}
							here{' '}
						</Typography>
						.
					</Typography>
				</ContainerWithCenteredItems>
				<Spacer direction="bottom" spacing="4" />
			</StyledPaperContainerWithSpacing>
		</ResponsiveCenteredContainer>
	);
};

LoginContainer.propTypes = {
	returnUrl: string,
};
LoginContainer.defaultProps = {
	returnUrl: '',
};

const Login = ({ history, location, error, authorizing, user, ...rest }) => {
	const returnUrl = location?.search.replace('?returnUrl=', '');

	// If user is logged in, redirect them back to the appropriate url
	if (!authorizing && user.displayName) {
		// TODO: Once this gets complex - if ever -, use qs
		history.push(returnUrl);
	}

	return (
		<ContainerWithCenteredItems horizontal vertical>
			{(authorizing && (
				<Grid container alignItems="center" justify="center">
					<Typography variant="h3" component="h1">
						{(error && 'AUTHENTICATION FAILED') || 'AUTHENTICATING'}
					</Typography>
					{(error && <StyledSadIcon />) || <LoadingIndicator />}
				</Grid>
			)) || <LoginContainer returnUrl={returnUrl} />}
			{error && (
				<Grid>
					<br />
					<Divider />
					<br />
					<Typography>{error}</Typography>
					<br />
					<Divider />
				</Grid>
			)}
		</ContainerWithCenteredItems>
	);
};

Login.propTypes = routerBasePropTypes;
Login.defaultProps = routerBaseDefaultProps;

export default Login;
