use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) {
    let greeting = format!("Hello, {}!", name);
    greeting;
}
