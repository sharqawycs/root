import {
    PageHeader,
    PostCard,
    Section,
    TextBlock,
    ListBlock,
    QuoteBlock,
    CodeBlock,
    LinkCard,
    Highlight,
} from '../../components/index.js';

export function Write() {
    return (
        <div class="page">
            <PageHeader
                title="Write"
                subtitle="Where I write dumb stuff and random thoughts"
                date="Last updated: Aug 6, 2025"
            />

            <Section title="Recent Posts">
                <PostCard
                    title="Why I Switched from React to Preact"
                    excerpt="A journey through bundle sizes, performance, and developer experience. Spoiler: it's not just about the size."
                    date="Aug 5, 2025"
                    slug="react-to-preact"
                    readTime="5 min read"
                />

                <PostCard
                    title="Building a Simple Portfolio"
                    excerpt="How I built this site with Preact, Vite, and a lot of overthinking. Keep it simple, they said."
                    date="Aug 1, 2025"
                    slug="simple-portfolio"
                    readTime="3 min read"
                />

                <PostCard
                    title="The Art of Not Over-Engineering"
                    excerpt="Sometimes the best solution is the boring one. A rant about complexity and why simple wins."
                    date="Jul 28, 2025"
                    slug="not-over-engineering"
                    readTime="7 min read"
                />
            </Section>

            <Section title="Component Showcase" className="showcase">
                <TextBlock variant="h3">Text Block Examples</TextBlock>
                <TextBlock size="large">
                    This is large text for emphasis.
                </TextBlock>
                <TextBlock>
                    This is normal paragraph text with proper spacing and
                    readability.
                </TextBlock>
                <TextBlock size="small">
                    This is smaller text for captions or notes.
                </TextBlock>

                <TextBlock variant="h3">List Examples</TextBlock>
                <ListBlock
                    type="bullet"
                    items={[
                        'Keep code simple and readable',
                        "Don't over-engineer solutions",
                        'Test your assumptions',
                        'Ship fast, iterate faster',
                    ]}
                />

                <ListBlock
                    type="numbered"
                    items={[
                        'First, understand the problem',
                        'Then, find the simplest solution',
                        'Finally, make it work well',
                    ]}
                />

                <TextBlock variant="h3">Quote Block</TextBlock>
                <QuoteBlock author="Someone Wise" source="The Internet">
                    The best code is the code you don't have to write. But when
                    you do write it, make sure it's so simple that future you
                    won't hate present you.
                </QuoteBlock>

                <TextBlock variant="h3">Code Block Examples</TextBlock>
                <TextBlock>
                    Here's some inline code:{' '}
                    <CodeBlock code="const simple = true;" inline />
                </TextBlock>

                <CodeBlock
                    language="tsx"
                    title="Simple Component Example"
                    code={`export function Hello({ name }: { name: string }) {
    return <h1>Hello, {name}!</h1>;
}`}
                />

                <CodeBlock language="bash" code="npm install && npm run dev" />

                <TextBlock variant="h3">Link Blocks</TextBlock>
                <LinkCard
                    title="Vite - Next Generation Frontend Tooling"
                    description="Get ready for a development environment that can finally catch up with you."
                    url="https://vitejs.dev"
                    domain="vitejs.dev"
                />

                <TextBlock variant="h3">Enhanced Highlight Examples</TextBlock>
                <TextBlock>
                    New flexible highlighting system with full control over
                    before and after states:
                </TextBlock>

                <TextBlock>
                    You can create{' '}
                    <Highlight
                        before={{ bgColor: '#f0f0f0', bgOpacity: 0.5 }}
                        after={{
                            bgColor: '#ff6b6b',
                            textColor: '#fff',
                            bgOpacity: 1,
                        }}
                        animation="fade">
                        subtle highlights
                    </Highlight>{' '}
                    that become bold on hover, or{' '}
                    <Highlight
                        href="https://preactjs.com"
                        target="_blank"
                        before={{ textColor: '#673ab7', bgOpacity: 0 }}
                        after={{
                            bgColor: '#673ab7',
                            textColor: '#fff',
                            bgOpacity: 1,
                        }}
                        animation="slide-right">
                        links with slide animations
                    </Highlight>{' '}
                    that reveal backgrounds.
                </TextBlock>

                <TextBlock>
                    Advanced examples:{' '}
                    <Highlight
                        before={{
                            bgColor: '#4ecdc4',
                            bgOpacity: 0.2,
                            textColor: '#2c3e50',
                        }}
                        after={{
                            bgColor: '#2c3e50',
                            textColor: '#4ecdc4',
                            bgOpacity: 1,
                        }}
                        animation="expand">
                        color flip effect
                    </Highlight>
                    {', '}
                    <Highlight
                        before={{ textColor: '#e74c3c', bgOpacity: 0 }}
                        after={{
                            bgColor: '#e74c3c',
                            textColor: '#fff',
                            bgOpacity: 0.9,
                        }}
                        animation="underline">
                        underline reveal
                    </Highlight>
                    {', and '}
                    <Highlight
                        before={{
                            bgColor: '#f39c12',
                            bgOpacity: 1,
                            textColor: '#fff',
                        }}
                        after={{
                            bgColor: '#27ae60',
                            textColor: '#fff',
                            bgOpacity: 1,
                        }}
                        animation="scale">
                        always visible changing colors
                    </Highlight>
                    .
                </TextBlock>

                <TextBlock>
                    Same styles work for both highlights and links:{' '}
                    <Highlight
                        before={{ bgColor: '#9b59b6', bgOpacity: 0.1 }}
                        after={{
                            bgColor: '#9b59b6',
                            textColor: '#fff',
                            bgOpacity: 1,
                        }}
                        animation="fade">
                        just a highlight
                    </Highlight>
                    {' vs '}
                    <Highlight
                        href="https://github.com"
                        target="_blank"
                        before={{ bgColor: '#9b59b6', bgOpacity: 0.1 }}
                        after={{
                            bgColor: '#9b59b6',
                            textColor: '#fff',
                            bgOpacity: 1,
                        }}
                        animation="fade">
                        same style as link
                    </Highlight>
                    .
                </TextBlock>

                <TextBlock variant="h3">Old Highlight Examples</TextBlock>
                <TextBlock>
                    This is how you can use highlights within paragraphs. You
                    can{' '}
                    <Highlight
                        before={{ bgOpacity: 0 }}
                        after={{ bgColor: '#ff6b6b', bgOpacity: 0.8 }}
                        animation="fade">
                        highlight important text
                    </Highlight>{' '}
                    or create{' '}
                    <Highlight
                        href="https://preactjs.com"
                        target="_blank"
                        before={{ textColor: '#4ecdc4', bgOpacity: 0 }}
                        after={{
                            bgColor: '#4ecdc4',
                            textColor: '#fff',
                            bgOpacity: 1,
                        }}
                        animation="slide-right">
                        inline links
                    </Highlight>{' '}
                    that look natural within the text flow.
                </TextBlock>

                <TextBlock>
                    Different animation styles:{' '}
                    <Highlight
                        before={{ bgOpacity: 0 }}
                        after={{ bgColor: '#673ab7', bgOpacity: 0.8 }}
                        animation="expand">
                        expand
                    </Highlight>
                    ,{' '}
                    <Highlight
                        before={{ textColor: '#f39c12', bgOpacity: 0 }}
                        after={{
                            bgColor: '#f39c12',
                            textColor: '#fff',
                            bgOpacity: 1,
                        }}
                        animation="underline">
                        underline
                    </Highlight>
                    ,{' '}
                    <Highlight
                        before={{ bgOpacity: 0 }}
                        after={{ bgColor: '#e74c3c', bgOpacity: 0.8 }}
                        animation="slide-left">
                        slide-left
                    </Highlight>
                    , and{' '}
                    <Highlight
                        before={{ bgColor: '#27ae60', bgOpacity: 0.2 }}
                        after={{ bgColor: '#27ae60', bgOpacity: 0.5 }}
                        animation="fade">
                        always visible
                    </Highlight>
                    .
                </TextBlock>

                <TextBlock>
                    You can also use different opacity levels:
                    <Highlight
                        before={{ bgColor: '#9b59b6', bgOpacity: 0.1 }}
                        after={{ bgColor: '#9b59b6', bgOpacity: 0.3 }}
                        animation="fade">
                        {' '}
                        light highlight{' '}
                    </Highlight>
                    <Highlight
                        before={{ bgColor: '#9b59b6', bgOpacity: 0.3 }}
                        after={{ bgColor: '#9b59b6', bgOpacity: 0.6 }}
                        animation="fade">
                        {' '}
                        medium highlight{' '}
                    </Highlight>
                    <Highlight
                        before={{ bgColor: '#9b59b6', bgOpacity: 0.6 }}
                        after={{ bgColor: '#9b59b6', bgOpacity: 0.9 }}
                        animation="fade">
                        {' '}
                        strong highlight{' '}
                    </Highlight>
                </TextBlock>

                <TextBlock variant="h3">Mixed Content Example</TextBlock>
                <TextBlock>
                    This is how you can mix different components to create rich
                    content. You can have paragraphs, followed by lists, quotes,
                    and code examples.
                </TextBlock>

                <ListBlock
                    items={[
                        'Flexible component system',
                        'Notion-style blocks',
                        'Clean and minimal design',
                    ]}
                />

                <QuoteBlock>
                    "Simplicity is the ultimate sophistication." - Probably not
                    Leonardo da Vinci, but it sounds good.
                </QuoteBlock>
            </Section>
        </div>
    );
}
