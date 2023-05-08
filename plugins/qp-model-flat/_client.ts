export * from './_isomorphic.js'
export { default as component } from './ModelFlat.vue'

import type * as t from '@quasipanacea/common/types.ts'
import type cytoscape from 'cytoscape'

export function arrangeElements(
	model: t.Model_t,
	pods: t.Pod_t[],
	orbs: t.Orb_t[],
): { elements: cytoscape.ElementDefinition[] } {
	const elements: cytoscape.ElementDefinition[] = []

	// pods
	for (const pod of pods) {
		elements.push({
			group: 'nodes',
			// classes: [
			// 	'qp-pod',
			// 	...(orb.pod ? ['qp-orb-with-pod'] : ['qp-orb-without-pod']),
			// ],
			...{
				position: pod?.extra?.position && {
					x: pod.extra.position.x,
					y: pod.extra.position.y,
				},
			},
			data: {
				id: pod.uuid,
				label: pod.name,
				resource: 'pod',
				resourceData: pod,
			},
		})

		elements.push({
			group: 'edges',
			classes: 'qp-link',
			data: {
				id: crypto.randomUUID(),
				source: pod.uuid,
				target: pod.model.uuid,
			},
		})
	}

	// orbs
	for (const orb of orbs) {
		elements.push({
			group: 'nodes',
			classes: [
				'qp-orb',
				...(orb.pod ? ['qp-orb-with-pod'] : ['qp-orb-without-pod']),
			],
			...{
				position: orb?.extra?.position && {
					x: orb.extra.position.x,
					y: orb.extra.position.y,
				},
			},
			data: {
				id: orb.uuid,
				label: orb.name,
				resource: 'orb',
				resourceData: orb,
			},
		})

		elements.push({
			group: 'edges',
			classes: 'qp-link',
			data: {
				id: crypto.randomUUID(),
				source: orb.uuid,
				target: orb.model.uuid,
			},
		})
	}

	return { elements }
}

export function validateNewChild() {}
