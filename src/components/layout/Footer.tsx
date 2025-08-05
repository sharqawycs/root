export default function Footer() {
    const currentYear = new Date().getFullYear();
    const email = 'sharqawy@diran.app';

    return (
        <footer class="footer">
            <a href={`mailto:${email}`}>{email}</a>
            <p>&copy; {currentYear} sharqawycs</p>
        </footer>
    );
}
