let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
*/
export function greet() {
    wasm.greet();
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function add(a, b) {
    const ret = wasm.add(a, b);
    return ret;
}

