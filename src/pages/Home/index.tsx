export default function Home() {
    return (
        <section class="page">
            <h1>Hey, I'm SharQawyCS</h1>
            <p class="intro-text">I'm a developer who likes to build things and write about them.</p>
            <p>
                I work mostly with TypeScript, JavaScript, React, and Node.js. I believe in keeping code simple and avoiding
                over-engineering.
            </p>
            <p>This is where I share my thoughts, projects, and things I find worth consuming.</p>

            <div class="home-sections">
                <div class="home-section">
                    <h3>Recent Thoughts</h3>
                    <p>
                        Check out my <a href="/write">writing</a> for random thoughts and technical posts.
                    </p>
                </div>

                <div class="home-section">
                    <h3>What I Believe</h3>
                    <p>
                        Read my <a href="/philosophy">philosophy</a> on code, life, and work.
                    </p>
                </div>

                <div class="home-section">
                    <h3>Worth Your Time</h3>
                    <p>
                        Curated <a href="/content">content</a> I actually think is valuable.
                    </p>
                </div>
            </div>
        </section>
    );
}
