import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const UserFetchGifs = (category) => {
	const [ state, setState ] = useState({
		data: [],
		loading: true
	});

	useEffect(
		() => {
			getGifs(category)
				// .then( imgs => setImages( img ) )
				.then((imgs) => {
					setState({
							data: imgs,
							loading: false
					});
					
				});
		},
		[ category ]
	);

	return state;
};
