// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

import { mount } from "cypress/vue";

Cypress.Commands.add("mount", (component, options = {}) => {
	const defaultGlobal = {
		stubs: {
			img: true,
		},
	};

	const mergedGlobal = Object.assign({}, defaultGlobal, options.global || {});

	return mount(component, {
		...options,
		global: mergedGlobal,
	});
});

import "../../src/assets/styles/main.css";
import "../../src/assets/styles/variables.css";


// Example use:
// cy.mount(MyComponent)
