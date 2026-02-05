import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ListForm.module.scss';

const ListForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();

	const handleAddList = () => {
		dispatch(addList(title, description));
		setTitle('');
		setDescription('');
	};

	return (
		<div className={styles.searchBox}>
			<label>Title</label>{' '}
			<TextInput
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<label>Description</label>
			<TextInput
				type='text'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<Button onClick={handleAddList}>Add list</Button>
		</div>
	);
};

export default ListForm;
