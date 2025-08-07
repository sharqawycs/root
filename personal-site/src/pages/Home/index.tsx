import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';

export default function Home() {
    return (
        <Page>
            <PageHeader title="yo, i'm sharqawy" subtitle="CS student & Builder" />

            <p>
                i’m a cs student tryna kill fear through building and content. i build and share to get out of my own way. i like sharp
                tools, clean design, and projects that actually do something. this is my public space to share my work, thoughts, and
                everything i’m figuring out along the way.
            </p>

            <p class="my-4">
                when i’m not coding, i’m deep into random internet rabbit holes — learning anything that grabs my brain. i love building
                PCs, btw i’ve got a thing for mechanical keyboards and minimalist setups :), sometimes i love breaking stuff on purpose just
                to reverse-engineer it.
            </p>

            <p class="my-4">
                i find art in everyday things — cooking, taking photos, cleaning up my space. it makes me feel like i’m here. writing lyrics
                or poetry helps when my brain’s loud. debating’s fun too — not to win, just to break ideas and see what’s left. all of it’s
                kinda my way of keeping things honest & authentic.
            </p>
        </Page>
    );
}
