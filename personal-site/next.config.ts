import createMDX from '@next/mdx'

const nextConfig = {
  experimental: {
    mdxRs: false,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
