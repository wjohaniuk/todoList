import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<container className={styles.navbar}>
				<div className='fa fa-tasks'></div>
				<ul className={styles.navbarLinks}>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? styles.linkActive : undefined
							}
							to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? styles.linkActive : undefined
							}
							to='/favorite'>
							Favorite
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? styles.linkActive : undefined
							}
							to='/about'>
							About
						</NavLink>
					</li>
				</ul>
			</container>
		</nav>
	);
};

export default NavBar;
