(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__2d6a5e._.js", {

"[project]/src/util.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function cn(...inputs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["clsx"](inputs));
}

})()),
"[project]/src/gateway/pid.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PidSettingParameter": ()=>PidSettingParameter,
    "PidStatusParameter": ()=>PidStatusParameter,
    "pidInitialDisplay": ()=>pidInitialDisplay,
    "pidInitialState": ()=>pidInitialState,
    "setPidConfiguration": ()=>setPidConfiguration,
    "syncPidConfigurationFromDevice": ()=>syncPidConfigurationFromDevice,
    "syncPidStatus": ()=>syncPidStatus
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/connection.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const pidInitialState = new Array(3).fill({
    isActive: false,
    proportional: 0,
    integral: 0,
    derivative: 0,
    targetTemperature: 0,
    activeRange: 0
});
const pidInitialDisplay = new Array(3).fill({
    currentTemperature: 0,
    currentPower: 0,
    temperatureSamples: Array(100).fill(0),
    powerSamples: Array(100).fill(0)
});
class PidSettingParameter {
    proportional;
    integral;
    derivative;
    targetTemperature;
    activeRange;
    isActive;
    constructor({ proportional, integral, derivative, targetTemperature, activeRange, isActive }){
        this.proportional = proportional;
        this.integral = integral;
        this.derivative = derivative;
        this.targetTemperature = targetTemperature;
        this.activeRange = activeRange;
        this.isActive = isActive;
    }
    isEqual(other) {
        return this.proportional === other.proportional && this.integral === other.integral && this.derivative === other.derivative && this.targetTemperature === other.targetTemperature && this.activeRange === other.activeRange && this.isActive === other.isActive;
    }
}
class PidStatusParameter {
    currentTemperature;
    currentPower;
    temperatureSamples;
    powerSamples;
    constructor({ currentTemperature, currentPower, temperatureSamples, powerSamples }){
        this.currentTemperature = currentTemperature;
        this.currentPower = currentPower;
        this.temperatureSamples = temperatureSamples;
        this.powerSamples = powerSamples;
    }
}
const syncedPidState = new Map();
async function setPidConfiguration({ channel, pid }) {
    // only send if different
    // dont run this if device hasn't get the initializeSync process done
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isInitialized"]) {
        return false;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "pid.set",
        channel: channel,
        proportional: pid.proportional,
        integral: pid.integral,
        derivative: pid.derivative,
        targetTemperature: pid.targetTemperature,
        activeRange: pid.activeRange,
        isActive: pid.isActive
    });
    return true;
}
async function syncPidConfigurationFromDevice({ channel }) {
    const request = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "pid.get",
        channel
    });
    const pid = new PidSettingParameter({
        proportional: request["response"]["proportional"],
        integral: request["response"]["integral"],
        derivative: request["response"]["derivative"],
        targetTemperature: request["response"]["targetTemperature"],
        activeRange: request["response"]["activeRange"],
        isActive: request["response"]["isActive"]
    });
    const ctx = window.ctx;
    ctx.setPidState(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](ctx.pidState, (draft)=>{
        draft[channel].proportional = pid.proportional;
        draft[channel].integral = pid.integral;
        draft[channel].derivative = pid.derivative;
        draft[channel].targetTemperature = pid.targetTemperature;
        draft[channel].activeRange = pid.activeRange;
        draft[channel].isActive = pid.isActive;
    }));
    return pid;
}
async function syncPidStatus({ channel }) {
    const request = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "pid.status",
        channel: channel
    });
    const status = new PidStatusParameter({
        currentTemperature: request["response"]["currentTemperature"],
        currentPower: request["response"]["currentPower"],
        temperatureSamples: request["response"]["temperatureSamples"],
        powerSamples: request["response"]["powerSamples"]
    });
    console.log("sync pid status", {
        status,
        channel,
        request
    });
    const ctx = window.ctx;
    ctx.setPidDisplay(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](ctx.pidDisplay, (draft)=>{
        draft[channel].currentTemperature = status.currentTemperature;
        draft[channel].currentPower = status.currentPower;
        draft[channel].temperatureSamples = status.temperatureSamples;
        draft[channel].powerSamples = status.powerSamples;
    }));
    return status;
}

})()),
"[project]/src/gateway/event.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ButtonBrightnessEvent": ()=>ButtonBrightnessEvent,
    "ButtonClickEvent": ()=>ButtonClickEvent,
    "FlowmeterUpdateEvent": ()=>FlowmeterUpdateEvent,
    "PidUpdateEvent": ()=>PidUpdateEvent,
    "RelayUpdateEvent": ()=>RelayUpdateEvent,
    "TerminalUpdateEvent": ()=>TerminalUpdateEvent,
    "UnknownUpdateEvent": ()=>UnknownUpdateEvent,
    "interpretMessage": ()=>interpretMessage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/connection.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$provider$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/provider.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
class FlowmeterUpdateEvent {
    flowmeter;
    flowrate;
    constructor(data){
        this.flowmeter = [
            data[0],
            data[2],
            data[4]
        ];
        this.flowrate = [
            data[1],
            data[3],
            data[5]
        ];
    }
}
class ButtonClickEvent {
    groupId;
    controlButton;
    coffeeButtons;
    doseButton;
    // if groupId == 0, use these
    _waterButton;
    _doseButton;
    _warmerButton;
    constructor(data){
        this.groupId = data[0];
        this.controlButton = !data[1];
        this.coffeeButtons = [
            !data[2],
            !data[3],
            !data[4],
            !data[5]
        ];
        this.doseButton = !data[6];
    // this._waterButton = !data[7];
    // this._doseButton = !data[8];
    // this._warmerButton = !data[9];
    }
}
class ButtonBrightnessEvent {
    groupId;
    controlButton;
    coffeeButtons;
    doseButton;
    // if groupId == 0, use these
    _waterButton;
    _doseButton;
    _warmerButton;
    constructor(data){
        this.groupId = data[0];
        this.controlButton = data[1];
        this.coffeeButtons = [
            data[2],
            data[3],
            data[4],
            data[5]
        ];
        this.doseButton = data[6];
    // this._waterButton = data[7];
    // this._doseButton = data[8];
    // this._warmerButton = data[9];
    }
}
class RelayUpdateEvent {
    pump;
    group;
    refill;
    warmer;
    dose;
    boiler;
    constructor(data){
        this.pump = data[0];
        this.group = [
            !!data[1],
            !!data[2],
            !!data[3]
        ];
        this.refill = !!data[4];
        this.warmer = !!data[5];
        this.dose = !!data[6];
        this.boiler = !!data[7];
    }
}
class PidUpdateEvent {
    kp;
    ki;
    kd;
    taret;
    range;
    temperature;
    power;
    constructor(data){}
}
class TerminalUpdateEvent {
    message;
    constructor(data){
        this.message = data;
    }
}
class UnknownUpdateEvent {
    data;
    constructor(data){
        this.data = data;
    }
}
let EventType;
(function(EventType) {
    EventType[EventType["ButtonClick"] = 176] = "ButtonClick";
    EventType[EventType["RelayUpdate"] = 177] = "RelayUpdate";
    EventType[EventType["FlowmeterUpdate"] = 178] = "FlowmeterUpdate";
    EventType[EventType["PidUpdate"] = 179] = "PidUpdate";
    EventType[EventType["ButtonBrightness"] = 181] = "ButtonBrightness";
    EventType[EventType["TerminalUpdate"] = 182] = "TerminalUpdate";
    EventType[EventType["ResponseQuery"] = 183] = "ResponseQuery";
})(EventType || (EventType = {}));
function interpretMessage(header, data) {
    console.debug("Interpreet", data);
    const ctx = window.ctx;
    if (Array.isArray(data)) {
        console.debug("Data is an array");
        const uuid = data[0];
        const event = data[1];
        const payload = data.slice(2);
        if (event == 176) {
        // updateState(new ButtonClickEvent(payload))
        } else if (event == 181) {
        // updateState(new ButtonBrightnessEvent(payload))
        } else if (event == 177) {
        // updateState(new RelayUpdateEvent(payload))
        } else if (event == 179) {
        // updateState(new PidUpdateEvent(payload))
        } else if (event == 182) {
        // updateState(new TerminalUpdateEvent(payload as any))
        } else if (event == 178) {
            // updateState(new FlowmeterUpdateEvent(payload))
            console.log('fm/ update', event, payload);
            // this is an array of 8
            // 0 is flowcount, 1 is flowrate and so on
            // don't update state too fast
            // ctx.setFlowCount(produce(ctx.flowCount, draft => {
            //   draft = [
            //     payload[0],
            //     payload[2],
            //     payload[4]
            //   ]
            //   return draft
            // }))
            // ctx.setFlowRate(
            //   produce(ctx.flowRate, draft => {
            //     draft = [
            //       payload[1],
            //       payload[3],
            //       payload[5]
            //     ]
            //     return draft
            //   }))
            ctx.setFlowmeterDisplay(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](ctx.flowmeterDisplay, (draft)=>{
                draft = [
                    {
                        flowCount: Math.round(payload[0] * ctx.calibration.flowmeter[0] * 10) / 10,
                        flowRate: Math.round(payload[1] * ctx.calibration.flowmeter[0] * 10) / 10
                    },
                    {
                        flowCount: Math.round(payload[2] * ctx.calibration.flowmeter[1] * 10) / 10,
                        flowRate: Math.round(payload[3] * ctx.calibration.flowmeter[1] * 10) / 10
                    },
                    {
                        flowCount: Math.round(payload[4] * ctx.calibration.flowmeter[2] * 10) / 10,
                        flowRate: Math.round(payload[5] * ctx.calibration.flowmeter[2] * 10) / 10
                    }
                ];
                return draft;
            }));
        } else {
            return new UnknownUpdateEvent(payload);
        }
    } else if (typeof data === "object") {
        console.debug("Data is an object/dictionary");
        const id = data["id"];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mailbox"].hasOwnProperty(id)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mailbox"][id] = data;
        }
        if (data.command && data.command.startsWith("rp.")) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$provider$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["handleFeedback"](data);
        }
    }
}

})()),
"[project]/src/gateway/connection.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "charact": ()=>charact,
    "connectDevice": ()=>connectDevice,
    "decodeMessage": ()=>decodeMessage,
    "device": ()=>device,
    "disconnectDevice": ()=>disconnectDevice,
    "handleConnectButton": ()=>handleConnectButton,
    "incomeBuffer": ()=>incomeBuffer,
    "isInitialized": ()=>isInitialized,
    "mailbox": ()=>mailbox,
    "mtu": ()=>mtu,
    "queryDevice": ()=>queryDevice,
    "reconnectTimeout": ()=>reconnectTimeout,
    "requestDevice": ()=>requestDevice
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$decode$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$encode$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/event.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$pid$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/pid.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$calibration$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/calibration.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
async function sleep(ms) {
    await new Promise((resolve)=>setTimeout(resolve, ms));
}
var isInitialized = false;
async function initializeSync() {
    console.log('initilizeSync');
    // while the device is still connected, do the sync
    //% load the pid state
    const ctx = window.ctx;
    for(var channel = 0; channel < 3; channel++){
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$pid$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["syncPidConfigurationFromDevice"]({
            channel
        });
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$calibration$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["syncCalibrationFromDevice"]();
    isInitialized = true;
}
function handleConnectButton() {
    console.debug("State", device);
    if (device === null) {
        requestDevice();
    } else {
        disconnectDevice();
    }
}
let device = null;
let charact;
let mtu = 20;
let incomeBuffer = new Uint8Array();
let reconnectTimeout;
async function connectDevice(device) {
    console.debug("gateway/ attempt to connect to device");
    if (device?.gatt == undefined) {
        console.error("ble/ gatt doesn't exist", device);
        return;
    }
    await device.gatt.connect();
    const rosarioService = await device.gatt.getPrimaryService("0000ffe0-0000-1000-8000-00805f9b34fb");
    console.debug("ble/ rosarioService connected", rosarioService);
    charact = await rosarioService.getCharacteristic("0000ee00-0000-1000-8000-00805f9b34fb");
    charact.addEventListener("characteristicvaluechanged", (event)=>{
        const recv = event.target.value;
        if (recv == null) return;
        decodeMessage(new Uint8Array(recv.buffer));
    });
    charact.startNotifications();
    console.debug("ble/ general characteristic connected", charact);
    // read the mtu characteristic
    const mtuCharact = await rosarioService.getCharacteristic("0000ee01-0000-1000-8000-00805f9b34fb");
    // Convert DataView to int, LSB
    mtu = (await mtuCharact.readValue()).getUint16(0, true);
    if (mtu >= 500) {
        mtu = 500;
    }
    const firmwareCharact = await rosarioService.getCharacteristic("0000ee02-0000-1000-8000-00805f9b34fb");
    // Convert DataView to int, LSB
    let firmwareVersion = 0;
    firmwareVersion = (await firmwareCharact.readValue()).getUint16(0, true);
    console.debug("Connect device success", device.name, "fw:", firmwareVersion, "mtu:", mtu);
    window.ctx.setConnectButtonStyle("solid");
    window.ctx.setConnectButtonText(device.name?.replace("AnataLAB", "") || "Device");
    window.ctx.setConnected(true);
    setTimeout(async ()=>{
        await initializeSync();
    }, 2000);
}
function decodeMessage(data) {
    console.debug("/");
    // Get the first 4 bytes of data
    const headerRaw = data.slice(0, 4);
    const header = {
        isFinished: headerRaw[0] & 0b00000001 ? true : false,
        isFirst: headerRaw[0] & 0b00000010 ? true : false,
        isCompressed: headerRaw[0] & 0b00000100 ? true : false,
        requireAck: headerRaw[0] & 0b00001000 ? true : false,
        channel: headerRaw[1],
        payloadLength: headerRaw[3] + (headerRaw[2] << 8),
        frameType: headerRaw[0] & 0b11110000
    };
    const payload = data.slice(4);
    console.debug("decodeMessage", header, header.frameType);
    if (header.frameType == 48) {
        console.debug("ack signal received");
        mailbox[header.channel] = true;
        return;
    }
    if (header.isFirst) {
        incomeBuffer = new Uint8Array();
    }
    const currentBuffer = incomeBuffer;
    incomeBuffer = new Uint8Array(currentBuffer.length + payload.length);
    incomeBuffer.set(currentBuffer);
    incomeBuffer.set(payload, currentBuffer.length);
    if (header.isFinished) {
        if (header.isCompressed) {
            throw Error("not supported yet");
        }
        /** @type {object} */ try {
            const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$decode$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["decode"](incomeBuffer);
            // console.debug("HandleIncome", data, mailbox)
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["interpretMessage"](header, data);
        } catch (e) {
            console.warn("error decode", e, incomeBuffer);
        } finally{
            incomeBuffer = new Uint8Array();
        }
    }
}
async function requestDevice() {
    console.debug("gateway/ device requested");
    if (device != null) return;
    device = await window.navigator.bluetooth.requestDevice({
        filters: [
            {
                namePrefix: "AnataLAB"
            }
        ],
        optionalServices: [
            "0000ffe1-0000-1000-8000-00805f9b34fb",
            "0000ffe0-0000-1000-8000-00805f9b34fb"
        ]
    });
    if (!device) return;
    device.addEventListener("gattserverdisconnected", ()=>{
        isInitialized = false;
        console.debug(`ble/ disconnected`, "Red");
        reconnectTimeout = setTimeout(async ()=>{
            if (device) {
                await connectDevice(device);
            }
        }, 10000);
        window.ctx.setConnectButtonStyle("outline");
        window.ctx.setConnectButtonText("Retrying ...");
        window.ctx.setConnected(false);
    });
    await connectDevice(device);
}
async function disconnectDevice() {
    console.debug("gateway/ device disconnected");
    if (device == null) return;
    clearTimeout(reconnectTimeout);
    device.gatt?.disconnect();
    device = null;
    console.debug("CTX", window.ctx);
    window.ctx.setConnectButtonStyle("outline");
    window.ctx.setConnectButtonText("Connect");
    window.ctx.setConnected(false);
}
const splitChunk = (arr, size)=>Array.from({
        length: Math.ceil(arr.length / size)
    }, (v, i)=>arr.slice(i * size, i * size + size));
const encodeMessage = (chunk, header)=>{
    // generate the 4 header flags, then combine it with the chunk
    var headerByte = 0x00;
    if (header.isFinished) {
        headerByte = headerByte | 0b00000001;
    }
    if (header.isFirst) {
        headerByte = headerByte | 0b00000010;
    }
    if (header.isCompressed) {
        headerByte = headerByte | 0b00000100;
    }
    if (header.requireAck) {
        headerByte = headerByte | 0b00001000;
    }
    const headers = new Uint8Array([
        headerByte,
        header.channel,
        header.payloadLength / 256,
        header.payloadLength % 256
    ]);
    const finalized = new Uint8Array(headers.length + chunk.length);
    finalized.set(headers);
    finalized.set(chunk, headers.length);
    return finalized;
};
function assignRandomId() {
    window.randomId = window.randomId || 1;
    window.randomId += 1;
    if (window.randomId > 200) {
        window.randomId = 1;
    }
    return window.randomId;
}
let mailbox = {};
let isSending = false;
async function queryDevice(params) {
    if (!window.ctx.connected) return;
    while(isSending){
        await sleep(10);
    }
    isSending = true;
    /*
        main point of contact between api and device
        encode params, split to chunk, add the header and send
        wait for mailbox for return
        remember to set ack flag
    */ try {
        params.id = new Date().getTime();
        const encoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$encode$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["encode"](params);
        const chunks = splitChunk(encoded, mtu - 3);
        console.debug(`splited into ${chunks.length} chunks`);
        mailbox[params.id] = null;
        for(var idx = 0; idx < chunks.length; idx++){
            const chunk = chunks[idx];
            const selectedChannl = assignRandomId();
            const signed = encodeMessage(chunk, {
                isFinished: idx == chunks.length - 1,
                isFirst: idx == 0,
                isCompressed: false,
                requireAck: true,
                channel: selectedChannl,
                payloadLength: chunk.length,
                frameType: 0
            });
            mailbox[selectedChannl] = null;
            await charact.writeValue(signed);
            let startTs = new Date().getTime();
            while(new Date().getTime() - startTs < 3000){
                if (mailbox[selectedChannl] != null) {
                    break;
                }
                await sleep(1);
            }
            if (mailbox[selectedChannl] == null) {
                throw new Error("no ack signal received !");
            }
        }
        // now we wait for response
        let futureTs = new Date().getTime() + 5000;
        while(mailbox[params.id] == null){
            await sleep(1);
            if (new Date().getTime() > futureTs) {
                throw new Error("no response received !");
            }
        }
        let response = mailbox[params.id];
        delete mailbox[params.id];
        console.debug("queryDevice", {
            params,
            response
        });
        return response;
    } catch (e) {
        return null;
    } finally{
        isSending = false;
    }
}

})()),
"[project]/src/gateway/calibration.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
    Preferences report to State
    Here are list of API of mapping
