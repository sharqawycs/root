import Highlight from '@/components/blocks/Highlight';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const email = 'sharqawy@diran.app';

    return (
        <footer class="footer">
            <Highlight href={`mailto:${email}`} before={{}} animation="slide-right" after={{ bgColor: '#2196F3', bgOpacity: 0.3 }}>
                {email}
            </Highlight>
            <p>&copy; {currentYear} sharqawycs</p>
        </footer>
    );
}
