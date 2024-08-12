import type { Plugin, App } from 'vue'

export type SFCWithInstallType<T> = Plugin & T & { name: string }
export const withInstall = <T>(
	comp: SFCWithInstallType<T>
): SFCWithInstallType<T> => {
	;(comp as SFCWithInstallType<T>).install = (app: App) => {
		const { name } = comp
		app.component(name, comp)
	}

	return comp as SFCWithInstallType<T>
}
