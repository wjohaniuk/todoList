import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columsRedux';

const ColumnForm = ({ listId }) => {
	const [form, setForm] = useState({ title: '', icon: '' });
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addColumn({ title: form.title, icon: form.icon, listId }));
		setForm({ title: '', icon: '' });
	};

	return (
		<form className={styles.columnForm} onSubmit={handleSubmit}>
			<label htmlFor='column-title'>Title:</label>{' '}
			<TextInput
				value={form.title}
				onChange={(e) =>
					setForm((prev) => ({ ...prev, title: e.target.value }))
				}
			/>
			<label htmlFor='column-icon'>Icon:</label>{' '}
			<TextInput
				value={form.icon}
				onChange={(e) => setForm((prev) => ({ ...prev, icon: e.target.value }))}
			/>
			<Button>Add column</Button>
		</form>
	);
};

export default ColumnForm;
