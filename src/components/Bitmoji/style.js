import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 400px;
	margin: auto;
	background: #f3f3f3;
	margin-top: 20px;
	padding: 20px 0;
`;

const Pieces = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin: 5px;
	height: 100px;
	width: 100px;
	cursor: pointer;

	${({ theme }) => `
		background-color: ${theme.palette.background.paper};
		border-radius: ${theme.shape.borderRadius}px;
		box-shadow: ${theme.shadows[3]};
		transition: ${theme.transitions.create(
			['transform', 'box-shadow', 'background-color'],
			{
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}
		)};

		:hover {
			background-color: ${
				theme.palette.primary[
					(theme.palette.type === 'dark' && 'dark') || 'light'
				]
			};
			transform: scale(1.2);
			box-shadow: ${theme.shadows[5]};
		}
	`}
`;

const Color = styled.div`
	display: inline-block;
	height: 40px;
	width: 40px;
	margin: 5px;
	cursor: pointer;

	[color='#FFFFFF'] {
		border: 1px solid #ccc;
	}

	${({ theme, $color }) => `
		background-color: ${$color};
		border-radius: ${theme.shape.borderRadius}px;
		box-shadow: ${theme.shadows[3]};
		transition: ${theme.transitions.create(
			['transform', 'box-shadow', 'background-color'],
			{
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}
		)};

		:hover {
			transform: scale(1.2);
			box-shadow: ${theme.shadows[5]};
		}
	`}
`;

const None = styled.div`
	opacity: 0.2;
	font-size: 11px;
	position: absolute;
	top: 20px;
	left: 9px;
`;

const ColorContainer = styled.div`
	padding: 20px;
`;

const Tab = styled.div`
	font-size: 12px;
	text-align: center;
	border: 1px solid transparent;
	padding: 4px;
	border-radius: 4px;
	cursor: pointer;
	color: #007bff;

	${({ selectedTab, type }) =>
		selectedTab === type &&
		`
			background: #007bff;
			color: white;
		`}
`;

const Tabs = styled.div`
	box-sizing: border-box;
	display: block;
	position: absolute;
	right: 50px;
	top: 8px;
	width: 100px;
`;

const TabPanes = styled.div`
	box-sizing: border-box;
	display: inline-block;
	width: 400px;
`;

const TabPane = styled.div`
	box-sizing: border-box;
	display: none;
	width: 100%;
	padding: 0 10px 10px;

	display: flex;
	align-items: center;
	justify-items: center;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
`;

export {
	Container,
	Pieces,
	Color,
	None,
	Tab,
	Tabs,
	ColorContainer,
	TabPanes,
	TabPane,
};
