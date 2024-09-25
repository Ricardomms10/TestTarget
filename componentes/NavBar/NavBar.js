import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">Fibonacci</Link>
                </li>
                <li>
                    <Link href="/faturamento">Faturamento</Link>
                </li>
                <li>
                    <Link href="/distribuidoras">Distribuidoras</Link>
                </li>
                <li>
                    <Link href="/inverterString">Inverter String</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
