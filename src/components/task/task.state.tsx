import { createMachine, assign } from "xstate";

const taskMachine = createMachine({
	"id": "Machine Name",
	"initial": "Closed",
	"states": {
		"Closed": {
			"on": {
				"Toggle": {
					"target": "Open"
				}
			}
		},
		"Open": {
			"on": {
				"Toggle": {
					"target": "Closed"
				}
			}
		}
	},
	schema: {
		context: {} as {

		},
		events: {} as {"type": "Toggle"}
	},
	context: {},
	predictableActionArguments: true,
	preserveActionOrder: true,
});

export default taskMachine;
