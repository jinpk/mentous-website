import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */

    async redirects() {
        return [
            {
                source: '/policy/terms',
                destination:
                    'https://mentous.notion.site/1d9ea8396f6f806eaa79c6df6c30ce65',
                permanent: true,
            },
            {
                source: '/policy/privacy',
                destination:
                    'https://mentous.notion.site/1d9ea8396f6f80219f3bc89bbf87d769',
                permanent: true,
            },
        ]
    },
}

export default nextConfig
