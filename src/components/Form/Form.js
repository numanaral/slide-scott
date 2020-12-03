import React, { useRef, useEffect, createRef } from 'react';
import styled from 'styled-components';
import { FormGroup, Grid, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import TooltipButton from 'components/TooltipButton';
import Spacer from 'components/Spacer';

const StyledTextField = styled(TextField)`
	${({ theme }) => `
		margin-bottom: ${theme.spacing(2)}px;
	`}
`;

const FORM_COMPONENT_TYPES = {
	TEXT: 'text',
};

const { TEXT } = FORM_COMPONENT_TYPES;

const COMPONENTS = {
	[TEXT]: StyledTextField,
};

// TODO: Keep the form simple for now
/* eslint-disable react/prop-types */
const Form = ({
	items,
	schema,
	onSubmit,
	defaultValues,
	submitText = 'Submit',
}) => {
	const { control, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
		defaultValues,
	});

	// For auto-focusing on the first error
	const inputRefs = useRef({});
	useEffect(() => {
		items.forEach(({ name }) => {
			inputRefs.current[name] = createRef();
		});
	}, []);
	const onInvalid = err => {
		const errorKeys = Object.keys(err);
		if (errorKeys.length) {
			const refName = errorKeys[0];
			if (inputRefs.current[refName].current) {
				inputRefs.current[refName].current.focus();
				return;
			}
			// Give just enough time for refs to load
			setTimeout(() => {
				inputRefs.current[refName].current.focus();
			}, 100);
		}
	};

	const getRequiredField = fieldName => {
		const props = {
			required: true,
			rules: { required: true },
		};

		const field = errors[fieldName];

		if (field) {
			props.helperText = `${field.message}`;
			props.error = true;
		}

		return props;
	};

	useEffect(() => {});

	return (
		<form
			onSubmit={handleSubmit(onSubmit, onInvalid)}
			noValidate
			autoComplete="off"
		>
			<Spacer direction="bottom" spacing="2" />
			{items.map(
				({
					type,
					name,
					label,
					required = false,
					defaultValue = '',
					variant = 'outlined',
				}) => {
					const As = COMPONENTS[type];
					const ref = inputRefs.current[name];
					return (
						<FormGroup key={name}>
							<Controller
								as={<As inputRef={ref} />}
								control={control}
								defaultValue={defaultValue}
								name={name}
								label={label}
								variant={variant}
								{...(required && getRequiredField(name))}
							/>
						</FormGroup>
					);
				}
			)}
			<Spacer direction="bottom" spacing="2" />
			<ContainerWithCenteredItems container>
				<Grid container justify="center" item xs={12} sm={8} md={6}>
					<TooltipButton
						tooltip={submitText}
						text={submitText}
						type="submit"
						fullWidth
						bg="primary"
						variant="contained"
					/>
				</Grid>
			</ContainerWithCenteredItems>
		</form>
	);
};

export { FORM_COMPONENT_TYPES };
export default Form;
