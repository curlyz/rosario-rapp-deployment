(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__3baea6._.js", {

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
"[project]/src/pages/_app.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$provider$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/provider.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__Gl__as__BentoProvider$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export Gl as BentoProvider}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$defaultMessages$2f$en$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/defaultMessages/en.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$chunk$2d$JEMSMXRZ$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__a__as__defaultMessages$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/chunk-JEMSMXRZ.mjs [client] (ecmascript) {export a as defaultMessages}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$HRMF5D3P$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/system/dist/chunk-HRMF5D3P.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$withTranslation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/withTranslation.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
;
function App({ Component, pageProps }) {
    const overrideTheme = {
        background: '#000000'
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        id: "app",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__Gl__as__BentoProvider$7d$__["BentoProvider"], {
            defaultMessages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$chunk$2d$JEMSMXRZ$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__a__as__defaultMessages$7d$__["defaultMessages"],
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$HRMF5D3P$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["NextUIProvider"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$provider$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DeviceProvider"], {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](Component, {
                        ...pageProps
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/_app.tsx>",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/pages/_app.tsx>",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/pages/_app.tsx>",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/pages/_app.tsx>",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/pages/_app.tsx>",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = App;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$withTranslation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["withTranslation"]()(App);
var _c;
__turbopack_refresh__.register(_c, "App");

})()),
"[next]/entry/page-loader.ts/(PAGE)/[project]/src/pages/_app.tsx [client] (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const PAGE_PATH = "/_app";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/src/pages/_app.tsx [client] (ecmascript)");
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

//# sourceMappingURL=[root of the server]__3baea6._.js.map