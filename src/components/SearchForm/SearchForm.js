import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { updateSearchString } from '../../redux/store';
import { useSelector } from 'react-redux';

const SearchForm = () => {
	const [searchText, setSearchText] = useState('');
	const dispatch = useDispatch();
	const searchString = useSelector((state) => state.searchString);

	useEffect(() => {
		setSearchText(searchString);
	}, [searchString]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateSearchString({ searchText }));
	};

	return (
		<form className={styles.searchForm} onSubmit={handleSubmit}>
			<TextInput
				placeholder='Search..'
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<Button type='submit'>
				<span className='fa fa-search' />
			</Button>
		</form>
	);
};

export default SearchForm;
