
export function setup(options, imports, register) {

	var Countly = require('countly-sdk-web');

	let currentSession = {
		start: {},
		stop: {}
	};

	let app_language = null;
	let currentDevices = {};
	// let runPressedCount = {};
	// let stopPressedCount = {};
	// let openProjects = {};
	let connectedDevice = undefined;
	// console.log(APP_KEY);
	Countly.init({
		// eslint-disable-next-line no-undef
		app_key: APP_KEY,
		url: 'https://tracking.wyliodrin.studio',
		// debug: true,
		app_version: 2.0
	});

	let token = imports.workspace.getToken();

	if (!token)
	{
		// TODO 
	}

	function getTime(startStop = 0) {
		let today = new Date();
		if (startStop === 1)
			currentSession.start = today;
		if (startStop === 2)
			currentSession.stop = today;
		return {
			date: today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear(),
			time: today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
		};
	}

	app_language = imports.workspace.getLanguage();

	console.log(app_language);
	Countly.user_details({
		'name': token,
		'username': token,
		'language': app_language
	});


	// ca la add start
	function addStop() {
		let device = imports.workspace.getDevice();
		let project = imports.projects.getCurrentProject();

		// if (device) {
		// 	if (!stopPressedCount[device.board])
		// 		stopPressedCount[device.board] = {
		// 			count: 0,
		// 			times: []
		// 		};
		// 	stopPressedCount[device.board].count += 1;
		// 	stopPressedCount[device.board].times.push(getTime());
		// }

		// let newTime = getTime();
		Countly.add_event({
			'key': 'StopProject',
			'count': 1,
			'segmentation': {
				'device.type': device.type,
				'device.board': device.board,
				'language': project.language
			}
		});
	}

	// get project
	function addRun() {
		let device = imports.workspace.getDevice();
		let project = imports.projects.getCurrentProject();

		// if (device) {
		// 	if (!runPressedCount[device.board])
		// 		runPressedCount[device.board] = {
		// 			count: 0,
		// 			times: []
		// 		};
		// 	runPressedCount[device.board].count += 1;
		// 	runPressedCount[device.board].times.push(getTime());
		// }

		// let newTime = getTime();
		Countly.add_event({
			'key': 'RunProject',
			'count': 1,
			'segmentation': {
				'device.type': device.type,
				'device.board': device.board,
				'language': project.language
			}
		});
	}

	imports.hooks.addPostHook('workspace', 'setLanguage', (...args) => {
		app_language = args[1];
		Countly.user_details({
			'name': token,
			'username': token,
			'language': app_language
		});
		Countly.add_event({
			'key': 'LanguageChange',
			'count': 1,
			'segmentation': {
				'language': app_language
			}
		});
	});

	imports.hooks.addPreHook('system', 'close', () => {
		let stopTime = getTime(2);
		let data = stopTime.date + '/' + stopTime.time;
		setTimeout(function(){
			Countly.end_event({
				'key': 'currentSession.'+token,
				'count': 1,
				'segmentation': {
					'stop': data
				}
			});
		}, 20000);

		/** trimite catre ceva info inainte de inchidere */
		return {
			abort: false,
			args: [],
			ret: null
		};
	});

	imports.hooks.addPreHook('device_rpk', 'runProject', () => {
		addRun();
	});

	imports.hooks.addPreHook('device_wyapp', 'runProject', () => {
		addRun();
	});

	imports.hooks.addPreHook('device_wyapp', 'stopProject', () => {
		addStop();
	});

	imports.hooks.addPreHook('device_rpk', 'stopProject', () => {
		addStop();
	});

	imports.events.on ('ready', ()=>
	{
		Countly.add_event({
			'key': 'Start',
			'segmentation': {
				
			}
		});
	});

	imports.hooks.addPreHook('projects', 'selectCurrentProject', (projectInfo) => {
		// if (args[1]) {
		// 	let projectInfo = args[0];

		// if (!openProjects[projectInfo.language])
		// 	openProjects[projectInfo.language] = 0;
		// openProjects[projectInfo.language] += 1;

		if (projectInfo)
		{
			Countly.add_event({
				'key': 'OpenProject',
				'count': 1,
				'segmentation': {
					'language': projectInfo.language
				}
			});
		}
	});

	imports.hooks.addPreHook('workspace', 'updateDevices', (type, devices) => {
		// let type = args[0];
		// let devices = args[1];
		let olds = currentDevices[type];
		currentDevices[type] = {};
		for (let device of devices) {
			if (!device.placeholder) {
				if (!currentDevices[type][device.board])
					currentDevices[type][device.board] = 0;
				currentDevices[type][device.board] += 1;
			}
		}
		let ok = false;

		for (let ind in currentDevices[type]) {
			if (olds[ind] != currentDevices[type][ind]) {
				ok = true;
				break;
			}
		}
		// console.log(ok);
		// console.log(ind + ':' + currentDevices[type][ind]);
		
		// console.log('olds');
		// console.log(olds);
		// console.log('currents');
		// console.log(currentDevices[type]);
		if (ok) {
			let number = devices.reduce (
				(nr, device) => { return nr + (device.placeholder?0:1); }, 0);
			
			if (number > 0)
				Countly.add_event({
					'key': 'UpdateDevices',
					'count': 1,
					'segmentation': {
						'type': type,
						'count': number
					}
				});	
		}
		return null;
	});

	imports.hooks.addPreHook('workspace', 'updateDevice', (type, device) => {
		// let device = args[1];
		if (device.status === 'CONNECTED') {
			if (connectedDevice) {
				Countly.add_event({
					'key': 'ConnectionTry',
					'count': 1,
					'segmentation': {
						'type': device.type,
						'board': device.board
					}
				});
			} else {
				connectedDevice = device.id;
				Countly.add_event({
					'key': 'Connected',
					'count': 1,
					'segmentation': {
						'type': device.type,
						'board': device.board
					}
				});
			}
		}
		if (device.status === 'DISCONNECTED') {
			if (!connectedDevice) {
				Countly.add_event({
					'key': 'DisconnectionTry',
					'count': 1,
					'segmentation': {
						'type': device.type,
						'board': device.board
					}
				});
			} else {
				Countly.add_event({
					'key': 'Disconnected',
					'count': 1,
					'segmentation': {
						'type': device.type,
						'board': device.board
					}
				});
				connectedDevice = undefined;
			}
		}		
	});
	
	register(null, {});
}