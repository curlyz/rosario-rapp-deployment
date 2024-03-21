(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__4ff6dc._.js", {

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
"[project]/src/components/ui/dropdown-menu.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DropdownMenu": ()=>DropdownMenu,
    "DropdownMenuCheckboxItem": ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent": ()=>DropdownMenuContent,
    "DropdownMenuGroup": ()=>DropdownMenuGroup,
    "DropdownMenuItem": ()=>DropdownMenuItem,
    "DropdownMenuLabel": ()=>DropdownMenuLabel,
    "DropdownMenuPortal": ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup": ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem": ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator": ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut": ()=>DropdownMenuShortcut,
    "DropdownMenuSub": ()=>DropdownMenuSub,
    "DropdownMenuSubContent": ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger": ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger": ()=>DropdownMenuTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Check$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.js [client] (ecmascript) {export default as Check}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRight$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [client] (ecmascript) {export default as ChevronRight}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Circle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [client] (ecmascript) {export default as Circle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Root;
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Trigger;
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Group;
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Portal;
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Sub;
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.RadioGroup;
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.SubTrigger, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRight$7d$__["ChevronRight"], {
                className: "ml-auto h-4 w-4"
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
                lineNumber: 35,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
        lineNumber: 25,
        columnNumber: 3
    }, this));
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.SubTrigger.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.SubContent, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
        lineNumber: 45,
        columnNumber: 3
    }, this));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.SubContent.displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Portal, {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Content, {
            ref: ref,
            sideOffset: sideOffset,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
            lineNumber: 62,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
        lineNumber: 61,
        columnNumber: 3
    }, this));
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Content.displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Item, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
        lineNumber: 81,
        columnNumber: 3
    }, this));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Item.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.CheckboxItem, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.ItemIndicator, {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Check$7d$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
                    lineNumber: 107,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
                lineNumber: 106,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
        lineNumber: 97,
        columnNumber: 3
    }, this));
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.CheckboxItem.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.RadioItem, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.ItemIndicator, {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Circle$7d$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
                    lineNumber: 130,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
                lineNumber: 129,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
        lineNumber: 121,
        columnNumber: 3
    }, this));
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.RadioItem.displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Label, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
        lineNumber: 145,
        columnNumber: 3
    }, this));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Label.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Separator, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
        lineNumber: 161,
        columnNumber: 3
    }, this));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/dropdown-menu.tsx>",
        lineNumber: 174,
        columnNumber: 5
    }, this);
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_refresh__.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_refresh__.register(_c1, "DropdownMenuSubTrigger");
__turbopack_refresh__.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_refresh__.register(_c3, "DropdownMenuSubContent");
__turbopack_refresh__.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_refresh__.register(_c5, "DropdownMenuContent");
__turbopack_refresh__.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_refresh__.register(_c7, "DropdownMenuItem");
__turbopack_refresh__.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_refresh__.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_refresh__.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_refresh__.register(_c11, "DropdownMenuRadioItem");
__turbopack_refresh__.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_refresh__.register(_c13, "DropdownMenuLabel");
__turbopack_refresh__.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_refresh__.register(_c15, "DropdownMenuSeparator");
__turbopack_refresh__.register(_c16, "DropdownMenuShortcut");

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
    "DropdownMenuDemo": ()=>DropdownMenuDemo,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/dropdown-menu.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
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
function DropdownMenuDemo() {
    _s();
    const { setAddFormulaOpen } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true
            }, void 0, false, {
                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                className: "w-56",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                        children: t("Add formula")
                    }, void 0, false, {
                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuGroup"], {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                children: [
                                    t("Explore community"),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuShortcut"], {
                                        children: "⇧⌘P"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                children: [
                                    t("Invent new formula"),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuShortcut"], {
                                        children: "⌘B"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                children: [
                                    t(""),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuShortcut"], {
                                        children: "⌘S"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                children: [
                                    "Keyboard shortcuts",
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuShortcut"], {
                                        children: "⌘K"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(DropdownMenuDemo, "QtpZ3tNf4avcPlpjbn+bMr5jNqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = DropdownMenuDemo;
const TopNavigationBar = ()=>{
    _s1();
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
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                lineNumber: 88,
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
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 101,
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
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["IoLockClosedOutline"], {
                                    className: "text-black"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 113,
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
                            lineNumber: 138,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdOutlineWbSunny"], {
                            className: "text-black"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                        lineNumber: 129,
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
                                lineNumber: 157,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdBluetooth"], {
                                className: "text-black"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                className: `${connected ? "text-white" : "text-black"} select-none text-black`,
                                children: connectButtonText
                            }, void 0, false, {
                                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/navigation/TopNavigationBar.tsx>",
        lineNumber: 87,
        columnNumber: 5
    }, this);
};
_s1(TopNavigationBar, "7z7wZNQigGJWNiqHufzfi1wkrUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = TopNavigationBar;
const __TURBOPACK__default__export__ = TopNavigationBar;
var _c, _c1;
__turbopack_refresh__.register(_c, "DropdownMenuDemo");
__turbopack_refresh__.register(_c1, "TopNavigationBar");

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
"[project]/src/components/ui/separator.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Separator": ()=>Separator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Root, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/separator.tsx>",
        lineNumber: 14,
        columnNumber: 5
    }, this));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Root.displayName;
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Separator$React.forwardRef");
__turbopack_refresh__.register(_c1, "Separator");

})()),
"[project]/src/components/step/components/WeightRune.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "WeightRune": ()=>WeightRune
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/step.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ae as Banner}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ks as Modal}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export tc as SliderField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export w as Stack}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__vs__as__NumberField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export vs as NumberField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export b as Column}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__h__as__Columns$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export h as Columns}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
function WeightRune({ // value,
//   onChange,
// progress,
subIndex = -1, index }) {
    _s();
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const { formulas, setFormulas, selectedFormulaId, formulaFeedbacks } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const step = formulas[selectedFormulaId].steps[index];
    const [weight, setWeight] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](subIndex == -1 ? step.target.value : step.action.stepAmount || 0);
    const [current, setCurrent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    /*
      Progress doesn't always show up, it will disappear after 5 seconds
      So after 5 seconds, it must be clear to null
      So the number has its own internal state
  */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const updated = formulaFeedbacks[selectedFormulaId]?.[index]?.target?.value || 0;
        setCurrent(updated * 10);
    }, [
        formulaFeedbacks,
        index,
        selectedFormulaId
    ]);
    let timeout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // useEffect(() => {
    //   setCurrent(progress);
    //   clearTimeout(timeout.current)
    //   timeout.current = setTimeout(() => {
    //     setCurrent(null)
    //   }, 5000)
    //   console.log("Progress is updated for weight", progress)
    // }, [progress])
    function handleChangeAction() {
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            if (subIndex == -1) {
                draft[selectedFormulaId].steps[index].target.targetType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumTarget"].Weight;
                draft[selectedFormulaId].steps[index].target.value = weight;
            } else {
                const action = step.action;
                action.stepAmount = weight;
            }
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            current != null && current > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: " text-xl font-bold text-green-800",
                onClick: ()=>setIsOpen(true),
                children: `${(current / 10).toFixed(1)}/`
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/WeightRune.tsx>",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: " text-xl font-bold text-blue-800",
                onClick: ()=>setIsOpen(true),
                children: [
                    weight.toFixed(1),
                    weight <= 1 ? " gram" : " grams"
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/step/components/WeightRune.tsx>",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                size: "small",
                title: t("How much ?"),
                onClose: ()=>setIsOpen(false),
                primaryAction: {
                    label: "OK",
                    onPress: ()=>{
                        setIsOpen(false);
                        handleChangeAction();
                    }
                },
                secondaryAction: {
                    label: "Cancel",
                    onPress: ()=>setIsOpen(false)
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__["Stack"], {
                    space: 8,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__h__as__Columns$7d$__["Columns"], {
                            space: 4,
                            align: "center",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__["Column"], {
                                    width: "4/5",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__["SliderField"], {
                                        type: "single",
                                        name: "weight",
                                        value: weight,
                                        onChange: setWeight,
                                        label: "Weight",
                                        minValue: 0,
                                        maxValue: 500,
                                        step: 1
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/components/WeightRune.tsx>",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/WeightRune.tsx>",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__["Column"], {
                                    width: "1/5",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__vs__as__NumberField$7d$__["NumberField"], {
                                        value: weight,
                                        onChange: setWeight,
                                        label: "Weight",
                                        minValue: 0,
                                        maxValue: 500,
                                        step: 1
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/components/WeightRune.tsx>",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/WeightRune.tsx>",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/step/components/WeightRune.tsx>",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__["Banner"], {
                            kind: "informative",
                            title: "Reminder",
                            description: t("Calibration is required for accurate weight, please go to Settings")
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/WeightRune.tsx>",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/step/components/WeightRune.tsx>",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/WeightRune.tsx>",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(WeightRune, "3HZET0T1HuCq1Hg3UZ9qWyqREJc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = WeightRune;
var _c;
__turbopack_refresh__.register(_c, "WeightRune");

})()),
"[project]/src/components/ui/popover.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Popover": ()=>Popover,
    "PopoverContent": ()=>PopoverContent,
    "PopoverTrigger": ()=>PopoverTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Root;
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Trigger;
const PopoverContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Portal, {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Content, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "<[project]/src/components/ui/popover.tsx>",
            lineNumber: 15,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/popover.tsx>",
        lineNumber: 14,
        columnNumber: 3
    }, this));
_c1 = PopoverContent;
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__.Content.displayName;
;
var _c, _c1;
__turbopack_refresh__.register(_c, "PopoverContent$React.forwardRef");
__turbopack_refresh__.register(_c1, "PopoverContent");

})()),
"[project]/src/components/step/components/TimeRune.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TimeRune": ()=>TimeRune
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/popover.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export tc as SliderField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__h__as__Columns$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export h as Columns}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export b as Column}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__vs__as__NumberField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export vs as NumberField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ks as Modal}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export w as Stack}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [client] (ecmascript)");
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
function TimeRune({ // value,
//   onChange,
// progress
index, subIndex = -1 }) {
    _s();
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [current, setCurrent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](-1);
    const { formulas, setFormulas, selectedFormulaId } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const { formulaFeedbacks } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const [active, setActive] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const step = formulas[selectedFormulaId].steps[index];
    const [time, setTime] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](subIndex == -1 ? step.target.value : subIndex == -2 ? step.action.duration || 0 : step.action.segments[subIndex]?.duration || 0);
    /*
    Progress doesn't always show up, it will disappear after 5 seconds
    So after 5 seconds, it must be clear to null
    So the number has its own internal state
  */ let timeout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const updated = subIndex == -1 ? step.target.value : subIndex == -2 ? step.action.duration || 0 : step.action.segments[subIndex]?.duration || 0;
        if (updated != current) {
            setTime(updated);
            setActive(true);
            clearTimeout(timeout.current);
            timeout.current = setTimeout(()=>{
                setActive(false);
            }, 1000);
        }
    }, [
        formulas,
        selectedFormulaId,
        index,
        subIndex,
        step,
        current
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const updated = formulaFeedbacks[selectedFormulaId]?.[index]?.target?.value;
        // if you have subIndex, there nis no need to update progress, handled by the line chart already, more visual
        if (subIndex == -1) {
            setCurrent(updated || -1);
        }
    }, [
        formulaFeedbacks,
        index,
        selectedFormulaId,
        subIndex
    ]);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    function handleChangeAction() {
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            if (subIndex == -1) {
                draft[selectedFormulaId].steps[index].target.value = time;
            } else if (subIndex == -2) {
                draft[selectedFormulaId].steps[index].action.duration = time;
            } else {
                const action = step.action;
                action.segments[subIndex].duration = time;
            }
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            current != null && current > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: " text-xl font-bold text-green-800",
                onClick: ()=>setIsOpen(true),
                children: `${(current / 1000).toFixed(1)}/`
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                lineNumber: 103,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: " text-xl font-bold text-blue-800",
                onClick: ()=>setIsOpen(true),
                children: [
                    time.toFixed(1),
                    " " + (time <= 1 ? t("second") : t("seconds"))
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                size: "small",
                title: t("How long?"),
                onClose: ()=>setIsOpen(false),
                primaryAction: {
                    label: t("OK"),
                    onPress: ()=>{
                        setIsOpen(false);
                        handleChangeAction();
                    }
                },
                secondaryAction: {
                    label: t("Cancel"),
                    onPress: ()=>setIsOpen(false)
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__["Stack"], {
                    space: 8,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__h__as__Columns$7d$__["Columns"], {
                        space: 4,
                        align: "center",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__["Column"], {
                                width: "4/5",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__["SliderField"], {
                                    type: "single",
                                    name: "time",
                                    value: time,
                                    onChange: setTime,
                                    label: t('Time'),
                                    minValue: 0,
                                    maxValue: 120,
                                    step: 1
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__["Column"], {
                                width: "1/5",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__vs__as__NumberField$7d$__["NumberField"], {
                                    value: time,
                                    onChange: setTime,
                                    label: t('Time'),
                                    minValue: 0,
                                    maxValue: 500,
                                    step: 1
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                    lineNumber: 136,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Popover"], {
        onOpenChange: (e)=>{
            setIsOpen(e != false);
        },
        open: isOpen,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex h-8 w-fit items-center justify-between rounded-lg p-2",
                    onClick: ()=>{
                        setIsOpen(true);
                    },
                    children: [
                        current != -1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            className: " text-xl font-bold text-green-800",
                            onClick: ()=>setIsOpen(true),
                            children: `${(current / 1000).toFixed(1)}/`
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            className: " text-xl font-bold text-blue-800",
                            children: [
                                time,
                                " ",
                                time <= 1 ? t("second") : t("seconds")
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: "w-80 space-y-8 rounded-xl  border",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["IoIosCloseCircle"], {
                        className: "absolute right-2 top-2 text-gray-500",
                        size: 20,
                        onClick: ()=>{
                            setIsOpen(false);
                        }
                    }, void 0, false, {
                        fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__["SliderField"], {
                        value: time,
                        onChange: (e)=>{
                            setTime(e);
                            setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                // draft[selectedFormulaId].steps[index].target.value = e;
                                if (subIndex == -1) {
                                    draft[selectedFormulaId].steps[index].target.value = e;
                                } else {
                                    const action = step.action;
                                    action.segments[subIndex].duration = e;
                                }
                            }));
                        },
                        label: t("Time"),
                        type: "single",
                        name: "value",
                        minValue: 0,
                        maxValue: 60,
                        step: 1
                    }, void 0, false, {
                        fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/step/components/TimeRune.tsx>",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(TimeRune, "XlLy2f6KwAnFvUQy8XUrrrgv7BQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = TimeRune;
var _c;
__turbopack_refresh__.register(_c, "TimeRune");

})()),
"[project]/src/components/step/components/TextRune.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TextRune": ()=>TextRune
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const TextRune = ({ text })=>{
    /**
   * This function displays the input text as normal text, but word by word so it will wrap around.
   * @param {string} text - The text to be displayed.
   */ return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: text.split(" ").map((word, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: "mx-1 text-xl text-gray-900",
                children: word
            }, index, false, {
                fileName: "<[project]/src/components/step/components/TextRune.tsx>",
                lineNumber: 9,
                columnNumber: 9
            }, this))
    }, void 0, false);
};
_c = TextRune;
var _c;
__turbopack_refresh__.register(_c, "TextRune");

})()),
"[project]/src/components/step/components/PumpRune.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PumpRune": ()=>PumpRune
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ae as Banner}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ks as Modal}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export tc as SliderField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export w as Stack}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__vs__as__NumberField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export vs as NumberField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__h__as__Columns$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export h as Columns}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export b as Column}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/esm/useEffectOnce/useEffectOnce.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const PumpRune = ({ value, onChange })=>{
    _s();
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [power, setPower] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](value == null ? 100 : value);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffectOnce"](()=>{
        onChange(power);
    });
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex h-8 w-fit items-center justify-between rounded-lg p-2",
                onClick: ()=>{
                    setIsOpen(true);
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    className: "text-xl font-bold text-blue-800",
                    children: [
                        value === null ? 100 : value,
                        " %"
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/step/components/PumpRune.tsx>",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/PumpRune.tsx>",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                size: "small",
                title: t("Set pump power"),
                onClose: ()=>setIsOpen(false),
                primaryAction: {
                    label: "OK",
                    onPress: ()=>{
                        setIsOpen(false);
                        console.log(" update power", power);
                        onChange(power);
                    }
                },
                secondaryAction: {
                    label: "Cancel",
                    onPress: ()=>setIsOpen(false)
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__["Stack"], {
                    space: 8,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__h__as__Columns$7d$__["Columns"], {
                            space: 4,
                            align: "center",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__["Column"], {
                                    width: "4/5",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__["SliderField"], {
                                        type: "single",
                                        name: "power",
                                        value: power,
                                        onChange: (e)=>{
                                            console.log("Power is updated for pump", e);
                                            setPower(e);
                                        },
                                        label: t("Pump Power"),
                                        minValue: 0,
                                        maxValue: 100,
                                        step: 1
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/components/PumpRune.tsx>",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/PumpRune.tsx>",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__["Column"], {
                                    width: "1/5",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__vs__as__NumberField$7d$__["NumberField"], {
                                        value: power,
                                        onChange: setPower,
                                        onBlur: ()=>console.log("blur"),
                                        label: t(""),
                                        minValue: 0,
                                        maxValue: 100,
                                        step: 1
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/components/PumpRune.tsx>",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/PumpRune.tsx>",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/step/components/PumpRune.tsx>",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__["Banner"], {
                            kind: "informative",
                            title: t("Notice"),
                            description: t("Power require an external hardware to be connected to the machine, other wise it is simply ON/OFF"),
                            action: {
                                label: "Learn more",
                                onPress: ()=>{
                                    window.open("https://www.google.com");
                                }
                            }
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/PumpRune.tsx>",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/step/components/PumpRune.tsx>",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/PumpRune.tsx>",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(PumpRune, "tkUHNmKomqU9ieFhXU6UusVXR2k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffectOnce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = PumpRune;
var _c;
__turbopack_refresh__.register(_c, "PumpRune");

})()),
"[project]/src/components/step/components/ProfileRune.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// @refresh reset
__turbopack_esm__({
    "MagicLine": ()=>MagicLine,
    "ProfileRune": ()=>ProfileRune,
    "RenderedSegment": ()=>RenderedSegment,
    "SegmentModeRune": ()=>SegmentModeRune
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/popover.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/separator.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/step.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export N as Button}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__vs__as__NumberField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export vs as NumberField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export b as Column}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__h__as__Columns$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export h as Columns}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ks as Modal}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__p5__as__LineChart$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export p5 as LineChart}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export tc as SliderField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export w as Stack}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export es as Tiles}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa6/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/esm/useEffectOnce/useEffectOnce.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/components/TextRune.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TimeRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/components/TimeRune.tsx [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature();
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
const generateDatapoints = (segments, sensor, formulaFeedbacks)=>{
    if (segments === undefined) return [];
    const dps = [];
    // for each segments, we add a new point
    let totalTime = 0;
    segments.forEach((segment)=>{
        totalTime += segment.duration;
    });
    var startTime = 0;
    var previousValue = 0;
    for (const segment of segments){
        if (segment.smooth == false) {
            console.log("smooth is real");
            // add an additional step
            if (sensor == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Pressure) {
                dps.push({
                    timestamp: startTime,
                    pressure: segment.value,
                    min: 0,
                    max: 11
                });
            } else if (sensor == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Flowrate) {
                dps.push({
                    timestamp: startTime,
                    flowrate: segment.value,
                    min: 0,
                    max: 51
                });
            } else if (sensor == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Power) {
                dps.push({
                    timestamp: startTime,
                    power: segment.value,
                    min: 0,
                    max: 101
                });
            }
            previousValue = segment.value;
        }
        for(var time = 0; time < segment.duration; time += 1){
            var interimValue = previousValue + (segment.value - previousValue) * (time / segment.duration);
            interimValue = Math.round(interimValue * 10) / 10;
            if (sensor == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Pressure) {
                dps.push({
                    timestamp: startTime + time,
                    pressure: interimValue,
                    max: 10,
                    min: 0
                });
            } else if (sensor == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Flowrate) {
                dps.push({
                    timestamp: startTime + time,
                    flowrate: interimValue,
                    max: 50,
                    min: 0
                });
            } else if (sensor == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Power) {
                dps.push({
                    timestamp: startTime + time,
                    power: interimValue,
                    max: 100,
                    min: 0
                });
            }
        }
        previousValue = segment.value;
        startTime += segment.duration;
    }
    return dps;
};
const RenderedSegment = ({ // segments,
// // setSegments,
// sensor,
index })=>{
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffectOnce"](()=>{
        // setSteps(
        //   produce(steps, (draft) => {
        //     const action = draft[index].action as IProfileParam
        //     action.actionType = "Profile";
        //     action.segments = action.segments || [];
        //     console.log("profile/ create object", action)
        //     if ((draft[index].action as IProfileParam).segments.length == 0) {
        //       (draft[index].action as IProfileParam).segments = [
        //         {
        //           duration: 10,
        //           value: 3,
        //         },
        //       ];
        //     }
        //     return draft
        //   })
        // );
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            const action = draft[selectedFormulaId].steps[index].action;
            action.actionType = "Profile";
            action.segments = action.segments || [];
            console.log("profile/ create object", action);
            if (action.segments.length == 0) {
                action.segments = [
                    {
                        duration: 10,
                        value: 3,
                        smooth: false
                    }
                ];
            }
            return draft;
        }));
    });
    // const [renderedSegments, setRenderedSegments] = useState<JSX.Element[]>([]);
    const { formulas, setFormulas, selectedFormulaId } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const step = formulas[selectedFormulaId].steps[index];
    const action = step.action;
    const renderedSegments = (action.segments || []).map((segment, idx)=>{
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex-rol flex flex-wrap",
            children: [
                idx == 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                    text: t("First,")
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 212,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                    text: t("then")
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 214,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](SegmentModeRune, {
                    index: index,
                    subIndex: idx
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 216,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](ProfileValueRune, {
                    index: index,
                    subIndex: idx
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                action.segments[idx].smooth ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                    text: t("within")
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 221,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                    text: t("for")
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 224,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TimeRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TimeRune"], {
                    // progress={segments[idx].duration}
                    // value={segments[idx].duration}
                    // onChange={(e: number) => {
                    //   setSteps(
                    //     produce(steps, (draft) => {
                    //       const action = draft[index].action as IProfileParam;
                    //       action.segments[idx].duration = e;
                    //     })
                    //   );
                    // }}
                    index: index,
                    subIndex: idx
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 228,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    className: "text-xl",
                    children: idx === action.segments.length - 1 ? "." : ","
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 242,
                    columnNumber: 9
                }, this)
            ]
        }, idx, true, {
            fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
            lineNumber: 210,
            columnNumber: 7
        }, this);
    });
    /**
   *  Render segments in text readable format
   *  First, extract with 9 bar for 2 seconds, then slowly turn to 1 bar for 5 seconds, then
   *
   * then is a button ?
   *
   *  */ /* 
    Click Add -> First, reaching [pressure] of [9bar] withing [10 seconds] [+]
    Click Add -> First, reaching [pressure] of [9bar] withing [10 seconds], then, 2 bar within 2 seconds, then 3 bar whithin 20s
  */ const addSegment = ()=>{
        // setSegments(
        //   produce(segments, (draft: IProfilingSegment[]) => {
        //     // draft.push({
        //     //   duration: 5,
        //     //   value: 3
        //     // })
        //     draft.push({
        //       duration: Math.floor(Math.random() * 30),
        //       value: +(Math.random() * (10 - 2) + 2).toFixed(1),
        //     });
        //   })
        // );
        // setSteps(
        //   produce(steps, (draft) => {
        //     const action = draft[index].action as IProfileParam;
        //     action.segments.push({
        //       duration: Math.floor(Math.random() * 30),
        //       value: +(Math.random() * (10 - 2) + 2).toFixed(1),
        //     });
        //   })
        // );
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            const action = draft[selectedFormulaId].steps[index].action;
            action.segments = action.segments || [];
            action.segments.push({
                duration: Math.floor(Math.random() * 30),
                value: +(Math.random() * (10 - 2) + 2).toFixed(1),
                smooth: false
            });
        }));
    };
    const removeSegment = ()=>{
        // console.log("remove segment", { segments });
        // if (segments.length > 1) {
        //   // setSegments(
        //   //   produce(segments, (draft) => {
        //   //     draft.splice(-1);
        //   //   })
        //   // );
        // }
        if (action.segments === undefined) return;
        if (action.segments.length < 2) return;
        // setSteps(
        //   produce(steps, (draft) => {
        //     const action = draft[index].action as IProfileParam;
        //     action.segments.pop();
        //     return draft;
        //   })
        // );
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            const action = draft[selectedFormulaId].steps[index].action;
            action.segments.pop();
            return draft;
        }));
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                children: renderedSegments
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex h-10 w-fit cursor-pointer  flex-row items-center space-x-6 rounded-md bg-blue-100 p-2 transition-transform duration-200 border",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                        color: "#00aeef",
                        size: 20,
                        onClick: addSegment
                    }, void 0, false, {
                        fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaMinus"], {
                        color: "#ff0000",
                        size: 20,
                        onClick: removeSegment
                    }, void 0, false, {
                        fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                lineNumber: 331,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(RenderedSegment, "iEXAmiYac4K9K+FdqfBdtHUnql4=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffectOnce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = RenderedSegment;
const SegmentModeRune = ({ index, subIndex = -1 })=>{
    _s1();
    const { formulas, setFormulas, selectedFormulaId } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const step = formulas[selectedFormulaId].steps[index];
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    function handleSwap() {
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            draft[selectedFormulaId].steps[index].action.segments[subIndex].smooth = !draft[selectedFormulaId].steps[index].action.segments[subIndex].smooth;
        }));
    }
    /*
    add reaching up or down
    it need to have access to value of previous segment only
  */ var previousValue = 0;
    if (subIndex > 0) {
        previousValue = step.action.segments[subIndex - 1].value;
    }
    var isUpward = previousValue < step.action.segments[subIndex].value;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
            className: "text-xl font-bold text-orange-900",
            onClick: handleSwap,
            children: step.action.segments[subIndex].smooth ? isUpward ? t("slowly reaching up") : t("slowly reaching down") : t("hold at")
        }, void 0, false, {
            fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
            lineNumber: 374,
            columnNumber: 5
        }, this)
    }, void 0, false);
};
_s1(SegmentModeRune, "P1TERyUQB1Zu+2wTEU8NoWUSHis=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = SegmentModeRune;
const MagicLine = ({ // segments,
// sensor,
index })=>{
    _s2();
    const [dataPoints, setDataPoints] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const { formulas, setFormulas, selectedFormulaId } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const { formulaFeedbacks } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const step = formulas[selectedFormulaId].steps[index];
    const action = step.action;
    const sensor = action.profilingType;
    const segments = action.segments;
    const fbstore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        try {
            const actionUpdate = formulaFeedbacks[selectedFormulaId][index]?.action;
            if (!actionUpdate) {
                console.warn("No update from profileRune");
                return;
            }
            // when ever formulaFeedbacks are updated, store the values here
            console.log("Line/ add value", actionUpdate);
            fbstore.current = window.fbstore || [];
            window.fbstore = fbstore.current;
            var store = fbstore.current;
            store.push({
                ...actionUpdate,
                timestamp: Math.round(actionUpdate.timestamp / 1000)
            });
            // filter out the store, using the timestamp, remove those that has higher timestmap than actionUpdate
            // store = store.filter((s) => s.timestamp >= Math.round(actionUpdate.timestamp / 1000))
            const dpts = generateDatapoints(segments, sensor, store);
            // add the current reporting in
            dpts.map((dpt, idx)=>{
                var current = null;
                store.forEach((s)=>{
                    // find the latest value
                    if (s.timestamp == dpt.timestamp) {
                        dpt.flowrate = s.input;
                        dpt.pressure = s.pressure * 10 || 0;
                    }
                });
            });
            console.log("Line/ dpts", dpts, store);
            setDataPoints(dpts);
        } catch (e) {
            console.error("ProfileRune", e);
        }
    }, [
        formulaFeedbacks,
        index,
        segments,
        selectedFormulaId,
        sensor
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setDataPoints(generateDatapoints(segments, sensor));
    }, [
        segments,
        sensor
    ]);
    const attrMap = {};
    attrMap[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Pressure] = "pressure";
    attrMap[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Flowrate] = "flowrate";
    attrMap[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Power] = "power";
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "hover:scale-120 w-full -translate-x-10 transition-transform duration-200",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__p5__as__LineChart$7d$__["LineChart"], {
            height: 300,
            dataKey: "Time",
            categories: [
                // add the sensor of power herer
                // sensor == EnumProfileType.Pressure ? "pressure" : "flowrate",
                attrMap[sensor] || "unknown sensor",
                "flowrate",
                // "max",
                // "min",
                "pressure"
            ],
            hideLegend: false,
            hideXAxis: true,
            hideYAxis: false,
            data: dataPoints,
            disableAnimation: true
        }, index, false, {
            fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
            lineNumber: 458,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
        lineNumber: 457,
        columnNumber: 5
    }, this);
};
_s2(MagicLine, "nTV3glfn/xrUy1TfsR7p6pyh1rU=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c2 = MagicLine;
const ProfileValueRune = ({ // segments,
// setValue,
// sensor,
// idx,
index, subIndex })=>{
    _s3();
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const { formulas, setFormulas, selectedFormulaId } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const step = formulas[selectedFormulaId].steps[index];
    const action = step.action;
    const sensor = action.profilingType;
    const segments = action.segments;
    const idx = subIndex;
    let unit = "";
    if (sensor == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Pressure) {
        unit = "bar";
    }
    if (sensor == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Flowrate) {
        unit = "gram/s";
    } else if (sensor == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Power) {
        unit = "%";
    }
    const maxValue = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Pressure]: 10,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Flowrate]: 100,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Power]: 100
    };
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](segments[subIndex].value);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    function handleUpdate() {
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            draft[selectedFormulaId].steps[index].action.segments[subIndex].value = value;
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex h-8 w-fit items-center justify-between rounded-lg p-2",
                onClick: ()=>{
                    setIsOpen(true);
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    className: "text-xl font-bold text-blue-800",
                    children: [
                        value === null ? 100 : value,
                        " %"
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 540,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                lineNumber: 534,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                size: "small",
                title: t("Set target"),
                onClose: ()=>setIsOpen(false),
                primaryAction: {
                    label: t("OK"),
                    onPress: ()=>{
                        setIsOpen(false);
                        handleUpdate();
                    }
                },
                secondaryAction: {
                    label: t("Cancel"),
                    onPress: ()=>setIsOpen(false)
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__["Stack"], {
                    space: 8,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__h__as__Columns$7d$__["Columns"], {
                        space: 4,
                        align: "center",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__["Column"], {
                                width: "4/5",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__["SliderField"], {
                                    type: "single",
                                    name: "power",
                                    value: value,
                                    onChange: (e)=>{
                                        setValue(e);
                                    },
                                    label: t(sensor),
                                    minValue: 0,
                                    maxValue: 100,
                                    step: 1
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                                    lineNumber: 563,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                                lineNumber: 562,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__b__as__Column$7d$__["Column"], {
                                width: "1/5",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__vs__as__NumberField$7d$__["NumberField"], {
                                    value: value,
                                    onChange: setValue,
                                    onBlur: ()=>console.log("blur"),
                                    label: t(sensor),
                                    minValue: 0,
                                    maxValue: 100,
                                    step: 1
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                                    lineNumber: 577,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                                lineNumber: 576,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                        lineNumber: 561,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 560,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                lineNumber: 544,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Popover"], {
        onOpenChange: (e)=>{
            console.log("close", e);
            if (e == false) {
                setIsOpen(false);
            }
        },
        open: isOpen,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex h-8 w-fit items-center justify-between rounded-lg p-2",
                    onClick: ()=>{
                        setIsOpen(true);
                    },
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        className: " text-xl font-bold text-blue-800",
                        children: [
                            segments[idx].value,
                            " ",
                            unit
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                        lineNumber: 624,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 618,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                lineNumber: 617,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: "w-96 min-w-96 rounded-xl border",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["IoIosCloseCircle"], {
                        className: "absolute right-2 top-2 text-gray-500",
                        size: 20,
                        onClick: ()=>{
                            setIsOpen(false);
                        }
                    }, void 0, false, {
                        fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                        lineNumber: 630,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__["SliderField"], {
                        value: segments[idx].value,
                        onChange: (e)=>{
                            setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                draft[selectedFormulaId].steps[index].action.segments[idx].value = e;
                            }));
                        },
                        label: sensor,
                        type: "single",
                        name: "value",
                        minValue: 0,
                        maxValue: maxValue[sensor],
                        step: 0.1
                    }, void 0, false, {
                        fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                        lineNumber: 638,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                lineNumber: 629,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
        lineNumber: 608,
        columnNumber: 5
    }, this);
};
_s3(ProfileValueRune, "dNH3NRIWIxQf8ISW5uGyRpa1NnI=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c3 = ProfileValueRune;
const ProfileRune = ({ // value,
// onChange,
index })=>{
    _s4();
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const { formulas, setFormulas, selectedFormulaId } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const step = formulas[selectedFormulaId].steps[index];
    const action = step.action;
    const [profileType, setProfileType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](action.profilingType || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Flowrate);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setIsOpen(false);
    }, [
        formulas
    ]);
    function onChange(sensor) {
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            draft[selectedFormulaId].steps[index].action.actionType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Profile;
            draft[selectedFormulaId].steps[index].action.profilingType = sensor;
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: " text-xl font-bold text-blue-800",
                onClick: ()=>{
                    setIsOpen(true);
                },
                children: t(action.profilingType) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Flowrate
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                lineNumber: 698,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                size: "small",
                title: "Select an profiling method",
                onClose: ()=>setIsOpen(false),
                primaryAction: {
                    label: "OK",
                    onPress: ()=>{
                        setIsOpen(false);
                        onChange(profileType);
                    }
                },
                secondaryAction: {
                    label: "Cancel",
                    onPress: ()=>setIsOpen(false)
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__["Stack"], {
                    space: 16,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__["Tiles"], {
                        space: 8,
                        columns: 2,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                hierarchy: "primary",
                                kind: profileType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Flowrate ? "solid" : "outline",
                                label: "Flowrate",
                                onPress: ()=>{
                                    setProfileType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Flowrate);
                                }
                            }, void 0, false, {
                                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                                lineNumber: 725,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                hierarchy: "primary",
                                kind: profileType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Pressure ? "solid" : "outline",
                                label: "Pressure",
                                onPress: ()=>{
                                    setProfileType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Pressure);
                                }
                            }, void 0, false, {
                                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                                lineNumber: 736,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                hierarchy: "primary",
                                kind: profileType == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Power ? "solid" : "outline",
                                label: "Power",
                                onPress: ()=>{
                                    setProfileType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Power);
                                }
                            }, void 0, false, {
                                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                                lineNumber: 746,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                        lineNumber: 724,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                    lineNumber: 723,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/ProfileRune.tsx>",
                lineNumber: 707,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s4(ProfileRune, "591CxbZIjk46FEz7bNMbNlzbCfA=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c4 = ProfileRune;
var _c, _c1, _c2, _c3, _c4;
__turbopack_refresh__.register(_c, "RenderedSegment");
__turbopack_refresh__.register(_c1, "SegmentModeRune");
__turbopack_refresh__.register(_c2, "MagicLine");
__turbopack_refresh__.register(_c3, "ProfileValueRune");
__turbopack_refresh__.register(_c4, "ProfileRune");

})()),
"[project]/src/components/step/components/IngredientRune.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "IngredientRune": ()=>IngredientRune
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ae as Banner}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export N as Button}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__I__as__Inline$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export I as Inline}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ks as Modal}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export w as Stack}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/esm/useEffectOnce/useEffectOnce.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const IngredientRune = ({ value, onChange })=>{
    _s();
    console.log("action/ recreate");
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const { grinderSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const [ingredient, setIngridient] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](value || "");
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffectOnce"](()=>{
        onChange("");
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: " text-xl font-bold text-blue-800",
                onClick: ()=>setIsOpen(true),
                children: ingredient == "" ? t("[Select ingredient]") : ingredient
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/IngredientRune.tsx>",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                size: "small",
                title: t("Select ingredient"),
                onClose: ()=>setIsOpen(false),
                primaryAction: {
                    label: "OK",
                    onPress: ()=>{
                        setIsOpen(false);
                        onChange(ingredient);
                    }
                },
                secondaryAction: {
                    label: "Cancel",
                    onPress: ()=>setIsOpen(false)
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__["Stack"], {
                    space: 8,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__I__as__Inline$7d$__["Inline"], {
                            space: 4,
                            children: grinderSettings.map((grinder, index)=>{
                                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                    kind: ingredient == grinder.name ? "solid" : "outline",
                                    hierarchy: "primary",
                                    label: grinder.name,
                                    onPress: ()=>setIngridient(grinder.name)
                                }, index, false, {
                                    fileName: "<[project]/src/components/step/components/IngredientRune.tsx>",
                                    lineNumber: 63,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/IngredientRune.tsx>",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__["Banner"], {
                            kind: "informative",
                            title: t("Reminder"),
                            description: t("You can set up your grinder in the settings, the hardware can be connected to the machine wirelessly to the espresso machine")
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/IngredientRune.tsx>",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/step/components/IngredientRune.tsx>",
                    lineNumber: 59,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/IngredientRune.tsx>",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(IngredientRune, "00jP0Zbq8opoNugqfHMW6r+S84A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffectOnce"]
    ];
});
_c = IngredientRune;
var _c;
__turbopack_refresh__.register(_c, "IngredientRune");

})()),
"[project]/src/components/step/components/GrinderRune.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GrinderSkipRune": ()=>GrinderSkipRune
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ae as Banner}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export N as Button}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ks as Modal}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export w as Stack}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export es as Tiles}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/esm/useEffectOnce/useEffectOnce.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const GrinderSkipRune = ({ value, onChange })=>{
    _s();
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setIsOpen(false);
    }, [
        value
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffectOnce"](()=>{
        onChange(false);
    });
    const [skippable, setSkippable] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](true);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: " text-xl font-bold text-blue-800",
                onClick: ()=>setIsOpen(true),
                children: skippable ? t("can skip") : t("must wait")
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/GrinderRune.tsx>",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                autoFocus: false,
                size: "small",
                title: t("Set grinder behaviour"),
                onClose: ()=>setIsOpen(false),
                primaryAction: {
                    label: "OK",
                    onPress: ()=>{
                        setIsOpen(false);
                        onChange(skippable);
                    }
                },
                secondaryAction: {
                    label: t("Cancel"),
                    onPress: ()=>setIsOpen(false)
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__w__as__Stack$7d$__["Stack"], {
                    space: 8,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__["Tiles"], {
                            space: 8,
                            columns: 2,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                    kind: skippable ? "solid" : "outline",
                                    hierarchy: "primary",
                                    label: t("Can skip"),
                                    onPress: ()=>setSkippable(true),
                                    icon: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["IoMdSkipForward"], {}, void 0, false, {
                                            fileName: "<[project]/src/components/step/components/GrinderRune.tsx>",
                                            lineNumber: 80,
                                            columnNumber: 29
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/GrinderRune.tsx>",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                    kind: !skippable ? "solid" : "outline",
                                    hierarchy: "primary",
                                    label: t("Must wait"),
                                    onPress: ()=>setSkippable(false),
                                    icon: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaRegClock"], {}, void 0, false, {
                                            fileName: "<[project]/src/components/step/components/GrinderRune.tsx>",
                                            lineNumber: 87,
                                            columnNumber: 29
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/GrinderRune.tsx>",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/step/components/GrinderRune.tsx>",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__["Banner"], {
                            kind: "informative",
                            title: t("Explaination"),
                            description: skippable ? t("Grinder will skip this step if portafilter is not in position") : t("Grinder will wait until the portafilter is in position, then it will start grinding")
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/GrinderRune.tsx>",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/step/components/GrinderRune.tsx>",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/GrinderRune.tsx>",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(GrinderSkipRune, "nQ4cwguZwq3RYRRUXgmgdAmy6mw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$esm$2f$useEffectOnce$2f$useEffectOnce$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffectOnce"]
    ];
});
_c = GrinderSkipRune;
var _c;
__turbopack_refresh__.register(_c, "GrinderSkipRune");

})()),
"[project]/src/components/step/components/ActionRune.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ActionRune": ()=>ActionRune
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/step.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export N as Button}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ks as Modal}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export es as Tiles}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa6/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/gi/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lia/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/tb/index.mjs [client] (ecmascript)");
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
const ActionRune = ({ index })=>{
    _s();
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const { formulas, setFormulas, selectedFormulaId } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const [action, setAction] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](formulas[selectedFormulaId].steps[index].action.actionType);
    const step = formulas[selectedFormulaId].steps[index];
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    function handleChangeAction(e) {
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            const action = draft[selectedFormulaId].steps[index].action;
            action.actionType = e;
            const target = draft[selectedFormulaId].steps[index].target;
            // set the target
            if (e == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Grind) {
                target.targetType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumTarget"].Weight;
            } else if (e == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Extract) {
                target.targetType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumTarget"].Weight;
            } else if (e == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Rest) {
                target.targetType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumTarget"].Time;
            } else if (e == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Profile) {
                target.targetType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumTarget"].Weight;
                let _action = action;
                _action.segments = _action.segments || [];
                _action.profilingType = _action.profilingType || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumProfileType"].Flowrate;
            } else if (e == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].PourOver) {
                target.targetType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumTarget"].Weight;
            }
            draft[selectedFormulaId].steps[index].action = action;
            draft[selectedFormulaId].steps[index].target = target;
        }));
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setIsOpen(false);
    }, [
        formulas
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: "text-xl font-bold text-orange-900 underline decoration-pink-500",
                onClick: ()=>{
                    setIsOpen(true);
                },
                children: t(step.action.actionType) || "Action"
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                size: "large",
                title: t("Select an action"),
                onClose: ()=>setIsOpen(false),
                primaryAction: {
                    label: t("OK"),
                    onPress: ()=>{
                        setIsOpen(false);
                        handleChangeAction(action);
                    }
                },
                secondaryAction: {
                    label: t("Cancel"),
                    onPress: ()=>setIsOpen(false)
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__["Tiles"], {
                    space: 4,
                    columns: 3,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                            hierarchy: "primary",
                            kind: action == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Grind ? "solid" : "outline",
                            label: t("Grind"),
                            onPress: ()=>{
                                setAction(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Grind);
                            },
                            icon: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["GiManualMeatGrinder"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                                    lineNumber: 100,
                                    columnNumber: 27
                                }, void 0),
                            isDisabled: true
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                            hierarchy: "primary",
                            kind: action == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Extract ? "solid" : "outline",
                            label: t("Extract"),
                            onPress: ()=>{
                                setAction(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Extract);
                            },
                            icon: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["IoWaterSharp"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                                    lineNumber: 110,
                                    columnNumber: 27
                                }, void 0)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                            hierarchy: "primary",
                            kind: action == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Rest ? "solid" : "outline",
                            label: t("Rest"),
                            onPress: ()=>{
                                setAction(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Rest);
                            },
                            icon: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaClock"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                                    lineNumber: 119,
                                    columnNumber: 27
                                }, void 0)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                            hierarchy: "primary",
                            kind: action == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Profile ? "solid" : "outline",
                            label: t("Profile"),
                            onPress: ()=>{
                                setAction(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Profile);
                            },
                            icon: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaChartArea"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                                    lineNumber: 128,
                                    columnNumber: 27
                                }, void 0)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                            hierarchy: "primary",
                            kind: action == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].PourOver ? "solid" : "outline",
                            label: t("Pour Over"),
                            onPress: ()=>{
                                setAction(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].PourOver);
                            },
                            icon: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["LiaFillDripSolid"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                                    lineNumber: 137,
                                    columnNumber: 27
                                }, void 0),
                            isDisabled: false
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                            hierarchy: "primary",
                            kind: action == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].RGB ? "solid" : "outline",
                            label: t("RGB"),
                            onPress: ()=>{
                                setAction(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].RGB);
                            },
                            icon: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["TbColorFilter"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                                    lineNumber: 156,
                                    columnNumber: 27
                                }, void 0)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/step/components/ActionRune.tsx>",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(ActionRune, "/kqoZXYhDMwGTHxeEWtlQ6TfBlo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ActionRune;
