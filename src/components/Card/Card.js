import React from 'react';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = ({ title, isFavorite, id }) => {
	const dispatch = useDispatch();

	const handleToggleFavorite = () => {
		dispatch(toggleCardFavorite(id));
	};
	const handleRemoveCard = () => {
		dispatch(removeCard(id));
	};

	const favoriteClassName = isFavorite ? styles.favorite : '';

	return (
		<li className={`${styles.card} ${favoriteClassName}`}>
			{title}
			<div className={styles.buttons}>
				<button
					className={styles.favoriteButton}
					onClick={handleToggleFavorite}>
					<i className='fa-regular fa-star'></i>
				</button>
				<button className={styles.removeButton} onClick={handleRemoveCard}>
					<i className='fa fa-trash'></i>
				</button>
			</div>
		</li>
	);
};

export default Card;
