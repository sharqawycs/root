import { cn } from '@/lib/utils';

// Layout, bg-background are for safety and prevent extra-scrolling, see global.css for the real bg
const body = 'mx-auto flex min-h-screen flex-col max-w-full bg-background';

// prose stuff
const proseRoot = 'prose prose-neutral dark:prose-invert prose-base';
const proseHeadings = 'prose-headings:font-serif prose-headings:font-semibold'; // Headings: h1, h2, h3, h4
const proseLink = 'prose-a:no-underline prose-a:text-primary prose-a:hover:underline'; // a element and links
const proseHr = 'prose-hr:border-border'; // Horizontal Rules

const rootClasses = cn(body, proseRoot, proseHeadings, proseLink, proseHr);

export default rootClasses;

{
  /**
   * 
   * 
<!-- 

Class	Gray scale
prose-gray (default)	Gray
prose-slate	Slate
prose-zinc	Zinc
prose-neutral	Neutral
prose-stone	Stone

--- 
Adapting to dark mode
Each default color theme includes a hand-designed dark mode version that you can trigger by adding the prose-invert class:

<article class="prose dark:prose-invert">{{ markdown }}</article>

----
Class	Body font size
prose-sm	0.875rem (14px)
prose-base (default)	1rem (16px)
prose-lg	1.125rem (18px)
prose-xl	1.25rem (20px)
prose-2xl	1.5rem (24px)
---


Element modifiers
Use element modifiers to customize the style of individual elements in your content directly in your HTML:

<article class="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
  {{ markdown }}
</article>
This makes it easy to do things like style links to match your brand, add a border radius to images, and tons more.

Here's a complete list of available element modifiers:

Modifier	Target
prose-headings:{utility}	h1, h2, h3, h4, th
prose-hr:{utility}	hr


[[CONSIDER]]
prose-lead:{utility}	[class~="lead"] 
prose-em:{utility}	em
prose-kbd:{utility}	kbd
prose-code:{utility}	code
prose-pre:{utility}	pre
prose-a:{utility}	a
prose-blockquote:{utility}	blockquote

prose-figure:{utility}	figure
prose-img:{utility}	img
prose-video:{utility}	video


prose-h1:{utility}	h1 ok
prose-h2:{utility}	h2
prose-h3:{utility}	h3
prose-h4:{utility}	h4

prose-p:{utility}	p
prose-figcaption:{utility}	figcaption
prose-strong:{utility}	strong



prose-ol:{utility}	ol
prose-ul:{utility}	ul
prose-li:{utility}	li
prose-table:{utility}	table
prose-thead:{utility}	thead
prose-tr:{utility}	tr
prose-th:{utility}	th
prose-td:{utility}	td

When stacking these modifiers with other modifiers like hover, you most likely want the other modifier to come last:

<article class="prose prose-a:text-blue-600 prose-a:hover:text-blue-500">{{ markdown }}</article>
   */
}

/*Prose and overrides */
