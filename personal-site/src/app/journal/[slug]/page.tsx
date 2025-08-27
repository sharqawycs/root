import { MDXProvider } from '@/components/mdx/MDXProvider';
import CalloutBox from '@/components/mdx/CalloutBox';
import { notFound } from 'next/navigation';

// For now, let's hardcode the post data
// In a real app, you'd fetch this from a CMS or file system
const posts = {
  'escape-infinite-scroll': {
    title: 'How to Escape the Infinite Scroll Jail',
    date: new Date('2025-08-26'),
    description: 'Breaking free from mindless scrolling and reclaiming your time and focus',
    content: `
import CalloutBox from '@/components/mdx/CalloutBox';
import { notFound } from 'next/navigation';

// For now, let's hardcode the post data
// In a real app, you'd fetch this from a CMS or file system
const posts = {
  'escape-infinite-scroll': {
    title: 'How to Escape the Infinite Scroll Jail',
    date: new Date('2025-08-26'),
    description: 'Breaking free from mindless scrolling and reclaiming your time and focus'
  }
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold mb-4 font-playfair">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <time dateTime={post.date.toISOString()}>
            {post.date.toLocaleDateString()}
          </time>
        </div>
      </header>
      <div className="prose prose-lg max-w-none">
        <PostContent />
      </div>
    </article>
  );
}

// This component contains the actual blog content
function PostContent() {
  return (
    <>
      <p>Past few weeks I realized I was <strong>using my phone nearly all day</strong> and had no clue why. I used to barely touch social media - <em>just WhatsApp</em> - but suddenly I was constantly checking messages, dumb statuses, wasting hours. And what made it even worse, I started being active on X which was wasting a lot of time!</p>

      <p>The problem isn&apos;t just time. It&apos;s the <strong>jail</strong> your phone creates. You check it anytime, notifications blow up, and suddenly you&apos;re stuck. In this article, I&apos;ll try to help you break out.</p>

      <CalloutBox type="warning">
        This is an example of using React components in MDX! You can add interactive elements anywhere in your content.
      </CalloutBox>

      <hr />

      <h2>Do we really need phones?</h2>

      <p>The short answer: <strong>no</strong>.</p>

      <p>Phones are just <strong>tools</strong>: send messages, make calls, listen to audio, watch useful videos, manage To-Dos, use banking apps, search stuff fast, set alarms. That&apos;s it. <strong>Simple, non-wasting stuff.</strong> That&apos;s what you really need phone for.</p>

      <p>What actually wastes your time is <strong>doomscrolling</strong> on social media. The truth is <em>you don&apos;t need your phone for any of this</em>. You can check messages, social apps, or even videos on a <strong>desktop or laptop,</strong> where it&apos;s easier to control your time. On a bigger screen, you don&apos;t get sucked into endless notifications and mindless scrolling. Your phone should be a tool, not a trap.</p>

      <hr />

      <h2>Step 1: Delete or limit apps</h2>

      <ul>
        <li><strong>Delete as many as you can.</strong> For real. If you wanna grow, delete them. If you want to keep doomscrolling, fine – just be honest with yourself.</li>
        <li><strong>For me</strong>, I deleted social apps on my phone and use them only on <strong>desktop.</strong> Nobody is gonna need you on Facebook immediately. Urgent stuff? They can wait or call you.</li>
        <li><strong>If deletion feels impossible, limit them.</strong> Grayscale your phone, use a minimalist home screen, hide apps in folders. Make it annoying and hard to mindlessly scroll.</li>
      </ul>

      <hr />

      <h2>Step 2: Control notifications</h2>

      <p>I think notifications are little jailers trying to drag you back into the scroll. Every ping, badge, or pop-up is a hook. Kill them all.</p>

      <ul>
        <li><strong>Turn off notifications</strong> for everything that isn&apos;t urgent. Social apps, games, news – MUTE THEM.</li>
        <li>Even <strong>desktop alerts</strong> can pull you in, so silence those too.</li>
        <li><strong>The goal:</strong> make checking your phone a <strong>choice</strong>, not a reaction. Only check your phone at specific times. You are the <strong>one who decides</strong> when to check your phone.</li>
      </ul>

      <hr />

      <h2>Step 3: Replace scrolling with micro-actions</h2>

      <p>When you feel the urge, do something useful immediately:</p>

      <ul>
        <li>Take a 2-minute walk</li>
        <li>Journal one sentence</li>
        <li>Clean a drawer, do sth small</li>
        <li>Read a page of a book (ik it&apos;s hard)</li>
        <li>Make scrolling feel <strong>guilty</strong>. Ask yourself: <em>&quot;Am I doing this because I want to, or just because I&apos;m bored?&quot;</em></li>
      </ul>

      <hr />

      <h2>Step 4: Start small</h2>

      <p>Don&apos;t try to quit everything at once, that&apos;s how most people fail. <strong>Start app by app.</strong></p>

      <ul>
        <li><strong>Pick one app</strong> that eats your time the most. Cut your usage by <strong>30–60 minutes a day.</strong> Once you&apos;re good, move to the next app.</li>
        <li><strong>Track your progress</strong> and celebrate small wins - every minute counts.</li>
      </ul>

      <hr />

      <p>Breaking the scroll habit isn&apos;t about &quot;just put your phone down.&quot; It&apos;s about building systems, replacing habits, and controlling your environment. If you do this right, you&apos;ll finally take your time, focus, and brain back.</p>

      <p><strong>Note:</strong> These&apos;re my thoughts for now. I&apos;ll edit this later and add content to <a href="/content">Content Page</a></p>
    </>
  );
}`,
  },
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold mb-4 font-playfair">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <time dateTime={post.date.toISOString()}>{post.date.toLocaleDateString()}</time>
        </div>
      </header>
      <div className="prose prose-lg max-w-none">
        <MDXProvider>
          <PostContent />
        </MDXProvider>
      </div>
    </article>
  );
}

