import { useSelector } from 'react-redux';

export default function Footer() {
  const name = useSelector(state => state.hero.name)
  return (
    <footer className="pb-8 pt-2 text-center text-xs text-ink-900/40 dark:text-paper-100/30">
      © {new Date().getFullYear()} {name}. Built with React & Tailwind CSS.
    </footer>
  );
}
