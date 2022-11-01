// DO NOT EDIT THIS FILE, IT IS AUTMATICALLY GENERATED

module.exports = function (blockly) {
	let Blockly = blockly.Blockly;
	// let goog = blockly.goog;
	// Screen and Keyboard

	Blockly.Blocks['print'] = {
		init: function () {
			this.setHelpUrl('https://projects.wyliodrin.com/wiki/languages/visual#write');
			this.setColour(250);
			this.appendDummyInput()
				.appendField('Write ');
			this.appendValueInput('value');
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('Write the value on the screen and keep the cursor on the same line.');
		}
	};

	Blockly.Blocks['read'] = {
		init: function () {
			this.setHelpUrl('https://projects.wyliodrin.com/wiki/languages/visual#read');
			this.setColour(250);
			this.appendDummyInput()
				.appendField('Read');
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([['text', '0'], ['integer number', '1'], ['real number', '2']]), 'type');
			this.appendDummyInput()
				.appendField('from keyboard');
			this.setInputsInline(true);
			this.setOutput(true);
			this.setTooltip('Read a text from the keyboard.');
		}
	};

	Blockly.Blocks['readwrite'] = {
		init: function () {
			this.setHelpUrl('https://projects.wyliodrin.com/wiki/languages/visual#write_and_read');
			this.setColour(250);
			this.appendDummyInput()
				.appendField('Write ');
			this.appendValueInput('value');
			this.appendDummyInput()
				.appendField('and read ');
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([['text', '0'], ['integer number', '1'], ['real number', '2']]), 'type');
			this.appendDummyInput()
				.appendField('from keyboard');
			this.setInputsInline(true);
			this.setOutput(true);
			this.setTooltip('Write the value on the screen and read a text from the keyboard.');
		}
	};

	Blockly.Blocks['println'] = {
		init: function () {
			this.setHelpUrl('https://projects.wyliodrin.com/wiki/languages/visual#print');
			this.setColour(250);
			this.appendDummyInput()
				.appendField('Write Line');
			this.appendValueInput('value');
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('Print the value on the screen and set the cursor to the next line.');
		}
	};

	Blockly.Blocks['delay'] = {
		init: function () {
			this.setHelpUrl('https://projects.wyliodrin.com/wiki/languages/visual#delay');
			this.setColour(120);
			this.appendValueInput('millis')
				.setCheck('Number')
				.appendField('Sleep');
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([['milliseconds', '0'], ['microseconds', '1'], ['seconds', '2']]), 'type');
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('Sleep for some specified period.');
		}
	};

	// Loops
	Blockly.Blocks['repeat_timing'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(120);
			this.appendValueInput('VALUE')
				.setCheck('Number')
				.setAlign(Blockly.ALIGN_CENTRE)
				.appendField('Repeat every');
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([['seconds', '0'], ['miliseconds', '1'], ['microseconds', '2']]), 'TIME');
			this.appendStatementInput('NAME')
				.setCheck('null')
				.appendField('do');
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		}
	};

	Blockly.Blocks['json_key'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(20);
			this.appendValueInput('key')
				.appendField('get');
			this.appendValueInput('JSON')
				.appendField('from');
			this.setInputsInline(true);
			this.setOutput(true);
			this.setTooltip('');
		}
	};

	Blockly.Blocks['json_index'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(20);
			this.appendValueInput('index')
				.appendField('item #');
			this.appendValueInput('JSON')
				.appendField('from');
			this.setInputsInline(true);
			this.setOutput(true);
			this.setTooltip('');
		}
	};

	Blockly.Blocks['json_items'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(20);
			this.appendValueInput('JSON')
				.appendField('count items from ');
			this.setInputsInline(true);
			this.setOutput(true);
			this.setTooltip('');
		}
	};

	Blockly.Blocks['truncate'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(230);
			this.appendValueInput('truncate')
				.setCheck('Number')
				.appendField('truncate');
			this.setOutput(true, 'Number');
			this.setTooltip('');
		}
	};

	Blockly.Blocks['map_block'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(230);
			this.appendValueInput('value')
				.appendField('Map the value');
			this.appendValueInput('from_low')
				.appendField('from the lowest value');
			this.appendValueInput('to_low')
				.appendField('to the lowest value');
			this.appendValueInput('from_high')
				.appendField('from the highest value');
			this.appendValueInput('to_high')
				.appendField('to the highest value');
			this.setOutput(true);
			this.setTooltip('');
		}
	};

	Blockly.Blocks['kelvintocelsius'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(230);
			this.appendValueInput('degrees')
				.appendField('Get Celsius degrees from Kelvin');
			this.setInputsInline(true);
			this.setOutput(true);
			this.setTooltip('');
		}
	};

	Blockly.Blocks['fahrenheittocelsius'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(230);
			this.appendValueInput('degrees')
				.appendField('Get Celsius degrees from Fahrenheit');
			this.setInputsInline(true);
			this.setOutput(true);
			this.setTooltip('');
		}
	};

	Blockly.Blocks['celsiustokelvin'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(230);
			this.appendValueInput('degrees')
				.appendField('Get Kelvin degrees from Celsius');
			this.setInputsInline(true);
			this.setOutput(true);
			this.setTooltip('');
		}
	};

	Blockly.Blocks['celsiustofahrenheit'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(230);
			this.appendValueInput('degrees')
				.appendField('Get Fahrenheit degrees from Celsius');
			this.setInputsInline(true);
			this.setOutput(true);
			this.setTooltip('');
		}
	};

	Blockly.Blocks['dict_get'] = {
		// Set element at index.
		init: function () {
			this.setColour(20);
			this.appendValueInput('ITEM')
				.appendField('get');
			this.appendValueInput('DICT')
				.setCheck('dict')
				.appendField('of');
			this.setInputsInline(true);
			this.setOutput(true);
		}
	};

	Blockly.Blocks['dict_get_literal'] = {
		// Set element at index.
		init: function () {
			this.setColour(20);
			this.appendValueInput('DICT')
				.appendField('get')
				.appendField(this.newQuote_(true))
				.appendField(new Blockly.FieldTextInput(
					'key'),
				'ITEM')
				.appendField(this.newQuote_(false))
				.setCheck('dict')
				.appendField('of');
			this.setInputsInline(true);
			this.setOutput(true);
		},
		/**
		 * Create an image of an open or closed quote.
		 * @param {boolean} open True if open quote, false if closed.
		 * @return {!Blockly.FieldImage} The field image of the quote.
		 * @private
		 */
		newQuote_: function (open) {
			let file = '';
			if (open == this.RTL) {
				file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAA0UlEQVQY023QP0oDURSF8e8MImhlUIiCjWKhrUUK3YCIVkq6bMAF2LkCa8ENWLoNS1sLEQKprMQ/GBDks3kDM+Oc8nfPfTxuANQTYBeYAvdJLL4FnAFfwF2ST9Rz27kp5YH/kwrYp50LdaXHAU4rYNYzWAdeenx7AbgF5sAhcARsAkkyVQ+ACbAKjIGqta4+l78udXxc/LiJG+qvet0pV+q7+tHE+iJzdbGz8FhmOzVcqj/qq7rcKI7Ut1Leq70C1oCrJMMk343HB8ADMEzyVOMff72l48gwfqkAAAAASUVORK5CYII=';
			} else {
				file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAAvklEQVQY022PoapCQRRF97lBVDRYhBcEQcP1BwS/QLAqr7xitZn0HzRr8Rts+htmQdCqSbQIwmMZPMIw3lVmZu0zG44UAFSBLdBVBDAFZqFo8eYKtANfBC7AE5h8ZNOHd1FrDnh4VgmDO3ADkujDHPgHfkLZ84bfaLjg/hD6RFLq9z6wBDr+rvuZB1bAEDABY76pA2mGHyWSjvqmIemc4WsCLKOp4nssIj8wD8qS/iSVJK3N7OTeJPV9n72ZbV7iDuSc2BaQBQAAAABJRU5ErkJggg==';
			}
			return new Blockly.FieldImage(file, 12, 12, '"');
		}
	};

	Blockly.Blocks['dict_keys'] = {
		// Set element at index.
		init: function () {
			this.setColour(20);
			this.appendValueInput('DICT')
				.setCheck('dict')
				.appendField('get all keys from');
			this.setInputsInline(false);
		}
	};

	Blockly.Blocks['dicts_create_with_container'] = {
		// Container.
		init: function () {
			this.setColour(20);
			this.appendDummyInput()
				.appendField('Create Dictionary');
			this.appendStatementInput('STACK');
			this.setTooltip('');
			this.contextMenu = false;
		}
	};

	Blockly.Blocks['dicts_create_with_item'] = {
		// Add items.
		init: function () {
			this.setColour(20);
			this.appendDummyInput()
				.appendField('key/value');
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
			this.contextMenu = false;
		}
	};
	Blockly.Blocks['dicts_create_with'] = {
		/**
		 * Block for creating a dict with any number of elements of any type.
		 * @this Blockly.Block
		 */
		init: function () {
			this.setInputsInline(false);
			this.setColour(20);
			this.itemCount_ = 1;
			this.updateShape_();
			this.setOutput(true, 'dict');
			this.setMutator(new Blockly.Mutator(['dicts_create_with_item']));
			this.setTooltip('');
		},
		/**
		 * Create XML to represent dict inputs.
		 * @return {Element} XML storage element.
		 * @this Blockly.Block
		 */
		mutationToDom: function (/* workspace */) {
			let container = document.createElement('mutation');
			container.setAttribute('items', this.itemCount_);
			return container;
		},
		/**
		 * Parse XML to restore the dict inputs.
		 * @param {!Element} xmlElement XML storage element.
		 * @this Blockly.Block
		 */
		domToMutation: function (xmlElement) {
			this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
			this.updateShape_();
		},
		/**
		 * Modify this block to have the correct number of inputs.
		 * @private
		 * @this Blockly.Block
		 */
		updateShape_: function () {
			// Delete everything.
			if (this.getInput('EMPTY')) {
				this.removeInput('EMPTY');
			}
			for (let i = 0; this.getInput('VALUE' + i); i++) {
				//this.getInput('VALUE' + i).removeField('KEY'+i);
				this.removeInput('VALUE' + i);
			}
			// Rebuild block.
			if (this.itemCount_ == 0) {
				this.appendDummyInput('EMPTY')
					.appendField('empty dictionary');
			} else {
				this.appendDummyInput('EMPTY')
					.appendField('create dictionary with');
				for (let i = 0; i < this.itemCount_; i++) {
					this.appendValueInput('VALUE' + i)
						.setCheck(null)
						.setAlign(Blockly.ALIGN_RIGHT)
						.appendField(
							new Blockly.FieldTextInput(
								'key'),
							'KEY' + i)
						.appendField(':');
				}
			}
		},
		/**
		 * Populate the mutator's dialog with this block's components.
		 * @param {!Blockly.Workspace} workspace Mutator's workspace.
		 * @return {!Blockly.Block} Root block in mutator.
		 * @this Blockly.Block
		 */
		decompose: function (workspace) {
			let containerBlock =
				Blockly.Block.obtain(workspace, 'dicts_create_with_container');
			containerBlock.initSvg();
			let connection = containerBlock.getInput('STACK').connection;
			for (let x = 0; x < this.itemCount_; x++) {
				let itemBlock = Blockly.Block.obtain(workspace, 'dicts_create_with_item');
				itemBlock.initSvg();
				connection.connect(itemBlock.previousConnection);
				connection = itemBlock.nextConnection;
			}
			return containerBlock;
		},
		/**
		 * Reconfigure this block based on the mutator dialog's components.
		 * @param {!Blockly.Block} containerBlock Root block in mutator.
		 * @this Blockly.Block
		 */
		compose: function (containerBlock) {
			let itemBlock = containerBlock.getInputTargetBlock('STACK');
			// Count number of inputs.
			let connections = [];
			let i = 0;
			while (itemBlock) {
				connections[i] = itemBlock.valueConnection_;
				itemBlock = itemBlock.nextConnection &&
					itemBlock.nextConnection.targetBlock();
				i++;
			}
			this.itemCount_ = i;
			this.updateShape_();
			// Reconnect any child blocks.
			for (let i = 0; i < this.itemCount_; i++) {
				if (connections[i]) {
					this.getInput('VALUE' + i).connection.connect(connections[i]);
				}
			}
		},
		/**
		 * Store pointers to any connected child blocks.
		 * @param {!Blockly.Block} containerBlock Root block in mutator.
		 * @this Blockly.Block
		 */
		saveConnections: function (containerBlock) {
			// Store a pointer to any connected child blocks.
			let itemBlock = containerBlock.getInputTargetBlock('STACK');
			let x = 0;
			while (itemBlock) {
				let value_input = this.getInput('VALUE' + x);
				itemBlock.valueConnection_ = value_input && value_input.connection.targetConnection;
				x++;
				itemBlock = itemBlock.nextConnection &&
					itemBlock.nextConnection.targetBlock();
			}
		}
	};

	Blockly.Blocks['to_json'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(20);
			this.appendValueInput('value')
				.appendField('to JSON');
			this.setOutput(true, 'String');
			this.setTooltip('');
		}
	};