var _c;
__turbopack_refresh__.register(_c, "ActionRune");

})()),
"[project]/src/components/step/StepCard.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "NewStepCard": ()=>NewStepCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/step.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$ActionRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/components/ActionRune.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$GrinderRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/components/GrinderRune.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$ProfileRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/components/ProfileRune.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$IngredientRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/components/IngredientRune.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$PumpRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/components/PumpRune.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/components/TextRune.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TimeRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/components/TimeRune.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$WeightRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/components/WeightRune.tsx [client] (ecmascript)");
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
;
;
;
// ----------------------------------------------------------- //
function Wrapper() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "group relative mx-auto max-w-7xl",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "items-pop flex justify-start space-x-6 rounded-lg bg-white px-7 py-6 leading-none ring-1 ring-gray-900"
            }, void 0, false, {
                fileName: "<[project]/src/components/step/StepCard.tsx>",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/components/step/StepCard.tsx>",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/step/StepCard.tsx>",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Wrapper;
function NewStepCard({ onDelete, index }) {
    _s();
    const { formulas, setFormulas, selectedFormulaId } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const steps = formulas[selectedFormulaId].steps || [];
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            transition: {
                ease: "easeInOut"
            },
            exit: {
                scale: 0,
                opacity: 0
            },
            className: "-inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex h-fit w-96 max-w-[calc(90vw)] flex-col rounded-xl  border  bg-white p-4 drop-shadow-xl transition-transform duration-200 hover:border-blue-500",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute right-0 top-0 cursor-pointer p-2",
                        onClick: ()=>onDelete(),
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdOutlineClear"], {
                            className: "text-gray-300"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/step/StepCard.tsx>",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "inline-flex max-w-96 flex-wrap items-center gap-2 space-x-1 text-wrap",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$ActionRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ActionRune"], {
                                index: index
                            }, void 0, false, {
                                fileName: "<[project]/src/components/step/StepCard.tsx>",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            formulas[selectedFormulaId].steps[index].action.actionType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Grind && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$WeightRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["WeightRune"], {
                                        index: index,
                                        subIndex: -1
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("of")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$IngredientRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["IngredientRune"], {
                                        value: steps[index].action.ingredient,
                                        onChange: (ingredient)=>{
                                            // setSteps(
                                            //   produce(steps, (draft) => {
                                            //     (draft[index].action as IGrindParam).ingredient =
                                            //       ingredient;
                                            //   })
                                            // );
                                            setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                                draft[selectedFormulaId].steps[index].action.ingredient = ingredient;
                                            }));
                                        }
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("bean, grinder")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 108,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$GrinderRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["GrinderSkipRune"], {
                                        value: steps[index].action.canSkip,
                                        onChange: (state)=>{
                                            // setSteps(
                                            //   produce(steps, (draft) => {
                                            //     (draft[index].action as IGrindParam).canSkip = state;
                                            //     draft[index].action.actionType = EnumAction.Grind;
                                            //   })
                                            // );
                                            setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                                draft[selectedFormulaId].steps[index].action.canSkip = state;
                                                draft[selectedFormulaId].steps[index].action.actionType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Grind;
                                            }));
                                        }
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, this),
                                    steps[index].action.canSkip === true ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("this step is portafilter is absent")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 132,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("until portafilter is present")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 134,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true),
                            steps[index].action.actionType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Extract && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$WeightRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["WeightRune"], {
                                        index: index,
                                        subIndex: -1
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("with pump power")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$PumpRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["PumpRune"], {
                                        value: steps[index].action.power,
                                        onChange: (power)=>{
                                            // setSteps(
                                            //   produce(steps, (draft) => {
                                            //     (draft[index].action as IExtractParam).actionType =
                                            //       EnumAction.Extract;
                                            //     (draft[index].action as IExtractParam).power = power;
                                            //   })
                                            // );
                                            setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                                draft[selectedFormulaId].steps[index].action.actionType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Extract;
                                                draft[selectedFormulaId].steps[index].action.power = power;
                                            }));
                                        }
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            steps[index].action.actionType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].PourOver && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("total of")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$WeightRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["WeightRune"], {
                                        index: index,
                                        subIndex: -1
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t(", extract")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$WeightRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["WeightRune"], {
                                        index: index,
                                        subIndex: 0
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("every")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TimeRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TimeRune"], {
                                        subIndex: -2,
                                        index: index
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("with pump power of")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$PumpRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["PumpRune"], {
                                        value: steps[index].action.pumpPower,
                                        onChange: (power)=>{
                                            // setSteps(
                                            //   produce(steps, (draft) => {
                                            //     (draft[index].action as IExtractParam).actionType =
                                            //       EnumAction.Extract;
                                            //     (draft[index].action as IExtractParam).power = power;
                                            //   })
                                            // );
                                            setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                                draft[selectedFormulaId].steps[index].action.actionType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].PourOver;
                                                draft[selectedFormulaId].steps[index].action.pumpPower = power;
                                            }));
                                        }
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            steps[index].action.actionType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Rest && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("for")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TimeRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TimeRune"], {
                                        subIndex: -1,
                                        index: index
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this),
                                    steps[index].action.valveState && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: "but keep valve open"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 224,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true),
                            steps[index].action.actionType === "Profile" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("to extract")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$WeightRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["WeightRune"], {
                                        index: index,
                                        subIndex: -1
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("using")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$ProfileRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ProfileRune"], {
                                        index: index
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$TextRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TextRune"], {
                                        text: t("profiling")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$ProfileRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["RenderedSegment"], {
                                        index: index
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$components$2f$ProfileRune$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["MagicLine"], {
                                        index: index
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/step/StepCard.tsx>",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/step/StepCard.tsx>",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        }, index, false, {
            fileName: "<[project]/src/components/step/StepCard.tsx>",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/step/StepCard.tsx>",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(NewStepCard, "P1TERyUQB1Zu+2wTEU8NoWUSHis=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = NewStepCard;
var _c, _c1;
__turbopack_refresh__.register(_c, "Wrapper");
__turbopack_refresh__.register(_c1, "NewStepCard");

})()),
"[project]/src/pages/lab.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$StepCard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/step/StepCard.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/separator.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/step.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDeviceContext.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__v__as__Body$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export v as Body}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export N as Button}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ks as Modal}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__pe__as__TextField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export pe as TextField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export ae as Banner}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export es as Tiles}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__ = __turbopack_import__("[project]/node_modules/@buildo/bento-design-system/lib/index.mjs [client] (ecmascript) {export tc as SliderField}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-export-i18n/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuidv4$2f$build$2f$lib$2f$uuidv4$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uuidv4/build/lib/uuidv4.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/layout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/formula.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/gateway/connection.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$color$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-color/es/index.js [client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$color$2f$es$2f$components$2f$circle$2f$Circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CirclePicker$7d$__ = __turbopack_import__("[project]/node_modules/react-color/es/components/circle/Circle.js [client] (ecmascript) {export default as CirclePicker}");
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
;
;
;
;
;
const BetterButton = ({ icon, label, color, onClick })=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: `flex size-12 cursor-pointer flex-row items-center space-x-1 rounded-xl border bg-white p-4 hover:border-blue-500`,
        children: icon
    }, void 0, false, {
        fileName: "<[project]/src/pages/lab.tsx>",
        lineNumber: 57,
        columnNumber: 5
    }, this);
};
_c = BetterButton;
const Detail = ()=>{
    _s();
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]();
    const id = router.query.slug;
    const [downloadTargetGroup, setDownloadTargetGroup] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](-1);
    const [downloadTargetButton, setDownloadTargetButton] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](-1);
    const [downloadWindow, setDownloadWindow] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [shareWindow, setShareWindow] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [running, setRunning] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [shareToken, setShareToken] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]('');
    const { selectedFormulaId, registerSelectedFormulaId, setFormulas, formulas, setSelectedPage, registerFormulaClick, cancelFormulaClick, progressReport } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    const [winReady, setwinReady] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const timeoutRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    const [colorModal, setColorModal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const { formulaFeedbacks } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (timeoutRef) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(()=>{
                setRunning(false);
            }, 2000);
            setRunning(true);
        }
    }, [
        formulaFeedbacks,
        selectedFormulaId
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setTimeout(async ()=>{
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$connection$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["queryDevice"]({
                command: 'group.locate',
                buttonId: downloadTargetButton + 1,
                groupId: downloadTargetGroup + 1
            });
        });
    }, [
        downloadTargetGroup,
        downloadTargetButton
    ]);
    //TODO: Assume don't have any formular before
    function handleAddStep() {
        // setSteps(
        //   produce(steps, (draft) => {
        //     draft.push({
        //       id: uuid(),
        //       action: {
        //         actionType: EnumAction.Rest,
        //         valveState: false,
        //       },
        //       target: {
        //         targetType: EnumTarget.Time,
        //         value: 10,
        //       },
        //     });
        //   })
        // );
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            const formula = draft[selectedFormulaId];
            formula.steps.push({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuidv4$2f$build$2f$lib$2f$uuidv4$2e$js__$5b$client$5d$__$28$ecmascript$29$__["uuid"](),
                action: {
                    actionType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumAction"].Rest,
                    valveState: false
                },
                target: {
                    targetType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$step$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EnumTarget"].Time,
                    value: 10
                }
            });
        }));
    }
    function handleDeleteStep(id) {
        // setSteps(
        //   produce(steps, (draft) => {
        //     return draft.filter(function (item) {
        //       return item?.id !== id;
        //     });
        //   })
        // );
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            const formula = draft[selectedFormulaId];
            formula.steps = formula.steps.filter(function(item) {
                return item?.id !== id;
            });
            return draft;
        }));
    }
    function handleDragAndDrop(result, provided) {
        if (!result.destination) return;
        // setSteps(
        //   produce(steps, (draft) => {
        //     const [reorderedItem] = draft.splice(result.source.index, 1);
        //     draft.splice(result.destination.index, 0, reorderedItem);
        //     return draft;
        //   })
        // );
        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
            const formula = draft[selectedFormulaId];
            const [reorderedItem] = formula.steps.splice(result.source.index, 1);
            formula.steps.splice(result?.destination?.index || 0, 0, reorderedItem);
            return draft;
        }));
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](function() {
        setwinReady(true);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        console.log("lab/ re-render", selectedFormulaId);
    }, [
        selectedFormulaId
    ]);
    const listDrinkType = ()=>{
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex h-16 w-full flex-row justify-between space-x-4"
        }, void 0, false, {
            fileName: "<[project]/src/pages/lab.tsx>",
            lineNumber: 205,
            columnNumber: 7
        }, this);
    };
    const { lang } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelectedLanguage"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const translations_run = t("Run");
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("title", {
                    children: "☕ ROSARIO"
                }, void 0, false, {
                    fileName: "<[project]/src/pages/lab.tsx>",
                    lineNumber: 219,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/pages/lab.tsx>",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            colorModal && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                size: "small",
                autoFocus: false,
                title: t("Set color"),
                onClose: ()=>setColorModal(false),
                primaryAction: {
                    label: t("OK"),
                    onPress: async ()=>{
                        setColorModal(false);
                    }
                },
                secondaryAction: {
                    label: t("Cancel"),
                    onPress: ()=>setColorModal(false)
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex items-center justify-center w-full h-full p-4",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$color$2f$es$2f$components$2f$circle$2f$Circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CirclePicker$7d$__["CirclePicker"], {
                        className: "m-4",
                        color: formulas[selectedFormulaId]?.color || "#00aeef",
                        onChange: (color, e)=>{
                            setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                if (!formulas[selectedFormulaId]) return;
                                formulas[selectedFormulaId].color = color.hex;
                            }));
                        }
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/lab.tsx>",
                        lineNumber: 240,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/pages/lab.tsx>",
                    lineNumber: 239,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/pages/lab.tsx>",
                lineNumber: 223,
                columnNumber: 9
            }, this),
            downloadWindow && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                size: "large",
                autoFocus: false,
                title: t("Assign to Button"),
                onClose: ()=>setDownloadWindow(false),
                primaryAction: {
                    label: t("Download"),
                    onPress: async ()=>{
                        console.log('lab/ download formula to', {
                            downloadTargetGroup,
                            downloadTargetButton,
                            selectedFormulaId
                        });
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$gateway$2f$formula$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["downloadFormula"]({
                            groupId: downloadTargetGroup + 1,
                            buttonId: downloadTargetButton + 1,
                            formulaId: selectedFormulaId
                        });
                        setLoading(true);
                        setTimeout(()=>{
                            setDownloadWindow(false);
                        }, 1000);
                    }
                },
                secondaryAction: {
                    label: t("Cancel"),
                    onPress: ()=>setDownloadWindow(false)
                },
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__v__as__Body$7d$__["Body"], {
                        size: "medium",
                        children: [
                            t("This process will save the formula to a physical button on your cofee machine so you don't always need a mobile device connected"),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("br", {}, void 0, false, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("br", {}, void 0, false, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__["Banner"], {
                                kind: "informative",
                                title: t('Notice'),
                                description: t("The button order might not be the same physically, right after clicking saved, the button will blink to indicate which button it is in real life"),
                                action: {
                                    label: "Learn more",
                                    onPress: ()=>{
                                        window.open("https://www.google.com");
                                    }
                                }
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/pages/lab.tsx>",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex h-32 w-full flex-col space-y-4 p-4",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__["Tiles"], {
                                space: 8,
                                columns: 3,
                                children: [
                                    1,
                                    2,
                                    3
                                ].map((value, index)=>{
                                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                        label: t(`Group ${value}`),
                                        hierarchy: "primary",
                                        kind: index === downloadTargetGroup ? "solid" : "outline",
                                        onPress: ()=>setDownloadTargetGroup(index)
                                    }, index, false, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 306,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__es__as__Tiles$7d$__["Tiles"], {
                                space: 8,
                                columns: 4,
                                children: [
                                    1,
                                    2,
                                    3,
                                    4
                                ].map((value, index)=>{
                                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__N__as__Button$7d$__["Button"], {
                                        label: t(`Button ${value}`),
                                        hierarchy: "primary",
                                        kind: index === downloadTargetButton ? "solid" : "outline",
                                        onPress: ()=>setDownloadTargetButton(index)
                                    }, index, false, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 319,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/pages/lab.tsx>",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/pages/lab.tsx>",
                lineNumber: 255,
                columnNumber: 9
            }, this),
            shareWindow && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ks__as__Modal$7d$__["Modal"], {
                title: "Share your formula",
                onClose: ()=>setShareWindow(false),
                primaryAction: {
                    label: "Copy",
                    onPress: ()=>{
                        navigator.clipboard.writeText(shareToken).then(()=>{
                            console.log("Share token copied to clipboard.");
                        }, (err)=>{
                            console.error("Could not copy share token to clipboard: ", err);
                        });
                        setShareWindow(false);
                    }
                },
                secondaryAction: {
                    label: "Cancel",
                    onPress: ()=>setShareWindow(false)
                },
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__ae__as__Banner$7d$__["Banner"], {
                        kind: formulas[selectedFormulaId].isShared ? "positive" : "informative",
                        title: formulas[selectedFormulaId].isShared ? t('Shared to public') : t("Do you want to share this to public ?"),
                        description: formulas[selectedFormulaId].isShared ? t("This formula is already shared, people can search for it using the formula name you choose.") : t("If you share this formula, people can try it out also. They will get a copy of this formula."),
                        action: {
                            label: formulas[selectedFormulaId].isShared ? t("Hide") : t("Share"),
                            onPress: ()=>{
                                setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                    draft[selectedFormulaId].isShared = !draft[selectedFormulaId].isShared;
                                }));
                            }
                        }
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/lab.tsx>",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center items-center bg-gray-800 text-white p-4 rounded-lg mt-2",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            className: "text-2xl tracking-[.4em]",
                            children: shareToken
                        }, void 0, false, {
                            fileName: "<[project]/src/pages/lab.tsx>",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/lab.tsx>",
                        lineNumber: 381,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/pages/lab.tsx>",
                lineNumber: 334,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-col  items-center space-y-4 p-4",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: " flex  h-fit w-96 max-w-[calc(90vw)] flex-col space-y-4 rounded-xl border p-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center w-full",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex-grow ",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__pe__as__TextField$7d$__["TextField"], {
                                            value: formulas[selectedFormulaId]?.title,
                                            onChange: (e)=>{
                                                setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                                    console.log("Formulas", formulas, selectedFormulaId);
                                                    draft[selectedFormulaId].title = e;
                                                }));
                                            },
                                            label: t("Formula"),
                                            placeholder: "Untitled formula"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/lab.tsx>",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "ml-2 h-11 w-11  rounded-xl mt-6 ring-1 ring-black ",
                                        style: {
                                            backgroundColor: formulas[selectedFormulaId]?.color || "#000000"
                                        },
                                        onClick: ()=>{
                                            setColorModal(true);
                                        }
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex flex-row items-center justify-between space-x-1 text-white",
                                children: [
                                    running === true ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `flex h-12 w-2/5 cursor-pointer select-none flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-orange-400 to-red-400 p-4 text-white hover:border-blue-500`,
                                        onClick: ()=>{
                                            cancelFormulaClick(selectedFormulaId);
                                        },
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaStop"], {}, void 0, false, {
                                                fileName: "<[project]/src/pages/lab.tsx>",
                                                lineNumber: 430,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                                children: "Stop"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/lab.tsx>",
                                                lineNumber: 431,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `flex h-12 w-2/5 cursor-pointer select-none flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-blue-400 to-emerald-400 p-4 text-white hover:border-blue-500`,
                                        onClick: ()=>{
                                            // console.log("play");
                                            registerFormulaClick(selectedFormulaId);
                                        },
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaPlay"], {}, void 0, false, {
                                                fileName: "<[project]/src/pages/lab.tsx>",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                                children: t("Run")
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/lab.tsx>",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `flex h-12 w-1/5 cursor-pointer flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 p-4 hover:border-blue-500`,
                                        onClick: ()=>{
                                            console.log("download");
                                            // open a bento model
                                            setDownloadWindow(true);
                                        },
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                                            fileName: "<[project]/src/pages/lab.tsx>",
                                            lineNumber: 453,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 445,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `flex h-12 w-1/5 cursor-pointer flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-blue-500 to-blue-600 p-4 hover:border-blue-500`,
                                        onClick: async ()=>{
                                            const data = {
                                                formulas: formulas[selectedFormulaId],
                                                timestamp: Date.now()
                                            };
                                            const request = await fetch('https://api.anatalab.com/gateway/rosario/create_token', {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(data)
                                            });
                                            const response = await request.json();
                                            console.log('Share token response', response);
                                            const assignedToken = response.token;
                                            setShareToken(assignedToken);
                                            setShareWindow(true);
                                        },
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaShareAlt"], {}, void 0, false, {
                                            fileName: "<[project]/src/pages/lab.tsx>",
                                            lineNumber: 480,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `flex h-12 w-1/5 cursor-pointer flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-red-500 to-red-800 p-4 hover:border-blue-500`,
                                        onClick: ()=>{
                                            console.log("delete");
                                            setSelectedPage("Formula");
                                            registerSelectedFormulaId("");
                                            setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                                // return draft.filter(item => item?.id !== selectedFormulaId)
                                                delete formulas[selectedFormulaId];
                                            }));
                                            router.push("/");
                                        },
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["FaWindowClose"], {}, void 0, false, {
                                            fileName: "<[project]/src/pages/lab.tsx>",
                                            lineNumber: 499,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 483,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__["SliderField"], {
                                    type: "single",
                                    name: "delay",
                                    label: t("Pressure build-up time"),
                                    value: formulas[selectedFormulaId]?.buildupDuration || 0,
                                    onChange: (e)=>{
                                        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                            console.log("Formulas", formulas, selectedFormulaId);
                                            if (draft[selectedFormulaId]) {
                                                draft[selectedFormulaId].buildupDuration = e;
                                            }
                                            return draft;
                                        }));
                                    },
                                    minValue: 0,
                                    maxValue: 10
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/lab.tsx>",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$buildo$2f$bento$2d$design$2d$system$2f$lib$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$7b$export__tc__as__SliderField$7d$__["SliderField"], {
                                    type: "single",
                                    name: "delay",
                                    label: t("Weight compensation (gram)"),
                                    value: formulas[selectedFormulaId]?.lossyWeight || 0,
                                    onChange: (e)=>{
                                        setFormulas(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["produce"](formulas, (draft)=>{
                                            console.log("Formulas", formulas, selectedFormulaId);
                                            if (draft[selectedFormulaId]) {
                                                draft[selectedFormulaId].lossyWeight = e;
                                            }
                                            return draft;
                                        }));
                                    },
                                    minValue: 0,
                                    maxValue: 100
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/lab.tsx>",
                                    lineNumber: 525,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/pages/lab.tsx>",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                        fileName: "<[project]/src/pages/lab.tsx>",
                        lineNumber: 569,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: " mix-w-80 flex flex-col items-center justify-center py-3 ",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DragDropContext"], {
                                onDragEnd: handleDragAndDrop,
                                onBeforeDragStart: ()=>{
                                    console.log("onBeforeDragStart");
                                },
                                onDragStart: ()=>{
                                    console.log("onDragStart");
                                },
                                onDragUpdate: ()=>{
                                    console.log("onDragUpdate");
                                },
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex w-full flex-row",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Droppable"], {
                                        droppableId: "ROOT",
                                        children: (provided)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                ...provided.droppableProps,
                                                ref: provided.innerRef,
                                                className: "mx-auto flex w-full flex-col items-center justify-between space-y-4",
                                                children: [
                                                    (formulas[selectedFormulaId]?.steps || [])?.map((item, idx)=>{
                                                        console.log("render", {
                                                            item,
                                                            idx
                                                        });
                                                        return winReady && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Draggable"], {
                                                            draggableId: item?.id,
                                                            index: idx,
                                                            children: (provided)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "",
                                                                    ...provided.dragHandleProps,
                                                                    ...provided.draggableProps,
                                                                    ref: provided.innerRef,
                                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$step$2f$StepCard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["NewStepCard"], {
                                                                        onDelete: ()=>handleDeleteStep(item?.id),
                                                                        index: idx
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/lab.tsx>",
                                                                        lineNumber: 608,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/lab.tsx>",
                                                                    lineNumber: 602,
                                                                    columnNumber: 33
                                                                }, this)
                                                        }, item?.id, false, {
                                                            fileName: "<[project]/src/pages/lab.tsx>",
                                                            lineNumber: 596,
                                                            columnNumber: 29
                                                        }, this);
                                                    }),
                                                    provided.placeholder
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/lab.tsx>",
                                                lineNumber: 586,
                                                columnNumber: 19
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 584,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/lab.tsx>",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 571,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                className: "my-4 flex h-16 w-80 cursor-pointer flex-row items-center  justify-center space-x-4 rounded-xl border bg-blue-100",
                                onClick: handleAddStep,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AiFillPlusCircle"], {
                                        color: "#1180EF",
                                        size: 30
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 632,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "text-lg font-bold text-[#1180EF]",
                                        children: t("Add Step")
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/lab.tsx>",
                                        lineNumber: 633,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/pages/lab.tsx>",
                                lineNumber: 628,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/pages/lab.tsx>",
                        lineNumber: 570,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/pages/lab.tsx>",
                lineNumber: 387,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/pages/lab.tsx>",
        lineNumber: 217,
        columnNumber: 5
    }, this);
};
_s(Detail, "MGLYsDGCwgho1nU2F/59bYdd2qI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDeviceContext$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSelectedLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$export$2d$i18n$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = Detail;
const __TURBOPACK__default__export__ = Detail;
var _c, _c1;
__turbopack_refresh__.register(_c, "BetterButton");
__turbopack_refresh__.register(_c1, "Detail");

})()),
"[next]/entry/page-loader.ts/(PAGE)/[project]/src/pages/lab.tsx [client] (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const PAGE_PATH = "/lab";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/src/pages/lab.tsx [client] (ecmascript)");
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

//# sourceMappingURL=[root of the server]__4ff6dc._.js.map