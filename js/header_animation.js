var $head = $( '#hh' );
			$( '.ha-waypoint' ).each( function(i) {
				var $el = $( this ),
					animClassDown = $el.data( 'animateDown' ),
					animClassUp = $el.data( 'animateUp' );

				$el.waypoint( function( direction ) {
					if( direction === 'down' && animClassDown ) {
						$head.attr('class', 'hh ' + animClassDown);
					}
					else if( direction === 'up' && animClassUp ){
						$head.attr('class', 'hh ' + animClassUp);
					}
				}, { offset: '100%' } );
			} );