*/ /*
    Calibration value are already reflected within the hardware !
*/ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "setCalibration": ()=>setCalibration,
    "syncCalibrationFromDevice": ()=>syncCalibrationFromDevice
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/connection.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const initialState = {
    flowmeter: [
        1,
        1,
        1
    ],
    grinder: [
        1,
        1,
        1
    ],
    pid: [
        0,
        0,
        0
    ]
};
const calibration = {
    initialState
};
const __TURBOPACK__default__export__ = calibration;
async function syncCalibrationFromDevice() {
    const request = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: 'calib.get'
    });
    // return {
    //     flowmeter: request['response']['calibration']['flowmeter'] as number[],
    //     grinder: request['response']['calibration']['grinder'] as number[],
    //     temperature: request['response']['calibration']['temperature'] as number[],
    // };
    const ctx = window.ctx;
    ctx.setCalibration(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](ctx.calibration, (draft)=>{
        draft.flowmeter = request['response']['calibration']['flowmeter'];
        draft.grinder = request['response']['calibration']['grinder'];
        // draft.temperature = request['response']['calibration']['temperature'] as number[]
        console.log('calibration/ pulled from device', request['response']['calibration']);
        return draft;
    }));
// !
// ctx.calibration = {
//     flowmeter: request['response']['calibration']['flowmeter'] as number[],
//     grinder: request['response']['calibration']['grinder'] as number[],
//     // temperature: request['response']['calibration']['temperature'] as number[],
// }
}
;
async function setCalibration({ flowmeter, grinder, temperature }) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isInitialized"]) return;
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: 'calib.set',
        calibration: {
            flowmeter,
            grinder,
            temperature
        }
    });
}

})()),
"[project]/src/gateway/service_worker.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "registerServiceWorker": ()=>registerServiceWorker
});
async function registerServiceWorker() {
    try {
        if (location.href.includes("localhost")) {
            console.log("sw/ disable service worker on localhost");
            return;
        }
        setInterval(function() {
            fetch("/index.html");
        }, 10000);
        const regitration = await navigator.serviceWorker.register("/sw.js", {
            scope: "/"
        });
    } catch (e) {
        console.error(e);
    }
}

})()),
"[project]/src/gateway/grinder.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EnumSkipBehaviour": ()=>EnumSkipBehaviour,
    "GrinderSettingParameter": ()=>GrinderSettingParameter,
    "getGrinderConfiguration": ()=>getGrinderConfiguration,
    "grinderInitialState": ()=>grinderInitialState,
    "setGrinderConfiguration": ()=>setGrinderConfiguration
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/connection.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
let EnumSkipBehaviour;
(function(EnumSkipBehaviour) {
    EnumSkipBehaviour["Skip"] = "Skip";
    EnumSkipBehaviour["Wait"] = "Wait";
})(EnumSkipBehaviour || (EnumSkipBehaviour = {}));
const grinderInitialState = [
    {
        connectionType: "Wire",
        connectionId: 20,
        calibration: 1.17,
        id: 0,
        name: "Arabica"
    },
    {
        connectionType: "Wire",
        connectionId: 20,
        calibration: 1.17,
        id: 0,
        name: "Coco"
    }
];
class GrinderSettingParameter {
    connectionType = "Wire";
    connectionId = 0;
    calibration = 0;
    constructor({ connectionType, connectionId, calibration }){
        this.connectionType = connectionType;
        this.connectionId = connectionId;
        this.calibration = calibration;
    }
}
async function setGrinderConfiguration() {
    // map each of the pid state to this
    const ctx = window.ctx;
    const grinders = ctx.grinderSettings;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "grinder.set",
        grinders
    });
}
async function getGrinderConfiguration() {
    const req = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "grinder.get"
    });
    const grinderSettings = req["response"]["grinderSettings"];
    console.log("grinder/ acquired", grinderSettings);
    const ctx = window.ctx;
    // ctx.grinderSettings.forEach(draft => {
    //     grinderSettings.set
    // })
    ctx.setGrinderSettings(grinderSettings);
}

})()),
"[project]/i18n/translations.vi.json (json)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"Formula\":\"Công thức\",\"Settings\":\"Cài đặt\",\"Add Formula\":\"Thêm công thức\",\"Formula Name\":\"Tên công thức\",\"Cancel\":\"Hủy\",\"OK\":\"Đồng ý\",\"Connect\":\"Kết nối\",\"English\":\"Tiếng Việt\",\"Tiếng Việt\":\"English\",\"Grind\":\"Xay\",\"Extract\":\"Chiết xuất\",\"Rest\":\"Nghỉ\",\"Profile\":\"Chu trình\",\"Sound\":\"Âm thanh\",\"RGB\":\"RGB\",\"◀ Back\":\"◀ Quay lại\",\"Select an action\":\"Lựa chọn hành động\",\"Run\":\"Chạy\",\"Stop\":\"Dừng\",\"Pause\":\"Tạm dừng\",\"Resume\":\"Tiếp tục\",\"Add\":\"Thêm\",\"Delete\":\"Xóa\",\"Edit\":\"Sửa\",\"Save\":\"Lưu\",\"Name\":\"Tên\",\"Value\":\"Giá trị\",\"Type\":\"Loại\",\"Description\":\"Mô tả\",\"Add Action\":\"Thêm hành động\",\"Add Action to Formula\":\"Thêm hành động vào công thức\",\"Add Step\":\"Thêm bước\",\"second\":\"giây\",\"seconds\":\"giây\",\"Time\":\"Thời gian\",\"for\":\"trong\",\"with pump power\":\"với công suất bơm\",\"can skip\":\"sẽ bỏ qua\",\"must wait\":\"sẽ chờ\",\"Can skip\":\"Bỏ qua\",\"Must wait\":\"Chờ\",\"of\":\" \",\"until portafilter is present\":\"cho đến khi tay pha vào vị trí\",\"this step is portafilter is absent\":\"bước này nếu tay pha không ở vị trí\",\"[Select ingredient]\":\"[Chọn nguyên liệu]\",\"Select ingredient\":\"Chọn nguyên liệu\",\"bean, grinder\":\", máy xay\",\"to extract\":\"để chiết xuất\",\"using\":\"với phương pháp kiểm soát\",\"profiling\":\" \",\"Flowrate\":\"tốc độ chảy\",\"Pressure\":\"áp lực họng pha\",\"Power\":\"công suất bơm\",\"First, reach\":\"Đầu tiên, đạt\",\"then\":\"sau đó\",\"within\":\"trong khoảng\",\"in\":\"trong\",\"Pour\":\"Bơm nhỏ giọt\",\"total of\":\"tổng cộng\",\", extract\":\", chiết xuất\",\"every\":\"mỗi\",\"Assign to Button\":\"Lưu công thức\",\"This process will save the formula to a physical button on your cofee machine so you don't always need a mobile device connected\":\"Quá trình này sẽ lưu công thức vào một nút vật lý trên máy pha cà phê của bạn để bạn không cần thiết phải kết nối thiết bị di động khi sử dụng\",\"Group 1\":\"Họng 1\",\"Group 2\":\"Họng 2\",\"Group 3\":\"Họng 3\",\"Button 1\":\"Nút 1\",\"Button 2\":\"Nút 2\",\"Button 3\":\"Nút 3\",\"Button 4\":\"Nút 4\",\"Download\":\"Lưu\",\"Teapresso\":\"Trà xanh\",\"Espresso\":\"Cà phê\",\"Pour Over\":\"Pha nhỏ giọt\",\"Reminder\":\"Nhắc nhở\",\"You can set up your grinder in the settings, the hardware can be connected to the machine wirelessly to the espresso machine\":\"Bạn cần cài đặt máy xay trong phần cài đặt\",\"Explaination\":\"Giải thích\",\"Grinder will skip this step if portafilter is not in position\":\"Máy xay sẽ bỏ qua bước này nếu tay pha không ở vị trí\",\"Grinder will wait until the portafilter is in position, then it will start grinding\":\"Máy xay sẽ chờ cho đến khi tay pha ở vị trí, sau đó nó sẽ bắt đầu xay\",\"Set grinder behaviour\":\"Cài đặt cho máy xay\",\"Channel\":\"Kênh\",\"Active\":\"Kích hoạt\",\"This PID channel is currently disabled\":\"Kênh PID hiện đang bị tắt\",\"Temperature\":\"Nhiệt độ\",\"Active Range\":\"Khoảng kích hoạt PID\",\"Heater\":\"Dây đốt\",\"Flowmeter\":\"Bộ đếm nước\",\"Grinder\":\"Máy xay\",\"Calibrate\":\"Căn chỉnh\",\"Calibrate flowmeter\":\"Căn chỉnh bộ đếm nước\",\"This calibration process is to set the conversion between flowmeter pulses count with the actual total weight of water extracted, specify how much it is actually weight to update the conversion\":\"Quá trình này để cài đặt tỉ lệ giữa số xung đếm của bộ đếm nước với trọng lượng nước thực tế được chiết xuất, hãy nhập vào trọng lượng thực tế để cập nhật tỉ lệ này\",\"Notice\":\"Lưu ý\",\"The button order might not be the same physically, right after clicking saved, the button will blink to indicate which button it is in real life\":\"Thứ tự nút có thể không giống với thứ tự vật lý. Ngay sau khi lưu, nút sẽ nhấp nháy để chỉ ra nút đó ở vị trí nào trên máy pha cà phê\",\"Real weight (gram)\":\"Trọng lượng thực tế (gram)\",\"Flowrate \":\"Tốc độ chảy \",\"Weight\":\"Trọng lượng chiết xuất\",\"Group\":\"Họng\",\"Scale\":\"Cân định lượng\",\"Light\":\"Đèn màu\",\"Keyboard\":\"Bàn phím\",\"How long?\":\"Chờ trong bao lâu?\",\"How much ?\":\"Định lượng\",\"Calibration is required for accurate weight, please go to Settings\":\"Cần phải căn chỉnh để có trọng lượng chính xác, hãy vào phần cài đặt\",\"Set pump power\":\"Công suất bơm\",\"Power require an external hardware to be connected to the machine, other wise it is simply ON/OFF\":\"Công suất yêu cầu bộ điều áp ngoại vi được kết nối với máy, nếu không nó chỉ là ON/OFF\",\"slowly reaching\":\"tiến dần tới\",\"slowly reaching up\":\"tiến dần lên\",\"slowly reaching down\":\"giảm dần xuống\",\"hold at\":\"giữ ở trạng thái\",\"First,\":\"Đầu tiên,\",\"Set target\":\"Đặt mục tiêu\",\"Pressure build-up time\":\"Thời gian tích trữ áp lực\"}"));
})()),
"[project]/i18n/translations.en.json (json)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"Formula\":\"Formula\",\"Settings\":\"Settings\",\"Grind\":\"Grind\"}"));
})()),
"[project]/i18n/index.js [client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var en = __turbopack_require__("[project]/i18n/translations.en.json (json)");
var vi = __turbopack_require__("[project]/i18n/translations.vi.json (json)");
const i18n = {
    translations: {
        en,
        vi
    },
    defaultLang: "en",
    useBrowserDefault: true,
    // optional property will default to "query" if not set
    languageDataStore: "localStorage"
};
module.exports = i18n;

}.call(this) }),
"[project]/src/gateway/target.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ProfileType": ()=>ProfileType,
    "TargetType": ()=>TargetType,
    "Time": ()=>Time,
    "Weight": ()=>Weight
});
let ProfileType;
(function(ProfileType) {
    ProfileType["PressureProfiling"] = "PressureProfile";
    ProfileType["FlowrateProfiling"] = "FlowateProfile";
})(ProfileType || (ProfileType = {}));
let TargetType;
(function(TargetType) {
    TargetType["Weight"] = "Weight";
    TargetType["Time"] = "Time";
})(TargetType || (TargetType = {}));
class Time {
    duration;
    constructor({ duration }){
        this.duration = duration;
    }
    toData() {
        return {
            targetType: "Time",
            duration: this.duration
        };
    }
    static fromData(data) {
        return new Time({
            duration: data.duration
        });
    }
}
class Weight {
    weight;
    constructor({ weight }){
        this.weight = weight;
    }
    toData() {
        return {
            targetType: "Weight",
            weight: this.weight
        };
    }
    static fromData(data) {
        return new Weight({
            weight: data.weight
        });
    }
}

})()),
"[project]/src/gateway/action.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ActionType": ()=>ActionType,
    "ConnectionType": ()=>ConnectionType,
    "GrinderAction": ()=>GrinderAction,
    "ProfilingAction": ()=>ProfilingAction,
    "PumpAction": ()=>PumpAction,
    "Segment": ()=>Segment
});
let ActionType;
(function(ActionType) {
    ActionType["Grinding"] = "Grinding";
    ActionType["Extracting"] = "Extracting";
    ActionType["Profiling"] = "Profilling";
})(ActionType || (ActionType = {}));
let ConnectionType;
(function(ConnectionType) {
    ConnectionType["Wire"] = "Wired";
    ConnectionType["Bluetooth"] = "Bluetooth";
})(ConnectionType || (ConnectionType = {}));
class GrinderAction {
    // grinder have grinderId, grinderConnection
    grinderId;
    grinderConnection;
    canSkip;
    canWait;
    constructor({ grinderId, grinderConnection, canSkip, canWait }){
        this.grinderId = grinderId;
        this.grinderConnection = grinderConnection;
        this.canSkip = canSkip;
        this.canWait = canWait;
    }
    toData() {
        return {
            actionType: "Grinding",
            grinderId: this.grinderId,
            grinderConnection: this.grinderConnection,
            canSkip: this.canSkip,
            canWait: this.canWait
        };
    }
    static fromData(data) {
        return new GrinderAction({
            grinderId: data.grinderId,
            grinderConnection: data.grinderConnection,
            canSkip: data.canSkip,
            canWait: data.canWait
        });
    }
}
class PumpAction {
    power;
    valveState;
    constructor({ power, valveState }){
        this.power = power;
        this.valveState = valveState;
    }
    toData() {
        return {
            actionType: "Extracting",
            power: this.power,
            valveState: this.valveState
        };
    }
    static fromData(data) {
        return new PumpAction({
            power: data.power,
            valveState: data.valveState
        });
    }
}
class ProfilingAction {
    profileType;
    segments;
    refreshInterval;
    kp;
    ki;
    kd;
    constructor({ profileType, segments, refreshInterval }){
        this.profileType = profileType;
        this.segments = segments;
        this.refreshInterval = refreshInterval;
    }
    toData() {
        const steps = [];
        this.segments.forEach((segment)=>{
            steps.push(segment);
        });
        return {
            actionType: "Profilling",
            profileType: this.profileType,
            refreshInterval: this.refreshInterval,
            segments: steps
        };
    }
    static fromData(data) {
        const segments = data.segments.map((segment)=>Segment.fromData(segment));
        return new ProfilingAction({
            profileType: data.profileType,
            segments: segments,
            refreshInterval: data.refreshInterval
        });
    }
}
class Segment {
    duration;
    value;
    constructor({ duration, value }){
        this.duration = duration;
        this.value = value;
    }
    toData() {
        return {
            duration: this.duration,
            value: this.value
        };
    }
    static fromData(data) {
        return new Segment({
            duration: data.duration,
            value: data.value
        });
    }
}

})()),
"[project]/src/gateway/step.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EnumAction": ()=>EnumAction,
    "EnumProfileType": ()=>EnumProfileType,
    "EnumTarget": ()=>EnumTarget,
    "Step": ()=>Step
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$action$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/action.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$target$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/target.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
let EnumTarget;
(function(EnumTarget) {
    EnumTarget["Time"] = "Time";
    EnumTarget["Weight"] = "Weight";
})(EnumTarget || (EnumTarget = {}));
let EnumAction;
(function(EnumAction) {
    EnumAction["Grind"] = "Grind";
    EnumAction["Rest"] = "Rest";
    EnumAction["Extract"] = "Extract";
    EnumAction["Profile"] = "Profile";
    EnumAction["PourOver"] = "Pour";
    EnumAction["Sound"] = "Sound";
    EnumAction["RGB"] = "RGB";
})(EnumAction || (EnumAction = {}));
let EnumProfileType;
(function(EnumProfileType) {
    EnumProfileType["Pressure"] = "Pressure";
    EnumProfileType["Flowrate"] = "Flowrate";
    EnumProfileType["Power"] = "Power";
})(EnumProfileType || (EnumProfileType = {}));
class Step {
    action;
    target;
    constructor({ action, target }){
        this.action = action;
        this.target = target;
    }
    toData() {
        return {
            action: this.action.toData(),
            target: this.target.toData()
        };
    }
    static fromData(data) {
        let _action;
        switch(data.actionType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$action$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ActionType"].Grinding:
                _action = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$action$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["GrinderAction"](data.action);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$action$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ActionType"].Extracting:
                _action = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$action$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["PumpAction"](data.action);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$action$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ActionType"].Profiling:
                _action = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$action$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ProfilingAction"](data.action);
                break;
            default:
                _action = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$action$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["GrinderAction"](data.action);
        }
        let _target;
        switch(data.targetType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$target$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["TargetType"].Time:
                _target = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$target$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Time"](data.target);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$target$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["TargetType"].Weight:
                _target = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$target$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Weight"](data.target);
                break;
            default:
                _target = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$target$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Time"](data.target);
        }
        return new Step({
            action: _action,
            target: _target
        });
    }
}

})()),
"[project]/src/gateway/formula.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EnumFormulaType": ()=>EnumFormulaType,
    "Formula": ()=>Formula,
    "cancelFormulaClick": ()=>cancelFormulaClick,
    "cancelRunningFormula": ()=>cancelRunningFormula,
    "clearGroupFormula": ()=>clearGroupFormula,
    "downloadFormula": ()=>downloadFormula,
    "loadGroupFormula": ()=>loadGroupFormula,
    "readGroupFormula": ()=>readGroupFormula,
    "registerFormulaClick": ()=>registerFormulaClick,
    "runFormula": ()=>runFormula,
    "runGroupFormula": ()=>runGroupFormula,
    "saveGroupFormula": ()=>saveGroupFormula,
    "writeGroupFormula": ()=>writeGroupFormula
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/connection.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/step.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
let EnumFormulaType;
(function(EnumFormulaType) {
    EnumFormulaType["Espresso"] = "Espresso";
    EnumFormulaType["Teapresso"] = "Teapresso";
    EnumFormulaType["PourOver"] = "PourOver";
})(EnumFormulaType || (EnumFormulaType = {}));
class Formula {
    steps;
    name;
    uuid;
    createdAt;
    lastUsed;
    totalUsed;
    constructor({ steps, name, uuid, createdAt, lastUsed, totalUsed }){
        this.steps = steps;
        this.name = name;
        this.uuid = uuid;
        this.createdAt = createdAt;
        this.lastUsed = lastUsed;
        this.totalUsed = totalUsed;
    }
    toData() {
        const steps = [];
        this.steps.forEach((step)=>{
            steps.push(step);
        });
        return {
            steps: steps,
            name: this.name,
            uuid: this.uuid,
            createdAt: this.createdAt,
            lastUsed: this.lastUsed,
            totalUsed: this.totalUsed
        };
    }
    fromData(data) {
        const steps = data.steps.map((step)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Step"].fromData(step));
        return new Formula({
            steps: steps,
            name: data.name,
            uuid: data.uuid,
            createdAt: data.createdAt,
            lastUsed: data.lastUsed,
            totalUsed: data.totalUsed
        });
    }
}
async function clearGroupFormula({ groupId, buttonId }) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "group.clear",
        groupId,
        buttonId
    });
}
async function writeGroupFormula({ groupId, buttonId, formula }) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "group.write",
        groupId,
        buttonId,
        formula
    });
}
async function saveGroupFormula({ groupId, buttonId }) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "group.save",
        groupId,
        buttonId
    });
}
async function loadGroupFormula({ groupId, buttonId }) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "group.load",
        groupId,
        buttonId
    });
}
async function readGroupFormula({ groupId, buttonId }) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "group.read",
        groupId,
        buttonId
    });
}
async function runGroupFormula({ groupId, buttonId }) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "group.run",
        groupId,
        buttonId
    });
}
function convertSteps(steps) {
    /*
    There are bugs in the Runes of NewStepCard that keep messing this up
    This is a clean workaround
  */ const cvts = [];
    for (const step of steps){
        // if (step.action.actionType == 'Rest') {
        //   const action = step.action as IRestParam
        //   action.valveState = action.valveState * 1000
        // }
        const cvt = {};
        cvt.action = {};
        cvt.target = {};
        cvts.push(cvt);
        const mock = 1; // send raw valu 
        if (step.action.actionType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Rest) {
            cvt.action.actionType = "Rest";
            cvt.action.valveState = step.action.valveState || true;
            cvt.target.targetType = "Time";
            cvt.target.value = step.target.value * 1000 || 0;
        } else if (step.action.actionType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Extract) {
            cvt.action.actionType = "Extract";
            cvt.action.power = step.action.power || 0;
            cvt.target.targetType = "Weight";
            cvt.target.value = step.target.value * mock || 0;
        } else if (step.action.actionType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Grind) {
            cvt.action.actionType = "Grind";
            // cvt.action.power = step.action.power;
            cvt.action.ingredient = step.action.ingredient || "";
            cvt.action.canSkip = step.action.canSkip || false;
            cvt.target.targetType = "Weight";
            cvt.target.value = step.target.value * mock || 0;
        } else if (step.action.actionType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].PourOver) {
            cvt.action.actionType = "Pour";
            cvt.action.stepAmount = step.action.stepAmount;
            cvt.action.duration = step.action.duration * 1000;
            cvt.action.pumpPower = step.action.pumpPower;
            cvt.target.targetType = "Weight";
            cvt.target.value = step.target.value * mock || 0;
        } else if (step.action.actionType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Profile) {
            cvt.action.actionType = "Profile";
            cvt.action.segments = step.action.segments || [];
            cvt.action.profilingType = step.action.profilingType;
            cvt.target.targetType = "Weight";
            cvt.target.value = step.target.value * mock || 0;
            // loop through each segment, the duration must all be *1000 (miliseconds)
            // clone the array
            const clonedSegments = JSON.parse(JSON.stringify(cvt.action.segments));
            // transform the smooth and timescale
            const transformedSegments = [];
            for (const segment of clonedSegments){
                if (segment.smooth == false) {
                    console.log("add the smooth segments");
                    transformedSegments.push({
                        duration: 1,
                        value: segment.value
                    });
                    transformedSegments.push({
                        duration: segment.duration * 1000,
                        value: segment.value
                    });
                } else {
                    transformedSegments.push({
                        duration: segment.duration * 1000,
                        value: segment.value
                    });
                }
            }
            cvt.action.segments = transformedSegments;
            console.log("segments", transformedSegments);
        }
    // if (step.target.targetType == EnumTarget.Time) {
    //   step.target.value = step.target.value * 1000
    // }
    // else if (step.target.targetType == EnumTarget.Weight) {
    //   step.target.value *= 100
    // }
    }
    return cvts;
}
async function cancelRunningFormula(groupId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "group.cancel",
        groupId: groupId
    });
}
const formulaClickQueue = {};
const groupRunningFormulaId = {};
let formulaClickQueueTimeout;
function registerFormulaClick(formulaId) {
    formulaClickQueue[formulaId] = formulaClickQueue[formulaId] || 0;
    formulaClickQueue[formulaId] += 1;
    clearTimeout(formulaClickQueueTimeout);
    formulaClickQueueTimeout = setTimeout(async ()=>{
        for(const key in formulaClickQueue){
            const groupId = formulaClickQueue[key];
            const formulaId = key;
            console.log("provider/ registerFormulaClick", key, formulaClickQueue[key]);
            groupRunningFormulaId[key] = groupId;
            // clear the feedback of the current chart
            window.fbstore = [];
            await runFormula({
                formulaId: key,
                groupId: formulaClickQueue[key]
            });
            delete formulaClickQueue[key];
        }
    }, 1000);
}
async function cancelFormulaClick(formulaId) {
    console.log("provider/ cancelFormulaClick", formulaId);
    clearTimeout(formulaClickQueueTimeout);
    setTimeout(async ()=>{
        // await cancelRunningFormula(1);
        // await cancelRunningFormula(2);
        await cancelRunningFormula(groupRunningFormulaId[formulaId]);
        delete groupRunningFormulaId[formulaId];
    });
}
async function downloadFormula({ groupId, buttonId, formulaId }) {
    const ctx = window.ctx;
    const steps = ctx.formulas[formulaId].steps;
    const convertedSteps = convertSteps(steps);
    const fm = JSON.parse(JSON.stringify(ctx.formulas[formulaId]));
    fm.steps = convertedSteps;
    fm.buildupDuration *= 1000;
    console.warn("Formula");
    console.warn(JSON.stringify(fm, null, 2));
    await writeGroupFormula({
        groupId,
        buttonId,
        formula: fm
    });
    await saveGroupFormula({
        groupId,
        buttonId
    });
}
async function runFormula({ formulaId, groupId }) {
    const ctx = window.ctx;
    const steps = ctx.formulas[formulaId].steps;
    if (groupId > 3 || groupId < 1) return;
    // const steps = (JSON.parse(localStorage.getItem(formulaId)) as IStep[]) || [];
    console.log(`device/ run the formula, load from LS on GROUP ${groupId}`, steps);
    const convertedSteps = convertSteps(steps);
    console.log("device/ run the formula");
    console.log(JSON.stringify(convertedSteps, null, 2));
    // clear the formulaFeedbacks
    ctx.setFeedbacks(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](ctx.formulaFeedbacks, (draft)=>{
        draft[formulaId] = {};
        return draft;
    }));
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "group.cancel",
        groupId: groupId
    });
    const fm = JSON.parse(JSON.stringify(ctx.formulas[formulaId]));
    fm.buildupDuration *= 1000;
    fm.steps = convertedSteps;
    fm.formulaId = formulaId;
    console.warn("Formula");
    console.warn(JSON.stringify(fm, null, 2));
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "group.write",
        groupId: groupId,
        buttonId: 0,
        formula: fm
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
        command: "group.run",
        groupId: groupId,
        buttonId: 0
    });
}

})()),
"[project]/src/gateway/provider.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DeviceContext": ()=>DeviceContext,
    "DeviceProvider": ()=>DeviceProvider,
    "default": ()=>__TURBOPACK__default__export__,
    "handleFeedback": ()=>handleFeedback,
    "initialState": ()=>initialState,
    "switchLocales": ()=>switchLocales
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/formula.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/esm/useEffectOnce/useEffectOnce.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/esm/useLocalStorage/useLocalStorage.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$grinder$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/grinder.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$pid$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/pid.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$service_worker$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/service_worker.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$calibration$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/calibration.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
async function sleep(ms) {
    await new Promise((rs, _)=>setTimeout(rs, ms));
}
function switchLocales(locale) {
    console.log('switchLocales', locale);
    // copied from next-export-i18n / LanguageSwitcher
    window.localStorage.setItem("next-export-i18n-lang", locale);
    const event = new Event("localStorageLangChange");
    document.dispatchEvent(event);
}
const initialState = {
    calibration: {
        flowmeter: new Array(3).fill(1),
        grinder: new Array(3).fill(1)
    },
    setCalibration: (calibration)=>{},
    flowmeterDisplay: new Array(3).fill({
        flowRate: 0,
        flowCount: 0
    }),
    setFlowmeterDisplay: (flowmeterDisplay)=>{},
    flowCount: new Array(3).fill(0),
    flowRate: new Array(3).fill(0),
    connectButtonStyle: "outline",
    connectButtonText: "Connect",
    selectedPage: "Formula",
    pidState: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$pid$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pidInitialState"],
    formulas: {},
    setPidState: (pidState)=>{},
    pidDisplay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$pid$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["pidInitialDisplay"],
    setPidDisplay: (pidState)=>{},
    connected: false,
    grinderSettings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$grinder$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["grinderInitialState"],
    setGrinderSettings: (grinderSettings)=>{},
    setFlowCount: (flowCount)=>{},
    setFlowRate: (flowRate)=>{},
    registerFormulaClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["registerFormulaClick"],
    cancelFormulaClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cancelFormulaClick"],
    downloadFormula: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["downloadFormula"],
    selectedFormulaId: "",
    registerSelectedFormulaId: (formulaId)=>{},
    setFormulas: (formulas)=>{},
    setLayout: (layout)=>{},
    setSelectedPage: (page)=>{},
    layout: {},
    // steps: [] as IStep[],
    // setSteps: (steps: IStep[]) => {},
    darkMode: false,
    setDarkMode: (darkMode)=>{},
    language: "en",
    setLanguage: (language)=>{},
    draggable: false,
    setDraggable: (draggable)=>{},
    addFormulaOpen: false,
    setAddFormulaOpen: (state)=>{},
    style: {
        background: "bg-white",
        hightlight: "orange-800",
        primary: "purple-800"
    },
    setStyle: (style)=>{},
    progressReport: {},
    setProgressReport: (progressReport)=>{},
    formulaFeedbacks: {},
    formulaUpdatedTimestamp: {},
    setformulaUpdatedTimestamp: (formulaUpdatedTimestamp)=>{},
    setFeedbacks: (formulaFeedbacks)=>{},
    modalDisplay: false,
    setModalDisplay: (modalDisplay)=>{},
    switchLocales: switchLocales
};
let updateFlag = {
    pidState: false,
    grinderState: false,
    calibrationState: false
};
const manageSync = async ()=>{
    // const ctx = (window as any).ctx as typeof initialState;
    const ctx = window.ctx;
    if (updateFlag.pidState) {
        updateFlag.pidState = false;
        console.log("Update PID", ctx.pidState);
        for(var channel = 0; channel < 3; channel++){
            const pid = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$pid$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["PidSettingParameter"]({
                proportional: ctx.pidState[channel].proportional,
                integral: ctx.pidState[channel].integral,
                derivative: ctx.pidState[channel].derivative,
                targetTemperature: ctx.pidState[channel].targetTemperature,
                activeRange: ctx.pidState[channel].activeRange,
                isActive: ctx.pidState[channel].isActive
            });
            console.log("sync/ pid query to device", pid);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$pid$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setPidConfiguration"]({
                channel,
                pid
            });
        }
    }
    if (updateFlag.grinderState) {
        updateFlag.grinderState = false;
        console.log("topic/ update grinder settings");
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$grinder$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setGrinderConfiguration"]();
    }
    if (updateFlag.calibrationState) {
        updateFlag.calibrationState = false;
        console.log('topic/ update calibration settings');
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$calibration$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setCalibration"]({
            flowmeter: ctx.calibration.flowmeter,
            grinder: ctx.calibration.grinder,
            temperature: [
                0,
                0,
                0
            ]
        });
    }
};
const managePull = async ()=>{
    // handle the pulling of data, mostly the pid every 5 seconds to update the chart state
    const ctx = window.ctx;
    try {
        for(var channel = 0; channel < 3; channel++){
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$pid$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["syncPidStatus"]({
                channel
            });
        }
    } catch (e) {
        console.error(e);
    }
};
const DeviceContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](initialState);
function handleFeedback(data) {
    console.log("Report/", JSON.stringify(data, null, 2));
    const ctx = window.ctx;
    const { formulaId, stepId, target, action } = data;
    // const { type, total, value } = target;
    if (data.command == "rp.start" && data.isLocal == true) {
        ctx.setModalDisplay(true);
        try {
            window.startMissionControl(data);
        } catch (e) {
            console.error(e);
        }
    } else if (data.command == "rp.finish") {
    // setTimeout(() => {
    //   ctx.setModalDisplay(false)
    // }, 10000)
    } else if (data.command == "rp.progress") {
        // update the progress locally
        if (ctx.modalDisplay) {
            // stream to mission control, don't set any feedbacks
            try {
                window.updateMissionControl(data);
            } catch (e) {}
            return;
        }
    }
    ctx.setformulaUpdatedTimestamp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](ctx.formulaUpdatedTimestamp, (draft)=>{
        draft[data.formulaId] = new Date().getTime();
        return draft;
    }));
    ctx.setFeedbacks(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](ctx.formulaFeedbacks, (draft)=>{
        // draft[formulaId][stepId].target = target
        const formulaUpdate = draft[formulaId] || {};
        draft[formulaId] = formulaUpdate;
        // mofify the step of the formula update
        formulaUpdate[stepId] = formulaUpdate[stepId] || {};
        formulaUpdate[stepId].target = target;
        formulaUpdate[stepId].action = action;
        return draft;
    }));
    console.log("Update/ : Set formulaUpdatedTimestamp to ", data.formulaId);
}
function DeviceProvider({ children }) {
    _s();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const [connectButtonStyle, setConnectButtonStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.connectButtonStyle);
    const [connectButtonText, setConnectButtonText] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](t("Connect"));
    const [connected, setConnected] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.connected);
    const [selectedFormulaId, registerSelectedFormulaId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLocalStorage"]("rapp-selectedFormulaId", "");
    const { lang } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelectedLanguage"]();
    const [calibration, setCalibration] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.calibration);
    const [formulaUpdatedTimestamp, setformulaUpdatedTimestamp] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.formulaUpdatedTimestamp);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (lang == "en" && !connected) {
            setConnectButtonText("Connect");
        } else if (lang == "vi" && !connected) {
            setConnectButtonText("Kết nối");
        }
    }, [
        lang,
        connected
    ]);
    const [formulas, setFormulas] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLocalStorage"]("rapp-fml", {});
    const [formulaFeedbacks, setFeedbacks] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]({});
    const [layout, setLayout] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLocalStorage"]("rapp-layout", {});
    // const { toast } = usseToast();
    //   (window as any).toast = toast
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]();
    const pathMapping = {
        "/": "Formula",
        "/lab": "Alchemy",
        "/setting": "Setting"
    };
    const initialSelectedPage = pathMapping[router.pathname];
    console.log(`map/ set initialSelectedPage to ${initialSelectedPage}`);
    const [selectedPage, setSelectedPage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialSelectedPage);
    const [pidState, setPidState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.pidState);
    const [pidDisplay, setPidDisplay] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.pidDisplay);
    const [grinderSettings, setGrinderSettings] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.grinderSettings);
    const [darkMode, setDarkMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLocalStorage"]("darkMode", false);
    const [language, setLanguage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLocalStorage"]("language", "en");
    const [draggable, setDraggable] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](Object.entries(formulas).length == 0);
    // const [steps, setSteps] = useState<IStep[]>([]);
    const [style, setStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.style);
    const [flowCount, setFlowCount] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.flowCount);
    const [flowRate, setFlowRate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.flowRate);
    const [flowmeterDisplay, setFlowmeterDisplay] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](initialState.flowmeterDisplay);
    const [modalDisplay, setModalDisplay] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [addFormulaOpen, setAddFormulaOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [
        darkMode
    ]);
    const [progressReport, setProgressReport] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]({});
    // useEffect(() => {
    //   manageSync({ ctx, connected });
    // }, [connected]);
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            connectButtonStyle,
            connectButtonText,
            selectedPage,
            pidState,
            pidDisplay,
            connected,
            grinderSettings,
            selectedFormulaId,
            formulas,
            layout,
            calibration,
            // steps,
            darkMode,
            language,
            draggable,
            style,
            addFormulaOpen,
            progressReport,
            formulaFeedbacks,
            flowmeterDisplay,
            setformulaUpdatedTimestamp,
            formulaUpdatedTimestamp,
            modalDisplay,
            setModalDisplay
        }), [
        grinderSettings,
        connected,
        connectButtonStyle,
        connectButtonText,
        selectedPage,
        pidState,
        pidDisplay,
        selectedFormulaId,
        formulas,
        layout,
        calibration,
        // steps,
        draggable,
        language,
        darkMode,
        style,
        addFormulaOpen,
        progressReport,
        formulaFeedbacks,
        flowmeterDisplay,
        setformulaUpdatedTimestamp,
        formulaUpdatedTimestamp,
        setModalDisplay,
        modalDisplay
    ]);
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            setConnected,
            setConnectButtonStyle,
            setConnectButtonText,
            setSelectedPage,
            setPidState,
            setPidDisplay,
            setGrinderSettings,
            registerFormulaClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["registerFormulaClick"],
            cancelFormulaClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cancelFormulaClick"],
            downloadFormula: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["downloadFormula"],
            registerSelectedFormulaId,
            setLayout,
            setFormulas,
            setCalibration,
            // setSteps,
            setDarkMode,
            setLanguage,
            setDraggable,
            setStyle,
            setAddFormulaOpen,
            setProgressReport,
            setFeedbacks,
            switchLocales,
            setFlowCount,
            setFlowRate,
            setFlowmeterDisplay
        }), [
        setConnected,
        setConnectButtonStyle,
        setConnectButtonText,
        setSelectedPage,
        setPidState,
        setPidDisplay,
        setGrinderSettings,
        registerSelectedFormulaId,
        setLayout,
        setFormulas,
        // setSteps,
        setDarkMode,
        setLanguage,
        setDraggable,
        setStyle,
        setAddFormulaOpen,
        setProgressReport,
        setFeedbacks,
        setFlowCount,
        setFlowRate,
        setFlowmeterDisplay
    ]);
    const props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            ...value,
            ...setValue
        }), [
        setValue,
        value
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        window.ctx = props;
    }, [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        updateFlag.pidState = true; // mark that pid is updated, so a sync will be pending
    }, [
        pidState,
        setPidState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        updateFlag.calibrationState = true;
    }, [
        calibration
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        updateFlag.grinderState = true;
    }, [
        grinderSettings,
        setGrinderSettings
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffectOnce"](()=>{
        // dont use useEffect, it will create 3 intervals
        var win = window;
        if (win.syncInterval) clearInterval(win.syncInterval);
        win.syncInterval = setInterval(async ()=>await manageSync(), 5000);
        // create a private key
        if (win.pullInterval) clearInterval(win.pullInterval);
        win.pullInterval = setInterval(async ()=>await managePull(), 10000);
        setTimeout(async ()=>{
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$service_worker$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["registerServiceWorker"]();
        }, 10000);
    });
    // Todo: fix later, too lzay
    const contextValue = {
        ...props,
        flowCount: [],
        flowRate: []
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](DeviceContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/gateway/provider.tsx>",
        lineNumber: 524,
        columnNumber: 5
    }, this);
}
_s(DeviceProvider, "XFvLoHkW6Gl87cW/MfcsR43nhKU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelectedLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useLocalStorage$2f$useLocalStorage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffectOnce"]
    ];
});
_c = DeviceProvider;
const __TURBOPACK__default__export__ = DeviceContext;
var _c;
__turbopack_refresh__.register(_c, "DeviceProvider");

})()),
"[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$provider$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/provider.tsx [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
;
const useDeviceContext = ()=>{
    _s();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$provider$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DeviceContext"]);
};
_s(useDeviceContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const __TURBOPACK__default__export__ = useDeviceContext;

})()),
"[project]/src/components/mission-control.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/Line.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/XAxis.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/YAxis.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Tooltip.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Legend.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/Area.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/chart/ComposedChart.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/util.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];
const MissionControl = ()=>{
    _s();
    const timeout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const startTimestamp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const { setModalDisplay } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const [height, setHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](window.innerHeight);
    const [width, setWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](window.innerWidth);
    const [flip, setFlip] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        window.addEventListener('resize', ()=>{
            setFlip(window.innerHeight > window.innerWidth);
        });
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        window.startMissionControl = (e)=>{
            window.missionStartTimestamp = Date.now();
            console.log("rp.start mission stasrt");
            setData([]);
        };
        window.updateMissionControl = (update)=>{
            console.log("mission/", update, data);
            const currentState = {
                pressure: Math.round((update.pressure || 0) * 10) / 10,
                flowrate: Math.round((update.flowrate || 0) * 10) / 10,
                power: update.power,
                weight: Math.round((update.flowcount || 0) * 10) / 10,
                time: Math.round((Date.now() - window.missionStartTimestamp || 0) / 1000)
            };
            setData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](data, (draft)=>{
                draft.push(currentState);
            }));
        };
        window.clearMissionControl = ()=>{
            // set the start time
            clearTimeout(timeout.current);
            timeout.current = setTimeout(()=>{
                setData([]);
            }, 10000);
        };
    // clear the values
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("w-screen h-screen  flex flex-col"),
        animate: {
            rotate: flip ? 90 : 0
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-row w-full h-20  mt-6 px-20",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    className: "text-3xl font-bold",
                    children: "Brew"
                }, void 0, false, {
                    fileName: "<[project]/src/components/mission-control.tsx>",
                    lineNumber: 157,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/mission-control.tsx>",
                lineNumber: 156,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute top-0 right-0 m-4",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                    onClick: ()=>{
                        setModalDisplay(false);
                    },
                    children: "Close"
                }, void 0, false, {
                    fileName: "<[project]/src/components/mission-control.tsx>",
                    lineNumber: 161,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/mission-control.tsx>",
                lineNumber: 160,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                    data: data,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/mission-control.tsx>",
                            lineNumber: 173,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "time",
                            interval: 40,
                            padding: {
                                left: 30,
                                right: 30
                            }
                        }, void 0, false, {
                            fileName: "<[project]/src/components/mission-control.tsx>",
                            lineNumber: 175,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            width: 80,
                            yAxisId: "left",
                            tick: {
                                fontSize: 10
                            },
                            domain: [
                                0,
                                12
                            ]
                        }, void 0, false, {
                            fileName: "<[project]/src/components/mission-control.tsx>",
                            lineNumber: 179,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            width: 80,
                            yAxisId: "right",
                            orientation: "right",
                            tick: {
                                fontSize: 10
                            },
                            domain: [
                                0,
                                20
                            ]
                        }, void 0, false, {
                            fileName: "<[project]/src/components/mission-control.tsx>",
                            lineNumber: 181,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                            fileName: "<[project]/src/components/mission-control.tsx>",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                            fileName: "<[project]/src/components/mission-control.tsx>",
                            lineNumber: 184,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Area"], {
                            isAnimationActive: false,
                            dot: false,
                            type: "monotone",
                            dataKey: "weight",
                            yAxisId: "right",
                            fill: "#eeeeee",
                            fillOpacity: 0.8
                        }, void 0, false, {
                            fileName: "<[project]/src/components/mission-control.tsx>",
                            lineNumber: 186,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Line"], {
                            isAnimationActive: false,
                            dot: false,
                            type: "monotone",
                            dataKey: "pressure",
                            yAxisId: "left",
                            stroke: "#8884d8",
                            activeDot: {
                                r: 8
                            },
                            strokeWidth: 5
                        }, void 0, false, {
                            fileName: "<[project]/src/components/mission-control.tsx>",
                            lineNumber: 188,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Line"], {
                            isAnimationActive: false,
                            dot: false,
                            type: "monotone",
                            dataKey: "flowrate",
                            yAxisId: "right",
                            stroke: "#00aeef",
                            strokeWidth: 5
                        }, void 0, false, {
                            fileName: "<[project]/src/components/mission-control.tsx>",
                            lineNumber: 189,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Line"], {
                            isAnimationActive: false,
                            dot: false,
                            type: "monotone",
                            dataKey: "power",
                            yAxisId: "right",
                            stroke: "#ff0000"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/mission-control.tsx>",
                            lineNumber: 190,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/mission-control.tsx>",
                    lineNumber: 172,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/mission-control.tsx>",
                lineNumber: 171,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/mission-control.tsx>",
        lineNumber: 149,
        columnNumber: 9
    }, this);
};
_s(MissionControl, "zrhb880m9Mh1blmJ4D8/L2//uYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = MissionControl;
const __TURBOPACK__default__export__ = MissionControl;
var _c;
__turbopack_refresh__.register(_c, "MissionControl");

})()),
"[project]/src/components/ui/use-toast.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Inspired by react-hot-toast library
__turbopack_esm__({
    "reducer": ()=>reducer,
    "toast": ()=>toast,
    "useToast": ()=>useToast
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.useState(memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;

})()),
"[project]/src/lib/utils.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function cn(...inputs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["clsx"](inputs));
}

})()),
"[project]/src/components/ui/toast.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Toast": ()=>Toast,
    "ToastAction": ()=>ToastAction,
    "ToastClose": ()=>ToastClose,
    "ToastDescription": ()=>ToastDescription,
    "ToastProvider": ()=>ToastProvider,
    "ToastTitle": ()=>ToastTitle,
    "ToastViewport": ()=>ToastViewport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Provider;
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Viewport, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/toast.tsx>",
        lineNumber: 14,
        columnNumber: 3
    }, this));
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Viewport.displayName;
const toastVariants = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["cva"]("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = ({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Root, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"](toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/toast.tsx>",
        lineNumber: 47,
        columnNumber: 5
    }, this);
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Root.displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Action, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/toast.tsx>",
        lineNumber: 60,
        columnNumber: 3
    }, this));
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Action.displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Close, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "<[project]/src/components/ui/toast.tsx>",
            lineNumber: 84,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/toast.tsx>",
        lineNumber: 75,
        columnNumber: 3
    }, this));
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Close.displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Title, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/toast.tsx>",
        lineNumber: 93,
        columnNumber: 3
    }, this));
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Title.displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Description, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/toast.tsx>",
        lineNumber: 105,
        columnNumber: 3
    }, this));
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Description.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_refresh__.register(_c, "ToastViewport$React.forwardRef");
__turbopack_refresh__.register(_c1, "ToastViewport");
__turbopack_refresh__.register(_c2, "Toast$React.forwardRef");
__turbopack_refresh__.register(_c3, "Toast");
__turbopack_refresh__.register(_c4, "ToastAction$React.forwardRef");
__turbopack_refresh__.register(_c5, "ToastAction");
__turbopack_refresh__.register(_c6, "ToastClose$React.forwardRef");
__turbopack_refresh__.register(_c7, "ToastClose");
__turbopack_refresh__.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_refresh__.register(_c9, "ToastTitle");
__turbopack_refresh__.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_refresh__.register(_c11, "ToastDescription");

})()),
"[project]/src/components/ui/toaster.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Toaster": ()=>Toaster
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/toast.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/use-toast.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
function Toaster() {
    _s();
    const { toasts } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useToast"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/ui/toaster.tsx>",
                                    lineNumber: 20,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/ui/toaster.tsx>",
                                    lineNumber: 22,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/ui/toaster.tsx>",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "<[project]/src/components/ui/toaster.tsx>",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "<[project]/src/components/ui/toaster.tsx>",
                    lineNumber: 18,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "<[project]/src/components/ui/toaster.tsx>",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/toaster.tsx>",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_refresh__.register(_c, "Toaster");

})()),
"[project]/src/assets/images/anatalab.png [client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/anatalab.65118bae.png");
})()),
"[project]/src/assets/images/anatalab.png.mjs/(IMAGE)/[project]/src/assets/images/anatalab.png [client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$anatalab$2e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/anatalab.png [client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$anatalab$2e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 914,
    height: 562,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAbUlEQVR42i3OLQ6AMAyG4W5TCBwShSDhN0EAwSC4A0dAgkBwBiyGE3BQ3i1d8qTt8mWriEiPyhjja4oMNRLRk1trF+fcR/8QfHFjZ3YhwDD6S/qTemHDymxDAAWvHPpFoyrEojt0mNBixoAS0Q9N3gnX7qWyngAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/components/navigation/TopNavigationBar.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$anatalab$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$anatalab$2e$png__$5b$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/anatalab.png.mjs/(IMAGE)/[project]/src/assets/images/anatalab.png [client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/connection.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa6/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
const TopNavigationBar = ()=>{
    _s();
    const { connectButtonStyle, connectButtonText, selectedPage, draggable, setDraggable, darkMode, setDarkMode, language, setLanguage, connected, setAddFormulaOpen } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed z-10 flex w-full items-center justify-between bg-transparent p-2 backdrop-blur-[20px]",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "logo overflow-hidden ",
                onClick: ()=>{
                    router.push("/");
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$anatalab$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$anatalab$2e$png__$5b$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "AnataLAB Logo",
                    width: 80
                }, void 0, false, {
                    fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex h-[48px] flex-row items-center justify-evenly space-x-1",
                children: [
                    router.pathname == "/" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            draggable && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: `flex h-[48px] w-[48px] cursor-pointer items-center  justify-center rounded-xl border border-dashed border-black p-1 `,
                                onClick: ()=>{
                                    // setDraggable(!draggable);
                                    setAddFormulaOpen(true);
                                },
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                        className: "text-black"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: `flex h-[48px] w-[48px] cursor-pointer  items-center justify-center rounded-xl border border-black p-1 ${draggable ? "bg-black" : ""}`,
                                onClick: ()=>{
                                    setDraggable(!draggable);
                                },
                                children: draggable ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["IoLockOpenOutline"], {
                                    className: "text-white"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["IoLockClosedOutline"], {
                                    className: "text-black"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: `flex h-[48px] w-[48px] cursor-pointer  items-center justify-center rounded-xl border border-black p-1 ${darkMode ? "bg-black" : ""}`,
                        onClick: ()=>{
                            setDarkMode(!darkMode);
                        },
                        children: darkMode ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdDarkMode"], {
                            className: "text-white"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdOutlineWbSunny"], {
                            className: "text-black"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        // className={`border border-black  p-1 rounded-xl  h-[48px] w-fit flex justify-center items-center cursor-pointer ${
                        //   darkMode ? "bg-black" : ""
                        // }`}
                        className: `flex h-[48px] w-fit cursor-pointer flex-row items-center justify-center space-x-2 rounded-xl border border-black p-3   ${connected ? "bg-black" : ""}`,
                        onClick: ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["handleConnectButton"]();
                        },
                        children: [
                            connected ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdBluetoothConnected"], {
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdBluetooth"], {
                                className: "text-black"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                className: `${connected ? "text-white" : "text-black"} select-none text-black`,
                                children: connectButtonText
                            }, void 0, false, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
_s(TopNavigationBar, "7z7wZNQigGJWNiqHufzfi1wkrUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TopNavigationBar;
const __TURBOPACK__default__export__ = TopNavigationBar;
var _c;
__turbopack_refresh__.register(_c, "TopNavigationBar");

})()),
"[project]/src/components/navigation/BottomNavigationBar.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bi/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/util.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const LanguagePicker = ()=>{
    _s();
    const { switchLocales } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const { lang } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelectedLanguage"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "absolute bottom-0 right-0 m-1 flex cursor-pointer flex-row items-center space-x-2 rounded-xl border p-4 hover:text-purple-900 select-none",
        onClick: ()=>{
            const current = localStorage.getItem("next-export-i18n-lang");
            if (current == "en") {
                console.log('switch language to vi');
                switchLocales("vi");
            } else {
                console.log('switch language to en');
                switchLocales("en");
            }
        },
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdLanguage"], {
            size: 16
        }, void 0, false, {
            fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_s(LanguagePicker, "nxY1VazV8nuTez5bUpfsLWB1aIc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelectedLanguage"]
    ];
});
_c = LanguagePicker;
const BottomNavigationBar = ()=>{
    _s1();
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]();
    const { selectedPage, setSelectedPage } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const { t, locales } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed bottom-0 z-50 flex h-14 w-full justify-center bg-white",
        style: {
            boxShadow: "1px -3px 5px 0px rgba(0,0,0,0.19)"
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](LanguagePicker, {}, void 0, false, {
                fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-row  items-center justify-between",
                    children: router.pathname == "/lab" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "cursor-pointer flex-row items-center space-x-2 rounded-xl p-4",
                        onClick: ()=>{
                            // setSelectedPage("Settings");
                            if (router.pathname == "/lab") {
                                router.push("/");
                            }
                        },
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            className: "text-xl font-bold dark:text-white",
                            children: router.pathname == "/lab" ? t("◀ Back") : selectedPage
                        }, void 0, false, {
                            fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex p cursor-pointer items-center space-x-8   p-4",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("flex items-center space-x-2 ", selectedPage === "Formula" ? "text-black" : "text-gray-300"),
                                onClick: ()=>{
                                    setSelectedPage("Formula");
                                    router.push("/");
                                },
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["BiSolidCoffeeAlt"], {}, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                        children: t("Formula")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("flex items-center space-x-2 ", selectedPage === "Setting" ? "text-black" : "text-gray-300"),
                                onClick: ()=>{
                                    setSelectedPage("Setting");
                                    router.push("/setting");
                                },
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["IoIosSettings"], {}, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                        children: t("Setting")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                                        lineNumber: 98,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/navigation/BottomNavigationBar.tsx>",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_s1(BottomNavigationBar, "BGtnrWN339ywQXqvpCYonMrJ+M4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = BottomNavigationBar;
const __TURBOPACK__default__export__ = BottomNavigationBar;
var _c, _c1;
__turbopack_refresh__.register(_c, "LanguagePicker");
__turbopack_refresh__.register(_c1, "BottomNavigationBar");

})()),
"[project]/src/pages/layout.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$BottomNavigationBar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/navigation/BottomNavigationBar.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$TopNavigationBar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/navigation/TopNavigationBar.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/toaster.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export w as Stack}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mission$2d$control$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mission-control.tsx [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
// export const metadata: Metadata = {
//   title: 'ROSARIO',
//   description: 'Fine-tuning coffee experience',
// };
const Layout = ({ children })=>{
    _s();
    const { modalDisplay, setModalDisplay } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: modalDisplay ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mission$2d$control$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "<[project]/src/pages/layout.tsx>",
            lineNumber: 22,
            columnNumber: 9
        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__["Stack"], {
            space: 4,
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$TopNavigationBar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/src/pages/layout.tsx>",
                    lineNumber: 25,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "my-[62px]",
                    children: children
                }, void 0, false, {
                    fileName: "<[project]/src/pages/layout.tsx>",
                    lineNumber: 26,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                    fileName: "<[project]/src/pages/layout.tsx>",
                    lineNumber: 27,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$BottomNavigationBar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/src/pages/layout.tsx>",
                    lineNumber: 29,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/pages/layout.tsx>",
            lineNumber: 24,
            columnNumber: 11
        }, this)
    }, void 0, false);
};
_s(Layout, "sbLNmS8K7/RVa+DE4hKF97nn0sY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Layout;
const __TURBOPACK__default__export__ = Layout;
var _c;
__turbopack_refresh__.register(_c, "Layout");

})()),
"[project]/src/components/ui/moving-border.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button,
    "MovingBorder": ()=>MovingBorder
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/util.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Button({ borderRadius = "1.75rem", children, as: Component = "button", containerClassName, borderClassName, duration, className, isRunning, backgroundColor, ...otherProps }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](Component, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("bg-transparent relative text-xl h-full w-full p-[3px] overflow-hidden ", containerClassName),
        style: {
            borderRadius: borderRadius,
            backgroundColor: backgroundColor
        },
        ...otherProps,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute inset-0",
                style: {
                    borderRadius: `calc(${borderRadius} * 0.96)`
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](MovingBorder, {
                    duration: duration,
                    rx: "30%",
                    ry: "30%",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("h-20 w-20 opacity-[0.8]", isRunning ? "bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]" : "", borderClassName)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/ui/moving-border.tsx>",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/moving-border.tsx>",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/moving-border.tsx>",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("relative border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased", className),
                style: {
                    borderRadius: `calc(${borderRadius} * 0.96)`
                },
                children: children
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/moving-border.tsx>",
                lineNumber: 63,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/moving-border.tsx>",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_c = Button;
const MovingBorder = ({ children, duration = 2000, rx, ry, ...otherProps })=>{
    _s();
    const pathRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    const progress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useMotionValue"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useAnimationFrame"]((time)=>{
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set(time * pxPerMillisecond % length);
        }
    });
    const x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useTransform"](progress, (val)=>pathRef.current?.getPointAtLength(val).x);
    const y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useTransform"](progress, (val)=>pathRef.current?.getPointAtLength(val).y);
    const transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useMotionTemplate"]`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "none",
                className: "absolute h-full w-full",
                width: "100%",
                height: "100%",
                ...otherProps,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("rect", {
                    fill: "none",
                    width: "100%",
                    height: "100%",
                    rx: rx,
                    ry: ry,
                    ref: pathRef
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/moving-border.tsx>",
                    lineNumber: 123,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/moving-border.tsx>",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform
                },
                children: children
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/moving-border.tsx>",
                lineNumber: 132,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
_s(MovingBorder, "ZmUNqPLnKCLn2xVabL09z78+6/I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useAnimationFrame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = MovingBorder;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button");
__turbopack_refresh__.register(_c1, "MovingBorder");

})()),
"[project]/src/components/main_FormulaCard.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ProfileCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/formula.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__p5__as__LineChart$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export p5 as LineChart}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fi/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/gi/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/pi/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$moving$2d$border$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/moving-border.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/util.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function ProfileCard({ formulaId, onClickEdit, onCancel, onClick }) {
    _s();
    //https://github.com/ccnmtl/juxtapose/blob/master/src/TrackElement.jsx#L83
    const { draggable, progressReport, formulaFeedbacks, selectedFormulaId } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const [height, setHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
    const elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { formulas, setFormulas, formulaUpdatedTimestamp } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (elementRef.current) {
            setHeight(elementRef.current.clientHeight);
        }
    }, []);
    const [isRunning, setRunning] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const timeoutRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    const [formulaStartTimestamp, setFormulaStartTimestamp] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
    // useEffect(() => {
    //   console.log("update/ ", { formulaUpdatedTimestamp, formulaId, isRunning })
    //   if (formulaUpdatedTimestamp === formulaId) {
    //     clearTimeout(timeoutRef.current);
    //     timeoutRef.current = setTimeout(() => {
    //       setRunning(false);
    //     }, 2000);
    //     if (!isRunning) {
    //       setFormulaStartTimestamp(new Date().getTime());
    //     }
    //     setRunning(true);
    //   }
    // }, [formulaUpdatedTimestamp, formulaId, isRunning]);
    // useEffect(() => {
    //   if (formulaUpdatedTimestamp === formulaId) {
    //     console.log("Update/ I'm formulaId, updated ", { formulaId, formulaUpdatedTimestamp })
    //     setRunning(true);
    //         clearTimeout(timeoutRef.current);
    //         timeoutRef.current = setTimeout(() => {
    //           setRunning(false);
    //         }, 2000);
    //     if (!isRunning) {
    //       setFormulaStartTimestamp(new Date().getTime());
    //     }
    //   }
    // }, [formulaUpdatedTimestamp, formulaId, isRunning])
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const elapsed = new Date().getTime() - (formulaUpdatedTimestamp[formulaId] || 0);
        // console.log("Update/  updated", { formulaUpdatedTimestamp, formulaId, elapsed })
        if (elapsed < 2000) {
            // if recently updated, show progress
            if (!isRunning) {
                setFormulaStartTimestamp(new Date().getTime());
            }
            setRunning(true);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(()=>{
                setRunning(false);
            }, 2000);
        }
    }, [
        formulaUpdatedTimestamp,
        formulaId,
        isRunning
    ]);
    const normalView = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute right-0 top-0 flex flex-col items-center justify-between",
                children: draggable ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "hover:opacity-50",
                            onMouseDown: (e)=>{
                                onClickEdit();
                                e.preventDefault();
                                e.stopPropagation();
                            },
                            onTouchStart: (e)=>{
                                onClickEdit();
                                e.preventDefault();
                                e.stopPropagation();
                            },
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["PiDotsThreeCircleVerticalThin"], {
                                size: 32,
                                className: "m-1 text-white "
                            }, void 0, false, {
                                fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FiMove"], {
                                size: 20,
                                className: "drag-handle m-1 text-white"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: isRunning ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "m-1 opacity-20",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaStopCircle"], {
                            size: 32,
                            className: "m-1 text-white"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                            lineNumber: 137,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                        lineNumber: 136,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            formulas[formulaId].formulaType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].Espresso && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["GiCoffeeBeans"], {
                                size: 32,
                                className: "m-1 text-white"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this),
                            formulas[formulaId].formulaType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].Teapresso && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["IoIosLeaf"], {
                                size: 32,
                                className: "m-1 text-white"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                                lineNumber: 147,
                                columnNumber: 21
                            }, this),
                            formulas[formulaId].formulaType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].PourOver && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdCoffeeMaker"], {
                                size: 32,
                                className: "m-1 text-white"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                        lineNumber: 140,
                        columnNumber: 15
                    }, this)
                }, void 0, false)
            }, void 0, false, {
                fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: "select-none truncate text-clip text-balance text-center text-xl text-white",
                children: isRunning ? String(Math.round((new Date().getTime() - formulaStartTimestamp) / 1000 * 10) / 10) + " s" : formulas[formulaId].title
            }, void 0, false, {
                fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    const progressView = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "first-letter absolute bottom-0  left-0 h-full w-full",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__p5__as__LineChart$7d$__["LineChart"], {
                height: height,
                dataKey: "name",
                categories: [
                    "flowrate"
                ],
                hideLegend: true,
                hideXAxis: true,
                hideYAxis: true,
                data: [
                    ...Array.from({
                        length: 10
                    }, (_, index)=>({
                            name: `Point ${index + 1}`,
                            flowrate: Math.floor(Math.random() * 100)
                        }))
                ]
            }, void 0, false, {
                fileName: "<[project]/src/components/main_FormulaCard.tsx>",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            " "
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/main_FormulaCard.tsx>",
        lineNumber: 172,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "w-full h-full",
        animate: {
            opacity: 1,
            scale: 1
        },
        initial: {
            opacity: 0,
            scale: 0
        },
        whileHover: {
            scale: 0.99
        },
        transition: {
            delay: Math.random() * 0.5
        },
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$moving$2d$border$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
            // duration={3333}
            borderRadius: "16px",
            isRunning: isRunning,
            ref: elementRef,
            // isFooterBlurred
            // radius="lg"
            onMouseDown: (e)=>{
                console.log("profile/ clicked");
                if (isRunning) {
                    onCancel();
                } else {
                    onClick();
                }
            },
            backgroundColor: formulas[formulaId].color,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("border flex h-full w-full transform flex-col items-center justify-center shadow-large cursor-pointer select-none transition-all duration-1000 ease-in-out hover:border-blue-500", // formulas[formulaId].backdrop,
            isRunning ? " border-black" : `border-white`, isRunning ? "animate-none" : "animate-none"),
            children: normalView
        }, void 0, false, {
            fileName: "<[project]/src/components/main_FormulaCard.tsx>",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/main_FormulaCard.tsx>",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_s(ProfileCard, "91xNdidw5JECYAc6G531nSieHdE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ProfileCard;
var _c;
__turbopack_refresh__.register(_c, "ProfileCard");

})()),
"[project]/src/pages/index.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$main_FormulaCard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/main_FormulaCard.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/formula.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export N as Button}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ks as Modal}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export w as Stack}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__pe__as__TextField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export pe as TextField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export es as Tiles}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__Ls__as__useToast$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export Ls as useToast}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$grid$2d$layout$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-grid-layout/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuidv4$2f$build$2f$lib$2f$uuidv4$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uuidv4/build/lib/uuidv4.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/layout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/head.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
;
const ResponsiveGridLayout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$grid$2d$layout$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WidthProvider"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$grid$2d$layout$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Responsive"]);
_c = ResponsiveGridLayout;
const espressoGradient = [
    "bg-gradient-to-br from-yellow-900 via-red-600 to-yellow-500",
    "bg-gradient-to-bl from-yellow-900 via-red-600 to-yellow-500",
    "bg-gradient-to-tl from-yellow-900 via-red-600 to-yellow-500",
    "bg-gradient-to-br from-yellow-900 via-red-600 to-yellow-500",
    "bg-gradient-to-bl from-yellow-900 via-red-600 to-yellow-500",
    "bg-gradient-to-tr from-yellow-900 via-red-600 to-yellow-500"
];
const teaGradients = [
    "bg-gradient-to-b from-green-900 via-green-600 to-teal-500",
    "bg-gradient-to-r from-green-900 via-green-600 to-teal-500",
    "bg-gradient-to-r from-green-900 via-green-600 to-teal-500",
    "bg-gradient-to-b from-green-900 via-green-600 to-teal-500",
    "bg-gradient-to-b from-green-900 via-green-600 to-teal-500",
    "bg-gradient-to-r from-green-900 via-green-600 to-teal-500"
];
const pourOverGradients = [
    "bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-500",
    "bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-500",
    "bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500",
    "bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500",
    "bg-gradient-to-l from-blue-900 via-blue-600 to-cyan-500",
    "bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500"
];
// function getRandomGradient(startColor: string, endColor: string) {
//   const orientations = ["to-r", "to-l", "to-b", "to-t"];
//   const randomOrientation =
//     orientations[Math.floor(Math.random() * orientations.length)];
//   const color = `bg-gradient-${randomOrientation} from-${startColor}-900 via-${startColor}-600 to-${endColor}-500`;
//   // console.log('regnea', color)
//   return color;
// }
function HomePage() {
    _s();
    // const [layout, setLayout] = useState<Layouts>({});
    const [isLoaded, setLoaded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const { formulas, setFormulas, addFormulaOpen, setAddFormulaOpen } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const { layout, setLayout } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]();
    const { showToast } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__Ls__as__useToast$7d$__["useToast"]();
    const { registerFormulaClick, registerSelectedFormulaId } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    async function addFormula() {
        const formulaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuidv4$2f$build$2f$lib$2f$uuidv4$2e$js__$5b$client$5d$__$28$ecmascript$29$__["uuid"]();
        var stagingSteps = [];
        var statingTitle = '';
        var stagingBackdrop = '';
        // if staging formula name are list of number, then it's a share token
        if (stagingFormulaName.match(/^[0-9]+$/) != null) {
            // it's a share token
            const request = await fetch(`https://api.anatalab.com/gateway/rosario/get_token/${stagingFormulaName}`);
            const body = await request.json();
            console.log("Formula is", body.formulas);
            setStagingFormulaName(body.formulas.title);
            setFormulaType(body.formulas.formulaType);
            stagingSteps = body.formulas.steps;
            statingTitle = body.formulas.title;
            stagingBackdrop = body.formulas.backdrop;
        } else {
            statingTitle = stagingFormulaName;
        }
        setLayout(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](layout, (draft)=>{
            draft["md"]?.push({
                i: formulaId,
                x: 0,
                y: 0,
                w: 1,
                h: 1
            });
            draft["xs"]?.push({
                i: formulaId,
                x: 0,
                y: 0,
                w: 1,
                h: 1
            });
            draft["sm"]?.push({
                i: formulaId,
                x: 0,
                y: 0,
                w: 1,
                h: 1
            });
        }));
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            let backdrop = "bg-white";
            if (formulaType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].Espresso) {
                backdrop = espressoGradient[Math.floor(Math.random() * espressoGradient.length)];
            } else if (formulaType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].PourOver) {
                backdrop = pourOverGradients[Math.floor(Math.random() * pourOverGradients.length)];
            } else if (formulaType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].Teapresso) {
                backdrop = teaGradients[Math.floor(Math.random() * teaGradients.length)];
            }
            const randomColors = [
                "#f44336",
                "#e91e63",
                "#9c27b0",
                "#673ab7",
                "#3f51b5",
                "#2196f3",
                "#03a9f4",
                "#00bcd4",
                "#009688",
                "#4caf50",
                "#8bc34a",
                "#cddc39",
                "#ffeb3b",
                "#ffc107",
                "#ff9800",
                "#ff5722",
                "#795548",
                "#607d8b"
            ];
            const formula = {
                id: formulaId,
                title: statingTitle,
                text: "New Formula",
                color: randomColors[Math.floor(Math.random() * randomColors.length)],
                backdrop: stagingBackdrop || backdrop,
                formulaType: formulaType,
                // randomGradients[
                //   Math.floor(Math.random() * randomGradients.length)
                // ],
                steps: stagingSteps,
                buildupDuration: 1,
                lossyWeight: 0,
                maximumDuration: 0,
                isShared: false
            };
            draft[formulaId] = formula;
            console.log("fml/ create new", formula);
        }));
        console.log("addFormula", {
            layout,
            formulas
        });
    }
    function clickAddFormula() {
        setAddFormulaOpen(true);
    }
    const renderedFormulas = [];
    Object.values(formulas).forEach((fml)=>{
        const formulaComponent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "grid-item__title ",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "h-full w-full",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$main_FormulaCard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    formulaId: fml.id,
                    onClick: ()=>{
                        registerFormulaClick(fml.id);
                    },
                    onCancel: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cancelFormulaClick"](fml.id);
                    },
                    onClickEdit: ()=>{
                        registerSelectedFormulaId(fml.id);
                        router.push(`/lab`);
                    }
                }, void 0, false, {
                    fileName: "<[project]/src/pages/index.tsx>",
                    lineNumber: 170,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/pages/index.tsx>",
                lineNumber: 163,
                columnNumber: 9
            }, this)
        }, fml.id, false, {
            fileName: "<[project]/src/pages/index.tsx>",
            lineNumber: 162,
            columnNumber: 7
        }, this);
        renderedFormulas.push(formulaComponent);
    });
    const { draggable } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    // if (draggable) {
    //     renderedFormulas.push(
    //       <div
    //         key={"add"}
    //         className="flex flex-col grid-item__title  bg-gray-300 cursor-pointer rounded-xl border  justify-center items-center hover:scale-105 transition-transform duration-200 hover:border-blue-500"
    //       >
    //         <div
    //           className="w-full h-full flex items-center justify-center drag-handle"
    //           onMouseDown={() => {
    //             clickAddFormula();
    //           }}
    //           onTouchStart={() => {
    //             clickAddFormula();
    //           }}
    //         >
    //           <FaPlus size={32} className="text-white" />
    //         </div>
    //         <button className="absolute top-0 right-0 drag-handle">
    //           <FiMove size={20} className="text-white m-1 drag-handle" />
    //         </button>
    //       </div>
    //     );
    // }
    const [stagingFormulaName, setStagingFormulaName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [formulaType, setFormulaType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].Espresso);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("title", {
                    children: "☕ ROSARIO"
                }, void 0, false, {
                    fileName: "<[project]/src/pages/index.tsx>",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/pages/index.tsx>",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "dark:bg-gray h-[80vh]",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](ResponsiveGridLayout, {
                            autoSize: true,
                            verticalCompact: false,
                            compactType: "horizontal",
                            className: "layout relative",
                            layouts: layout,
                            isDraggable: draggable,
                            isResizable: draggable,
                            useCSSTransforms: false,
                            // resizeHandles={["se"]}
                            draggableHandle: ".drag-handle",
                            breakpoints: {
                                lg: 1280,
                                md: 992,
                                sm: 767,
                                xs: 430,
                                xxs: 0
                            },
                            cols: {
                                lg: 12,
                                md: 10,
                                sm: 6,
                                xs: 4,
                                xxs: 2
                            },
                            onLayoutChange: (layout, layouts)=>{
                                if (!isLoaded) {
                                    setLoaded(true);
                                    return;
                                }
                                // localStorage.setItem("fml-layout", JSON.stringify(layouts));
                                setLayout(layouts);
                            },
                            onDragStart: ()=>{
                                console.log("OnDragStart");
                            },
                            children: renderedFormulas
                        }, void 0, false, {
                            fileName: "<[project]/src/pages/index.tsx>",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/index.tsx>",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    addFormulaOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                        title: t("Add Formula"),
                        onClose: ()=>setAddFormulaOpen(false),
                        primaryAction: {
                            label: "OK",
                            onPress: async ()=>{
                                setAddFormulaOpen(false);
                                await addFormula();
                            }
                        },
                        secondaryAction: {
                            label: t("Cancel"),
                            onPress: ()=>setAddFormulaOpen(false)
                        },
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__["Stack"], {
                            space: 4,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__pe__as__TextField$7d$__["TextField"], {
                                    label: t("Formula Name or Share Token"),
                                    value: stagingFormulaName,
                                    onChange: (e)=>{
                                        setStagingFormulaName(e);
                                    }
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/index.tsx>",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__["Tiles"], {
                                    space: 4,
                                    columns: 3,
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                            hierarchy: "primary",
                                            kind: formulaType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].Espresso ? "solid" : "outline",
                                            label: t("Espresso"),
                                            onPress: ()=>{
                                                setFormulaType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].Espresso);
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/index.tsx>",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                            hierarchy: "primary",
                                            kind: formulaType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].Teapresso ? "solid" : "outline",
                                            label: t("Teapresso"),
                                            onPress: ()=>{
                                                setFormulaType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].Teapresso);
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/index.tsx>",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                            hierarchy: "primary",
                                            kind: formulaType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].PourOver ? "solid" : "outline",
                                            label: t("Pour Over"),
                                            onPress: ()=>{
                                                setFormulaType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumFormulaType"].PourOver);
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/index.tsx>",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/pages/index.tsx>",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/pages/index.tsx>",
                            lineNumber: 272,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/index.tsx>",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/pages/index.tsx>",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomePage, "djJLfvuSNEdA0fYZWYL7vjAavMQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__Ls__as__useToast$7d$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = HomePage;
const __TURBOPACK__default__export__ = HomePage;
var _c, _c1;
__turbopack_refresh__.register(_c, "ResponsiveGridLayout");
__turbopack_refresh__.register(_c1, "HomePage");

})()),
"[next]/entry/page-loader.ts/(PAGE)/[project]/src/pages/index.tsx [client] (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const PAGE_PATH = "/";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/src/pages/index.tsx [client] (ecmascript)");
    }
]);
if (module.hot) {
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}

}.call(this) }),
"[turbopack]/dev/client/websocket.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Adapted from https://github.com/vercel/next.js/blob/canary/packages/next/client/dev/error-overlay/websocket.ts
__turbopack_esm__({
    "addMessageListener": ()=>addMessageListener,
    "connectHMR": ()=>connectHMR,
    "sendMessage": ()=>sendMessage
});
let source;
const eventCallbacks = [];
// TODO: add timeout again
// let lastActivity = Date.now()
function getSocketProtocol(assetPrefix) {
    let protocol = location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === "http:" ? "ws" : "wss";
}
function addMessageListener(cb) {
    eventCallbacks.push(cb);
}
function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}
function connectHMR(options) {
    const { timeout = 5 * 1000 } = options;
    function init() {
        if (source) source.close();
        console.log("[HMR] connecting...");
        function handleOnline() {
            const connected = {
                type: "turbopack-connected"
            };
            eventCallbacks.forEach((cb)=>{
                cb(connected);
            });
            if (options.log) console.log("[HMR] connected");
        // lastActivity = Date.now()
        }
        function handleMessage(event) {
            // lastActivity = Date.now()
            const message = {
                type: "turbopack-message",
                data: JSON.parse(event.data)
            };
            eventCallbacks.forEach((cb)=>{
                cb(message);
            });
        }
        // let timer: NodeJS.Timeout
        function handleDisconnect() {
            source.close();
            setTimeout(init, timeout);
        }
        const { hostname, port } = location;
        const protocol = getSocketProtocol(options.assetPrefix || "");
        const assetPrefix = options.assetPrefix.replace(/^\/+/, "");
        let url = `${protocol}://${hostname}:${port}${assetPrefix ? `/${assetPrefix}` : ""}`;
        if (assetPrefix.startsWith("http")) {
            url = `${protocol}://${assetPrefix.split("://")[1]}`;
        }
        source = new window.WebSocket(`${url}${options.path}`);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}

})()),
"[turbopack]/dev/client/hmr-client.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/// <reference path="../../shared/runtime-types.d.ts" />
/// <reference path="../runtime/base/globals.d.ts" />
/// <reference path="../runtime/base/protocol.d.ts" />
/// <reference path="../runtime/base/extensions.d.ts" />
__turbopack_esm__({
    "connect": ()=>connect,
    "setHooks": ()=>setHooks,
    "subscribeToUpdate": ()=>subscribeToUpdate
});
var __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[turbopack]/dev/client/websocket.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function connect({ // TODO(WEB-1465) Remove this backwards compat fallback once
// vercel/next.js#54586 is merged.
addMessageListener = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["addMessageListener"], // TODO(WEB-1465) Remove this backwards compat fallback once
// vercel/next.js#54586 is merged.
sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sendMessage"] }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                if (Array.isArray(msg.data)) {
                    for(let i = 0; i < msg.data.length; i++){
                        handleSocketMessage(msg.data[i]);
                    }
                } else {
                    handleSocketMessage(msg.data);
                }
                applyAggregatedUpdates();
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(never, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    // TODO(WEB-1465) Remove this backwards compat fallback once
    // vercel/next.js#54586 is merged.
    if (callback === undefined) {
        callback = sendMessage;
        sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sendMessage"];
    }
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    try {
        for (const callback of callbackSet.callbacks){
            callback(msg);
        }
        if (msg.type === "notFound") {
            // This indicates that the resource which we subscribed to either does not exist or
            // has been deleted. In either case, we should clear all update callbacks, so if a
            // new subscription is created for the same resource, it will send a new "subscribe"
            // message to the server.
            // No need to send an "unsubscribe" message to the server, it will have already
            // dropped the update stream before sending the "notFound" message.
            updateCallbackSets.delete(key);
        }
    } catch (err) {
        console.error(`An error occurred during the update of resource \`${msg.resource.path}\``, err);
        location.reload();
    }
}

})()),
}]);

//# sourceMappingURL=[root of the server]__2d6a5e._.js.map