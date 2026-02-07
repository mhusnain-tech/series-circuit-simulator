function turnOn() {
    document.getElementById("bulb").src = "images/on_bulb.png";
}

function turnOff() {
    document.getElementById("bulb").src = "images/off_bulb.png";
}

/* Total Resistance */
function calculateResistance() {
    let r1 = Number(R1.value) || 0;
    let r2 = Number(R2.value) || 0;
    let r3 = Number(R3.value) || 0;

    Rt.value = (r1 + r2 + r3).toFixed(2);
}

/* Total Current */
function calculateCurrent() {
    let r1 = Number(CR1.value) || 0;
    let r2 = Number(CR2.value) || 0;
    let r3 = Number(CR3.value) || 0;
    let v  = Number(Vt.value) || 0;

    let totalR = r1 + r2 + r3;
    It.value = totalR ? (v / totalR).toFixed(2) : "Error";
}

/* Voltage Drop */
function calculateVoltage() {
    let totalV = Number(Vtotal.value) || 0;

    V1.value = (totalV / 3).toFixed(2);
    V2.value = (totalV / 3).toFixed(2);
    V3.value = (totalV / 3).toFixed(2);
}
