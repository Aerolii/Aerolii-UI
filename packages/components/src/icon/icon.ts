import { ExtractPublicPropTypes, PropType } from 'vue'

export const iconProps = {
	size: {
		required: false,
		type: [String, Number] as PropType<number | string>,
	},
	color: {
		required: false,
		type: String,
	},
} as const

export type IconProps = ExtractPublicPropTypes<typeof iconProps>
