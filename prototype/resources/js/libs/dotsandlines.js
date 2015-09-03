// Dots and lines

$(function() {

	var header = $('.section.development'),
		canvas = $('<canvas></canvas>').prependTo(header)[0],

		ctx = canvas.getContext('2d'),
		color = 'black',
		idle = null,
		mousePosition;

	canvas.width = window.innerWidth;
	canvas.height = 500;
	canvas.style.display = 'block';

	ctx.fillStyle = color;
	ctx.lineWidth = .2;
	ctx.strokeStyle = color;

	var mousePosition = {
			x: .5 * canvas.width,
			y: .5 * canvas.height
		},
		dots = {
			nb: (canvas.width < 640 ? 35 : 200),
			distance: 50,
			d_radius: 150,
			array: []
		};

	function Dot() {
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;

		this.vx = -.5 + Math.random();
		this.vy = -.5 + Math.random();

		this.radius = Math.random() + 1;
	}

	Dot.prototype = {
		create: function() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			ctx.fill();
		},

		animate: function() {

			for (var i = 0, dot = false; i < dots.nb; i++) {

				dot = dots.array[i];

				if (dot.y < 0 || dot.y > canvas.height) {
					dot.vx = dot.vx;
					dot.vy = -dot.vy;
				} else if (dot.x < 0 || dot.x > canvas.width) {
					dot.vx = -dot.vx;
					dot.vy = dot.vy;
				}
				dot.x += dot.vx;
				dot.y += dot.vy;

				ctx.beginPath();
				ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false);
				ctx.fill();
			}
		},

		line: function() {
			for (var i = 0; i < dots.nb; i++) {
				for (var j = 0; j < dots.nb; j++) {
					i_dot = dots.array[i];
					j_dot = dots.array[j];

					if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
						// if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
						ctx.beginPath();
						ctx.moveTo(i_dot.x, i_dot.y);
						ctx.lineTo(j_dot.x, j_dot.y);
						ctx.stroke();
						ctx.closePath();
						// }
					}
				}
			}
		}
	};

	function createDots() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (dots.array.length < dots.nb) {
			for (var i = 0; i < dots.nb; i++) {
				dots.array.push(new Dot());
				dot = dots.array[i];

				console.log('dot created');

				dot.create();
			}
		}


		dot.line();
		dot.animate();

		// console.log(dots.array.length);

		requestAnimationFrame(createDots);
	}



	// idle = setInterval(createDots, 1000/100);

	requestAnimationFrame(createDots);



	// $(canvas).on('mousemove mouseleave', function(e){
	//     if(e.type == 'mousemove'){
	//         mousePosition.x = e.pageX;
	//         mousePosition.y = e.pageY;
	//     }
	//     if(e.type == 'mouseleave'){
	//         mousePosition.x = canvas.width / 2;
	//         mousePosition.y = canvas.height / 2;
	//     }
	// });
});