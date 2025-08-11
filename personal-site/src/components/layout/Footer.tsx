import Highlight from '@/components/ui/Highlight';

export default function Footer() {
    return (
        <footer class="flex justify-between items-center px-4 py-2 text-center border-t border-gray-200 text-sm">
            <EmailPart />
            <LicensePart />
        </footer>
    );
}

const EmailPart = ({ email = 'sharqawy@diran.app' }) => {
    return (
        <Highlight href={`mailto:${email}`} before={{}} animation="slide-right" after={{ bgColor: '#2196F3' }}>
            {email}
        </Highlight>
    );
};

const LicensePart = ({ repo = 'https://github.com/sharqawycs/sharqawycs?tab=MIT-1-ov-file' }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="relative inline group">
            {/* Default text */}
            <p className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">&copy; {currentYear} sharqawycs</p>

            {/* Hover text */}
            <div className="absolute top-0 right-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <Highlight href={repo} target="_blank" before={{}} animation="slide-right" after={{ bgColor: '#2196F3' }}>
                    MIT License
                </Highlight>
            </div>
        </div>
    );
};
