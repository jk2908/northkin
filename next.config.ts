import type { NextConfig } from 'next'

import { withCxx } from '@jk2908/cxx/next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	cacheComponents: true,
}

export default withCxx(nextConfig)
