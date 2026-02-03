import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import List from '../List/List';

const Home = () => {
	return (
		<Container>
			<Hero />
			<SearchForm />
			<List />
		</Container>
	);
};

export default Home;
