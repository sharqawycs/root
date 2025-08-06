import Highlight from '@/components/ui/Highlight';

export default function Footer() {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        textAlign: 'center',
        borderTop: '1px solid #e9e9e7',
        fontSize: '14px',
    };

    const currentYear = new Date().getFullYear();
    const email = 'sharqawy@diran.app';

    return (
        <footer style={footerStyle}>
            <Highlight href={`mailto:${email}`} before={{}} animation="slide-right" after={{ bgColor: '#2196F3', bgOpacity: 0.3 }}>
                {email}
            </Highlight>
            <p>&copy; {currentYear} sharqawycs</p>
        </footer>
    );
}
