const Footer = () => {
  const email = 'sharqawy@diran.app';
  const repo = 'https://github.com/sharqawycs/sharqawycs?tab=MIT-1-ov-file';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center px-4 py-2 text-center border-t border-gray-200 text-sm">
      <a
        href={`mailto:${email}`}
        className="hover:bg-blue-500/10 hover:translate-x-0.5 transition-all duration-300 ease-in-out px-2 py-1 rounded">
        {email}
      </a>

      <div className="relative inline group">
        {/* Default text */}
        <p className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">&copy; {currentYear} sharqawycs</p>

        {/* Hover text */}
        <div className="absolute top-0 right-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-500/10 hover:translate-x-0.5 transition-all duration-300 ease-in-out px-2 py-1 rounded">
            MIT License
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
