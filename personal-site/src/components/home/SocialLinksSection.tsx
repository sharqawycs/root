import Highlight from '@/components/ui/Highlight';

export default function SocialLinksSection() {
  const socialLinks = [
    { url: 'https://x.com/sharqawycs', label: 'X', color: '#1DA1F2' },
    { url: 'https://github.com/sharqawycs', label: 'GitHub', color: '#181717' },
    { url: 'https://linkedin.com/in/sharqawycs', label: 'LinkedIn', color: '#0A66C2' },
  ];
  const OPACITY = 0.3;
  return (
    <section>
      <h2 class="text-2xl font-playfair mb-2">Connect</h2>

      <div>
        {socialLinks.map(({ url, label, color }, idx) => {
          return (
            <>
              <Highlight
                className="underline"
                key={url}
                href={url}
                target="_blank"
                animation="expand"
                before={false ? { bgColor: color, bgOpacity: OPACITY } : {}}
                after={{ bgColor: color, bgOpacity: OPACITY }}>
                {label}
              </Highlight>
              {idx < socialLinks.length - 1 && ' | '}
            </>
          );
        })}
      </div>
    </section>
  );
}
