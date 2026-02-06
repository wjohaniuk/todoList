import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';

const Favorite = () => {
	const favoriteCards = useSelector((state) =>
		state.cards.filter((card) => card.isFavorite),
	);

	return (
		<div>
			<h1 className={styles.bigHeader}>Favorite</h1>
			<div className={styles.listBox}>
				{favoriteCards.length === 0 ? (
					<div className={styles.noCards}>NO CARDS</div>
				) : (
					<ul className={styles.cards}>
						{favoriteCards.map((card) => (
							<Card
								key={card.id}
								title={card.title}
								isFavorite={card.isFavorite}
								id={card.id}
							/>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Favorite;