// This component contains the actual blog content
function PostContent() {
  return (
    <>
      <p>
        Past few weeks I realized I was <strong>using my phone nearly all day</strong> and had no clue why. I used to barely touch social
        media - <em>just WhatsApp</em> - but suddenly I was constantly checking messages, dumb statuses, wasting hours. And what made it
        even worse, I started being active on X which was wasting a lot of time!
      </p>

      <p>
        The problem isn't just time. It's the <strong>jail</strong> your phone creates. You check it anytime, notifications blow up, and
        suddenly you're stuck. In this article, I'll try to help you break out.
      </p>

      <CalloutBox type="warning">
        This is an example of using React components in MDX! You can add interactive elements anywhere in your content.
      </CalloutBox>

      <hr />

      <h2>Do we really need phones?</h2>

      <p>
        The short answer: <strong>no</strong>.
      </p>

      <p>
        Phones are just <strong>tools</strong>: send messages, make calls, listen to audio, watch useful videos, manage To-Dos, use banking
        apps, search stuff fast, set alarms. That's it. <strong>Simple, non-wasting stuff.</strong> That's what you really need phone for.
      </p>

      <p>
        What actually wastes your time is <strong>doomscrolling</strong> on social media. The truth is{' '}
        <em>you don't need your phone for any of this</em>. You can check messages, social apps, or even videos on a{' '}
        <strong>desktop or laptop,</strong> where it's easier to control your time. On a bigger screen, you don't get sucked into endless
        notifications and mindless scrolling. Your phone should be a tool, not a trap.
      </p>

      <hr />

      <h2>Step 1: Delete or limit apps</h2>

      <ul>
        <li>
          <strong>Delete as many as you can.</strong> For real. If you wanna grow, delete them. If you want to keep doomscrolling, fine –
          just be honest with yourself.
        </li>
        <li>
          <strong>For me</strong>, I deleted social apps on my phone and use them only on <strong>desktop.</strong> Nobody is gonna need you
          on Facebook immediately. Urgent stuff? They can wait or call you.
        </li>
        <li>
          <strong>If deletion feels impossible, limit them.</strong> Grayscale your phone, use a minimalist home screen, hide apps in
          folders. Make it annoying and hard to mindlessly scroll.
        </li>
      </ul>

      <hr />

      <h2>Step 2: Control notifications</h2>

      <p>
        I think notifications are little jailers trying to drag you back into the scroll. Every ping, badge, or pop-up is a hook. Kill them
        all.
      </p>

      <ul>
        <li>
          <strong>Turn off notifications</strong> for everything that isn't urgent. Social apps, games, news – MUTE THEM.
        </li>
        <li>
          Even <strong>desktop alerts</strong> can pull you in, so silence those too.
        </li>
        <li>
          <strong>The goal:</strong> make checking your phone a <strong>choice</strong>, not a reaction. Only check your phone at specific
          times. You are the <strong>one who decides</strong> when to check your phone.
        </li>
      </ul>

      <hr />

      <h2>Step 3: Replace scrolling with micro-actions</h2>

      <p>When you feel the urge, do something useful immediately:</p>

      <ul>
        <li>Take a 2-minute walk</li>
        <li>Journal one sentence</li>
        <li>Clean a drawer, do sth small</li>
        <li>Read a page of a book (ik it's hard)</li>
        <li>
          Make scrolling feel <strong>guilty</strong>. Ask yourself:{' '}
          <em>"Am I doing this because I want to, or just because I'm bored?"</em>
        </li>
      </ul>

      <hr />

      <h2>Step 4: Start small</h2>

      <p>
        Don't try to quit everything at once, that's how most people fail. <strong>Start app by app.</strong>
      </p>

      <ul>
        <li>
          <strong>Pick one app</strong> that eats your time the most. Cut your usage by <strong>30–60 minutes a day.</strong> Once you're
          good, move to the next app.
        </li>
        <li>
          <strong>Track your progress</strong> and celebrate small wins - every minute counts.
        </li>
      </ul>

      <hr />

      <p>
        Breaking the scroll habit isn't about "just put your phone down." It's about building systems, replacing habits, and controlling
        your environment. If you do this right, you'll finally take your time, focus, and brain back.
      </p>

      <p>
        <strong>Note:</strong> These're my thoughts for now. I'll edit this later and add content to <a href="/content">Content Page</a>
      </p>
    </>
  );
}
