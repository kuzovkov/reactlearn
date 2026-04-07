import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <h1>ItProher</h1>
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
      </nav>

    </header>
  );
};

export default Header;