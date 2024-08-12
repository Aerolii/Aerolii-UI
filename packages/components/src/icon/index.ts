import { SFCWithInstallType, withInstall } from '@Aerolii-UI/utils'

import _Icon from './Icon.vue'

export const AIcon = withInstall(_Icon as SFCWithInstallType<typeof _Icon>)

export default AIcon

export * from './icon'

declare module 'vue' {
	export interface GlobalComponents {
		AIcon: typeof AIcon
	}
}
