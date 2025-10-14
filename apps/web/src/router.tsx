import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import { getContext } from './integrations/tanstack-query/context'
import { Provider as TanstackQueryProvider } from './integrations/tanstack-query/root-provider'
import { routeTree } from './routeTree.gen'

// Create a new router instance
export function getRouter() {
	const rqContext = getContext()

	const router = createRouter({
		routeTree,
		context: { ...rqContext },
		defaultPreload: 'intent',
		Wrap: (props: { children: React.ReactNode }) => {
			return (
				<TanstackQueryProvider {...rqContext}>
					{props.children}
				</TanstackQueryProvider>
			)
		},
	})

	setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient })

	return router
}
