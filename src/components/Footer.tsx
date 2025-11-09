export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
        <p>&copy; {new Date().getFullYear()} Sara Store. Все права защищены.</p>
        <p className="footer-links">
        <a href="/privacy">Политика конфиденциальности</a> |{" "}
        <a href="/terms">Условия использования</a>
        </p>
        </div>
        </footer>
    )
}
