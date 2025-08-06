import Highlight from '@/components/ui/Highlight';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const email = 'sharqawy@diran.app';

    return (
        <footer class="flex justify-between items-center px-4 py-2 text-center border-t border-gray-200 text-sm">
            <Highlight href={`mailto:${email}`} before={{}} animation="slide-right" after={{ bgColor: '#2196F3', bgOpacity: 0.3 }}>
                {email}
            </Highlight>
            <p>&copy; {currentYear} sharqawycs</p>
        </footer>
    );
}
