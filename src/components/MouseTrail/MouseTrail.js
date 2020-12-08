/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/** @see https://noahyamamoto.com/blog/mousetrailanimation */
/* eslint-disable react/state-in-constructor */
// eslint-disable-next-line max-classes-per-file
import React from 'react';

/* Mouse trail adapted from a jQuery Codepen by Bryan C https://codepen.io/bryjch/pen/QEoXwA */

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.lifetime = 0;
	}
}

class MouseTrail extends React.Component {
	state = {
		cHeight: 0,
		cWidth: 0,
	};

	canvas = React.createRef();

	points = [];

	addPoint = (x, y) => {
		const point = new Point(x, y);
		this.points.push(point);
	};

	componentDidMount = () => {
		// Set height and width on load because if set in state body isn't defined yet.
		this.setState({
			cHeight: document.body.clientHeight,
			cWidth: document.body.clientWidth,
		});

		window.addEventListener(
			'resize',
			() => {
				this.setState({
					cHeight: document.body.clientHeight,
					cWidth: document.body.clientWidth,
				});
			},
			false
		);

		// If the device supports cursors, start animation.
		if (matchMedia('(pointer:fine)').matches) {
			this.startAnimation();
		}
	};

	componentDidUpdate = () => {
		const { points } = this.props;
		if (points) {
			const { x, y } = points;
			this.addPoint(x, y);
		}
	};

	startAnimation = () => {
		const canvas = this.canvas.current;
		const ctx = canvas.getContext('2d');

		if (!this.props.points) {
			document.addEventListener(
				'mousemove',
				({ clientX, clientY }) => {
					this.addPoint(
						clientX - canvas.offsetLeft,
						clientY - canvas.offsetTop
					);

					// eslint-disable-next-line react/destructuring-assignment, react/prop-types
					this.props.onMouseMove?.(
						clientX - canvas.offsetLeft,
						clientY - canvas.offsetTop
					);
				},
				false
			);
		}

		const animatePoints = () => {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			const duration = (0.7 * (1 * 1000)) / 60; // Last 80% of a frame per point

			for (let i = 0; i < this.points.length; ++i) {
				const point = this.points[i];
				let lastPoint;

				if (this.points[i - 1] !== undefined) {
					lastPoint = this.points[i - 1];
				} else lastPoint = point;

				point.lifetime += 1;

				if (point.lifetime > duration) {
					// If the point dies, remove it.
					this.points.shift();
				} else {
					// Otherwise animate it:

					// As the lifetime goes on, lifePercent goes from 0 to 1.
					const lifePercent = point.lifetime / duration;
					const spreadRate = 7 * (1 - lifePercent);

					ctx.lineJoin = 'round';
					ctx.lineWidth = spreadRate;

					// As time increases decrease r and b, increase g to go from purple to green.
					const red = Math.floor(255 - 255 * lifePercent);
					const green = 178;
					const blue = Math.floor(73 + 73 * lifePercent);
					ctx.strokeStyle = `rgb(${red},${green},${blue}`;

					ctx.beginPath();

					ctx.moveTo(lastPoint.x, lastPoint.y);
					ctx.lineTo(point.x, point.y);

					ctx.stroke();
					ctx.closePath();
				}
			}
			requestAnimationFrame(animatePoints);
		};

		animatePoints();
	};

	render = () => {
		const { cHeight, cWidth } = this.state;

		return (
			<canvas
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					zIndex: 1,
					pointerEvents: 'none',
				}}
				ref={this.canvas}
				width={cWidth}
				height={cHeight}
			/>
		);
	};
}

export default MouseTrail;
