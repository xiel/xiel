( function( $ ) {

	window.nn = window.nn || {};
	window.nn.FBready = $.Deferred();
	window.nn.twttrReady = $.Deferred();

	var nn = window.nn;
	var jspackager = window.jspackager;
	var devmode = window.jspackager && window.jspackager.devmode;
	var historyAPI = window.history && window.history.replaceState ? window.history : false;

	nn.shareText = 'Nicknight wird 1! Gratuliere und gewinne mit etwas Glück ein hammer Partywochenende in Berlin!';

	var projectInit = {
		immediate: function() {

			loadSM();
			// startOmniture();

		},

		domReadyOnce: function() {
			initScrollUp();
			startGeneralModal();
		},

		everyDomReady: function( context ) {

			startGallery( context );
			startRegForm( context );
			equalizeElements( context );

			$( '.photobooth', context ).photobooth();
			$( '.photobooth-effects', context ).canvasFilters();

			$( '.welcome-stage', context ).each( function() {
				var welcomeStage = $( this );
				var stageOverlay = $( '.welcome-stage__overlay', welcomeStage ).first();
				var video = $( 'video', stageOverlay ).first();

				welcomeStage.on( 'click', function( e ) {
					if ( !stageOverlay.hasClass( 'visible' ) ) {
						stageOverlay.addClass( 'visible' );
						video.play();
					}
					e.preventDefault();
				} );

				welcomeStage.on( 'click', '.mask_close', function( e ) {
					stageOverlay.removeClass( 'visible' );
					video.pause();
					video.stop();
					e.stopPropagation();
					e.preventDefault();
				} )
			} );

			$( '.mask', context ).each( function() {
				var mask = $( this );

				$( document ).on( 'keyup', function( e ) {
					if ( e.keyCode === 27 && mask.hasClass( 'visible' ) ) {
						closeMask();
					}
				} );

				$( '.mask_close', mask ).on( 'click', function() {
					closeMask();
				} );

				function closeMask() {
					mask.removeClass( 'visible' );

					var video = $( 'video', mask );

					if ( video.length ) {
						video.stop();
						video.pause();
					}

					if ( historyAPI && historyAPI.state && history.state.urlBeforeOpen ) {
						devmode && console.log( historyAPI.state );
						historyAPI.replaceState( {}, '', history.state.urlBeforeOpen );
					}
				}
			} );


			$( '.pb__text-background', context ).each( function() {
				var textBackgroundImage = $( this );
				var src = textBackgroundImage.attr( 'src' );
				randomBG();

				function randomBG() {
					var random = Math.floor( Math.random() * 4 ) + 1;
					var newSrc = src.replace( '-1', '-' + random );
					textBackgroundImage.attr( 'src', newSrc );
				}
			} );

			//click teaser
			$( '.teaser', context ).on( 'click', function() {
				location.href = $( 'a', this ).first().attr( 'href' );
			} );

			//header and menu
			$( '.masthead', context ).each( function() {
				var header = $( this );

				$( '.nav-opener', header ).touchClick( function( e ) {
					header.toggleClass( 'open' );
					e.preventDefault();
				} );

			} );
		}
	}

	function equalizeElements( context ) {
		$( '.upload-box', context ).equalize( {
			equalize: 'height',
			children: '.upload-starter, .text-content',
			reset: true,
			resize: true
		} );
	}

	function initScrollUp() {
		var header = $( 'header.masthead' ).first();
		var scrollUpActive = false;

		checkSize();

		$( window ).on( 'resize orientationchange', $.Aperto.throttle( function() {
			checkSize();
		}, 500 ) );

		function checkSize() {
			if ( window.innerWidth > 992 && scrollUpActive ) {
				$.scrollupbar.destroy();
				header.attr( 'style', '' );
				scrollUpActive = false;
			} else if ( window.innerWidth <= 992 && !scrollUpActive ) {
				initScrollUp();
			}
		}

		function initScrollUp() {
			header.scrollupbar( {
				partiallyExitViewport: function( e ) {
					header.removeClass( 'open' );
				}
			} );
			scrollUpActive = true;
		}
	}

	function startRegForm( context ) {
		$( 'form.kobra-user-registration', context ).each( function() {
			var form = $( this );
			// var url = nn.processing + 'form/saveUser.php';
			var url = nn.nodeServer + 'form/save';
			var section = form.closest( '.pb__section' );

			section.attr( 'data-phase', '0' );

			form.on( 'submit', function( e ) {
				var dataString = form.serialize();

				jspackager && jspackager.devmode && console.log( e, dataString );

				$( '.contest-status', form ).hide().remove();

				$.ajax( {
						type: "POST",
						url: url,
						data: dataString
					} )
					.done( function( data ) {
						var result = $( data );

						if ( result.hasClass( 'error' ) ) {
							result.prependTo( form ).hide().fadeIn();
						} else {
							section.attr( 'data-phase', 'done' );
							form.closest( '.pb__section' ).addClass( 'success' );
							form.closest( '.pb__contest-form' ).addClass( 'success' );
							form.replaceWith( result );
							result.hide().fadeIn();
						}

					} )
					.fail( function( err ) {
						console.error( err );
						alert( err.statusText + ' Server ist nicht erreichbar. Bitte später nochmal versuchen. ' );
					} );

				e.preventDefault();
			} );
		} );
	}

	function startGeneralModal() {
		var overlay = $( '.general-overlay' ).first();
		var contentContainer = $( '.container', overlay );

		$( document ).on( 'click', '[data-open-overlay]', function( e ) {
			var opener = $( e.target );
			var href = opener.attr( 'href' );

			$.ajax( {
				url: href,
				success: function( data ) {
					overlay.addClass( 'visible' );
					contentContainer
						.empty()
						.html( data );
				}
			} );

			e.preventDefault();
		} )
	}

	function requestAdminLogin() {

	}

	function startGallery( context ) {

		// console.log(jspackager.querys);

		var querys = jspackager.querys;
		var requestAdmin = !!jspackager.querys.admin;
		var adminToken = sessionStorage.getItem( 'adminToken' ) || undefined;
		var adminInterface = ( requestAdmin && adminToken );

		if ( requestAdmin && !adminToken ) {
			login();
		} else if ( requestAdmin && adminToken ) {
			check();
		}

		function check() {
			$.ajax( {
				url: nn.nodeServer + 'login/check',
				method: 'post',
				data: {
					adminToken: adminToken
				}
			} ).done( function( data ) {
				if ( !data.valid ) {
					sessionStorage.removeItem( 'adminToken' );
					adminToken = false;
					login();
					window.reload();
				} else {
					adminInterface = true;
				}
			} );
		}

		function login() {
			var userPwInput = prompt( 'Gallery Edit Admin PW' );

			$.ajax( {
				url: nn.nodeServer + 'login',
				method: 'post',
				data: {
					userPwInput: userPwInput
				}
			} ).done( function( data ) {
				if ( data.adminToken ) {
					adminToken = data.adminToken;
					sessionStorage.setItem( 'adminToken', adminToken );
					check();
					location.reload();
				} else {
					// login();
				}
			} );
		}


		// masonry
		var grid = $( '.pb-gallery .gallery-cards', context ).masonry( {
			transitionDuration: 0,
			columnWidth: $( '.gallery-photocard--tmpl' ).first()[ 0 ],
			itemSelector: '.gallery-cards .gallery-photocard'
		} );

		$( '.pb-gallery', context ).each( function() {
			var currentIndex = -1;
			var container = $( '.gallery-cards', this );
			var moreButton = $( '.pb-gallery__more', this ).first();
			var cards = [];
			var overlay = $( '.photo-overlay' ).first();
			var tmpl = $( '.gallery-photocard.gallery-photocard--tmpl', this ).first().clone().removeClass( 'gallery-photocard--tmpl' );
			var hideBtn = $( '<input type="checkbox"/>' );
			var autoLoadTimeout;

			if ( historyAPI ) {
				historyAPI.replaceState( {
					urlBeforeOpen: "/galerie.html"
				}, '', '' );
			}

			$.ajax( {
				url: nn.nodeServer + 'galerie/all/?stamp=' + ( +new Date() ),
				data: {
					adminToken: adminInterface ? adminToken : undefined
				},
				dataType: 'json',
				success: function( data ) {
					if ( !data ) {
						return
					}
					console.log( data );
					cards = data.uploads;

					addCards( Math.min( cards.length, 4 ) );
				}
			} );

			$( window ).on( 'scroll', $.Aperto.throttle( checkForAutoload, 100 ) );
			$( window ).on( 'mousemove', $.Aperto.throttle( checkForAutoload, 1000 ) );

			moreButton.on( 'click', function() {
				addCards( 4 );
			} );

			container.on( 'click', '.gallery-photocard a', function( e ) {
				var link = $( this );
				var card = link.closest( '.gallery-photocard' );
				var href = link.attr( 'href' );
				var cardData = card.data();
				var imgContainer = $( '.photo-overlay__image-wrap', overlay );
				var videoContainer = $( '.photo-overlay__video-wrap', overlay );
				var shareContainer = $( '.photo-overlay__share', overlay );

				shareContainer.empty();

				requestShareButtons( {
					shareText: nn.shareText,
					shareUrl: link.prop( 'href' ),
					downloadUrl: nn.nodeServer + cardData.filePath
				}, shareContainer )

				overlay.addClass( 'visible' );

				if ( historyAPI ) {
					historyAPI.replaceState( {
						urlBeforeOpen: location.href
					}, '', href );
					devmode && console.log( historyAPI, historyAPI.state );
				}

				if ( cardData.type === 'image' ) {
					imgContainer.show();
					videoContainer.hide();
					var img = $( 'img', imgContainer )
						.attr( 'src', nn.nodeServer + cardData.filePath )
						.hide()
						.on( 'load', function() {
							$( this ).fadeIn();
						} );

					if ( img.prop( 'complete' ) ) {
						img.fadeIn();
					}
				} else if ( cardData.type === 'video' ) {
					videoContainer.show();
					imgContainer.hide();
					var video = $( 'video', videoContainer )
						.attr( 'src', nn.nodeServer + cardData.filePath );
				}
				e.preventDefault();
			} );

			container.on( 'change', '.gallery-photocard input', function( e ) {
				var checkbox = $( this );
				var card = checkbox.closest( '.gallery-photocard' );
				var cardData = card.data();

				$.ajax( {
					url: nn.nodeServer + 'hideShow',
					data: {
						adminToken: adminInterface ? adminToken : undefined,
						uploadID: cardData.uploadID,
						hide: !checkbox.prop( 'checked' )
					},
					method: 'post'
				} ).done( function( data ) {
					var hidden = data.uploadsUpdated[ 0 ].hidden;
					checkbox.prop( 'checked', !hidden );
					card.toggleClass( 'hidden', !!hidden );
				} );
				e.preventDefault();
			} );

			function addCards( _count ) {
				var count = _count || 0;
				var maxIndex = cards.length - 1;

				//check if end is reached
				count = ( currentIndex + count ) > maxIndex ? maxIndex - currentIndex : count;

				for ( var i = 1; i <= count; i++ ) {
					addCard( cards[ currentIndex + i ] );
				}

				currentIndex += count;

				if ( currentIndex === maxIndex ) {
					moreButton.hide();
				}
			}

			function addCard( cardObj ) {
				var card = tmpl.clone();
				var img = $( 'img', card );
				var link = $( 'a', card );
				var cardHideBtn = hideBtn.clone().attr( 'name', '' );

				card.data( cardObj );
				card.attr( 'data-type', cardObj.type );
				link.attr( 'href', 'galerie/' + cardObj.uploadID );

				if ( adminInterface ) {
					card.append( cardHideBtn );
					cardHideBtn.attr( 'checked', !cardObj.hidden );
					card.toggleClass( 'hidden', !!cardObj.hidden );
				}

				var thumbPath = cardObj.thumbnailPath || cardObj.filePath;
				var checkAfterAdd = $.Aperto.throttle( checkForAutoload, 1000 );

				var randomDuration = Math.round( Math.random() * ( 800 - 400 ) + 400 ) + 'ms';
				card.css( 'animation-duration', randomDuration );

				if ( adminInterface ) {
					var addTimeout = setTimeout( function() {
						card.appendTo( container );
						grid.masonry( 'appended', card );
					}, 3000 );
				}

				if ( cardObj.type === 'image' ) {
					img
						.on( 'load', function() {
							clearTimeout( addTimeout );
							card.appendTo( container );

							if ( ( card.width() > card.height() && Math.random() > 0.75 ) ) {
								card.addClass( 'col-md-6 col-sm-6 col-xs-12' );
							}

							checkAfterAdd();
							grid.masonry( 'appended', card );
						} )
						.attr( 'src', nn.nodeServer + thumbPath );
				} else if ( cardObj.type === 'video' ) {
					if ( cardObj.posterPath ) {
						img
							.on( 'load', function() {
								clearTimeout( addTimeout );
								card.appendTo( container );

								if ( card.width() > card.height() && Math.random() > 0.49 ) {
									card.addClass( 'col-md-6 col-sm-6 col-xs-12' );
								}

								checkAfterAdd();
								grid.masonry( 'appended', card );
							} )
							.attr( 'src', nn.nodeServer + cardObj.posterPath );
					}
				}
			}

			function checkForAutoload() {
				if ( isMoreButtonInView() ) {
					clearTimeout( autoLoadTimeout );
					autoLoadTimeout = setTimeout( function() {
						addCards( 2 );
					}, 25 );
				}
			}

			function isMoreButtonInView() {
				// return ( moreButton.offset().top + moreButton.outerHeight() ) < ( window.scrollY + window.innerHeight );
				return ( moreButton.offset().top - window.innerHeight / 3 ) < ( window.scrollY + window.innerHeight );
			}
		} );
	}

	function requestShareButtons( shareObj, target ) {
		var shareBoxes = $( target );

		//load share buttons
		$.ajax( {
			url: nn.nodeServer + 'share',
			data: {
				shareText: shareObj.shareText,
				shareUrl: shareObj.shareUrl,
				downloadUrl: shareObj.downloadUrl
			},
			success: function( shareButtons ) {
				shareBoxes.html( shareButtons );

				//let FB and twitter reparse for new buttons
				window.nn.FBready.done( function() {
					// FB.XFBML.parse();
				} );
				window.nn.twttrReady.done( function() {
					twttr.widgets.load()
				} );
			}
		} );

	}

	function loadSM() {
		devmode && console.log( 'loadSM!!!!', window.FB, window.twttr );

		$( document ).on( 'mouseenter touchstart', '.action__sm-button', function() {
			var activeButton = $( this ).addClass( 'action__sm-button--active' );
		} );

		//resolve SMs when they are ready
		window.nn.FBready.done( function( FB ) {
			devmode && console.log( 'FB is ready!!', FB );
			$( 'html' ).addClass( 'fb--ready' );

			$( document ).on( 'click', '.fb-feeder', function( e ) {
				var link = $( this );
				var linkData = link.data();
				var urlToShare = linkData.url;
				var imageUrl = linkData.imageUrl || "";
				var isImage = imageUrl.indexOf( '.jpg' ) > 0 || imageUrl.indexOf( '.png' ) > 0;

				openNormalShare();

				function openNormalShare() {
					FB.ui( {
						method: 'share',
						href: urlToShare,
					}, function( response ) {
						console.log( 'normal share', response );
					} );
				}
				e.preventDefault();
			} );
		} );

		window.nn.twttrReady.done( function( twttr ) {
			devmode && console.log( 'twttr is ready!!', twttr );
			$( 'html' ).addClass( 'twttr--ready' );
		} );

		loadFB();
		loadTwitter();

		function loadFB() {
			//load FB
			sssl( '//connect.facebook.net/de_DE/sdk.js', function() {} );
		}

		function loadTwitter() {
			//load twitter and resolve
			sssl( '//platform.twitter.com/widgets.js', function() {
				window.twttr.ready(
					function( twttr ) {
						window.nn.twttrReady.resolve( window.twttr );
					}
				);
			} );
		}

		//FB init and resolve
		window.fbAsyncInit = function() {
			var appID = '884916324928919'; //live id

			if ( location.hostname !== 'bday.nicknight.de' ) {
				appID = '884918211595397'; //test id
			}

			FB.init( {
				appId: appID, //add id nach url ändern
				xfbml: true,
				version: 'v2.4'
			} );

			window.nn.FBready.resolve( window.FB );
		};
	}

	// return;
	// FB.login(function(response){
	// 	console.log('login response', response);
	// 	//if publish permissions
	// 	if (response && !response.error){
	// 		console.log('ready to post…');
	// 		FB.api(
	// 			"/me/photos",
	// 			"POST",
	// 			{
	// 				"url": "http://bdaytestsss.nnbooth.nunki.uberspace.de/uploads/images/1440175665773-4.jpg",
	// 				"caption": "Nicknight – 365 nights a year Nicknight wird ein Jahr älter und ich habe gratuliert! Mach auch du mit und gewinne mit etwas Glück ein hammer Partywochenende in Berlin! \n http://bday.nicknight.de"
	// 			},
	// 			function (response) {
	// 				if (response && !response.error) {
	// 					/* handle the result */
	// 					console.log('post response', response);
	// 				} else {
	// 					console.log('post error', response);
	// 					openNormalShare();
	// 				}
	// 			}
	// 		);
	// 	// no publish permission
	// 	} else {
	// 		console.log('login failed… no publish permission');
	// 		openNormalShare();
	// 	}
	// }, {scope: 'publish_actions'});

	function startOmniture() {

		sssl( 'js/AppMeasurement.js', function() {
			var s = new AppMeasurement();
			//Site dependent info: need to be done only once per site(country)
			s.account = "vianickde"
				// s.charSet = "Optional i think"
				// s.currencyCode = "Optional i think"
				// Etc..

			//Specific page tracking  (e.g a to sent each play) (you can extend the object params)
			s.pageName = document.title;
			// s.pageType    = "";
			// s.server      = "";
			// s.channel     = "";
			// s.referrer    = "";
			s.hier1 = location.href;
			// s.campaign    = "campaign name"

			// Then you can send the call by calling s.t();
			s.t();
		} );
	}

	/* starters */
	projectInit.immediate();

	$( projectInit.domReadyOnce );

	$( function() {
		projectInit.everyDomReady( document );
	} );

	$( document ).on( 'dommodified', function( e ) {
		projectInit.everyDomReady( e.target );
	} );

} )( jQuery );