<<<<<<< HEAD
	Blockly.Blocks['open_weather_setup'] = {
		init: function () {
			this.setHelpUrl('https://projects.wyliodrin.com/wiki/languages/visual#write');
			this.setColour(250);
			this.appendDummyInput()
				.appendField('Setup ');
			this.setNextStatement(true);
			this.setTooltip('Makes the required setup for OpenWeatherMap');
		}
	};
	Blockly.Blocks['open_weather_initialize'] = {
		init: function () {
			this.setHelpUrl('https://projects.wyliodrin.com/wiki/languages/visual#write');
			this.setColour(250);
			this.appendDummyInput()
				.appendField('Initialize Open Weather App');
			this.appendDummyInput()
				.appendField('City')
				.appendField(new Blockly.FieldTextInput('city'), 'city_value');
			this.appendDummyInput()
				.appendField('Country code')
				.appendField(new Blockly.FieldTextInput('country_code'), 'country_code_value');
			this.appendDummyInput()
				.appendField('API key')
				.appendField(new Blockly.FieldTextInput('api_key'), 'api_key_value');
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('Initializes connection to OpenWeatherMap');
		}
	};
	Blockly.Blocks['open_weather_show_label'] = {
		init: function () {
			this.setHelpUrl('https://projects.wyliodrin.com/wiki/languages/visual#write');
			this.setColour(250);
			this.appendDummyInput()
				.appendField('Label');
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([['temp', 'temp'], ['temp_feels', 'temp_feels'], ['weather_state', 'weather_state']]), 'type');
			this.appendDummyInput()
				.appendField('show');
			this.appendValueInput('value');
			this.appendDummyInput();
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('Sets the label for retrieved information');
		}
	};
	Blockly.Blocks['open_weather_get_coord'] = {
		init: function () {
			this.setColour(20);
			this.appendDummyInput()
				.appendField('Get coordinates from OpenWeatherMap');
			this.setOutput(true);
		}
	};
=======
	//Peripheral

	//Set HIGH/LOW pin X
	Blockly.Blocks['led_on_off'] = {
		init: function () {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(250);
			this.appendDummyInput()
				.appendField('Set ');
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([['LOW', '0'], ['HIGH', '1']]), 'mode');
			this.appendDummyInput()
				.appendField('pin');
			this.appendValueInput('pin')
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setInputsInline(true);
			this.setTooltip('');
		}
	};
	
>>>>>>> 724d450 (Added digital write on pin)
};
