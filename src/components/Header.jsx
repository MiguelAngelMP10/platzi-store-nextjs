import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
	const { state, toggleOrder, toggleMenu } = useContext(AppContext);

	return (
		<>
			<nav className={styles.nav}>
				<Image src={menu} alt="menu" className={styles.menu} />
				<div className={styles['navbar-left']}>
					<Link passHref>
						<Image src={logo} alt="logo" className={styles['nav-logo']} />
					</Link>
					<ul>
						<li>
							<Link href="/">
								<a>All</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Clothes</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Electronics</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Furnitures</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Toys</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Others</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles['navbar-right']}>
					<ul>
						<li className={`${styles['more-clickable-area']} ${styles['navbar-email']} ${styles.pointer}`} onClick={() => toggleMenu()}>
							platzi@example.com
						</li>
						<li
							className={styles['navbar-shopping-cart']}
							onClick={() => toggleOrder()}
						>
							<Image className={`${styles['more-clickable-area']} ${styles.pointer}`} src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
				{state.menuIsOpen && <Menu />}
			</nav>
			{state.orderIsOpen && <MyOrder />}
		</>
	);
}

export default Header;