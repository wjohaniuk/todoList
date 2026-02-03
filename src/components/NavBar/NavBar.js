import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<nav>
			<container className={styles.navbar}>
				<div className='fa fa-tasks'></div>
				<ul className={styles.navbarLinks}>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/favorite'>Favorite</a>
					</li>
					<li>
						<a href='/about'>About</a>
					</li>
				</ul>
			</container>
		</nav>
	);
};

export default NavBar;
