function convert(type) {
  // Constants for power conversions
  const kWtoBtu = 3412.14;
  const kWtoTon = 0.284345;
  const kWtoHP = 1.34102;

  // Functions for temperature conversions
  const CtoF = (c) => (c * 9) / 5 + 32;
  const CtoR = (c) => ((c + 273.15) * 9) / 5;
  const CtoK = (c) => c + 273.15;
  const FtoC = (f) => ((f - 32) * 5) / 9;
  const RtoC = (r) => ((r - 491.67) * 5) / 9;
  const KtoC = (k) => k - 273.15;

  // Functions for water side conversions
  const calculatePower = (GPM, dT) => 500 * GPM * dT;
  const calculatePowerAirSide = (CFM, dT) => 1.085 * CFM * dT;

  switch (type) {
    // Power
    case "kW":
      let kWValue = parseFloat(document.getElementById("kWInput").value);
      if (!isNaN(kWValue)) {
        document.getElementById("BtuInput").value = Math.round(
          kWValue * kWtoBtu
        );
        document.getElementById("tonInput").value = (kWValue * kWtoTon).toFixed(
          3
        );
        document.getElementById("HPInput").value = (kWValue * kWtoHP).toFixed(
          3
        );
      }
      break;

    case "HP":
      let HPValue = parseFloat(document.getElementById("HPInput").value);
      if (!isNaN(HPValue)) {
        document.getElementById("kWInput").value = (HPValue / kWtoHP).toFixed(
          3
        );
        document.getElementById("BtuInput").value = Math.round(
          (HPValue * kWtoBtu) / kWtoHP
        );
        document.getElementById("tonInput").value = (
          (HPValue * kWtoTon) /
          kWtoHP
        ).toFixed(3);
      }
      break;

    case "Btu":
      let BtuValue = parseFloat(document.getElementById("BtuInput").value);
      if (!isNaN(BtuValue)) {
        document.getElementById("kWInput").value = (BtuValue / kWtoBtu).toFixed(
          3
        );
        document.getElementById("tonInput").value = (
          (BtuValue * kWtoTon) /
          kWtoBtu
        ).toFixed(3);
        document.getElementById("HPInput").value = (
          (BtuValue * kWtoHP) /
          kWtoBtu
        ).toFixed(3);
      }
      break;

    case "Ton":
      let tonValue = parseFloat(document.getElementById("tonInput").value);
      if (!isNaN(tonValue)) {
        document.getElementById("kWInput").value = (tonValue / kWtoTon).toFixed(
          3
        );
        document.getElementById("BtuInput").value = Math.round(
          tonValue * kWtoBtu
        );
        document.getElementById("HPInput").value = (tonValue * kWtoHP).toFixed(
          3
        );
      }
      break;

    // Temperatures
    case "C":
      let CValue = parseFloat(document.getElementById("CInput").value);
      if (!isNaN(CValue)) {
        document.getElementById("FInput").value = CtoF(CValue).toFixed(3);
        document.getElementById("RInput").value = CtoR(CValue).toFixed(3);
        document.getElementById("KInput").value = CtoK(CValue).toFixed(3);
      }
      break;

    case "F":
      let FValue = parseFloat(document.getElementById("FInput").value);
      if (!isNaN(FValue)) {
        document.getElementById("CInput").value = FtoC(FValue).toFixed(3);
        document.getElementById("RInput").value = CtoR(FtoC(FValue)).toFixed(3);
        document.getElementById("KInput").value = CtoK(FtoC(FValue)).toFixed(3);
      }
      break;

    case "R":
      let RValue = parseFloat(document.getElementById("RInput").value);
      if (!isNaN(RValue)) {
        document.getElementById("CInput").value = RtoC(RValue).toFixed(3);
        document.getElementById("FInput").value = CtoF(RtoC(RValue)).toFixed(3);
        document.getElementById("KInput").value = CtoK(RtoC(RValue)).toFixed(3);
      }
      break;

    case "K":
      let KValue = parseFloat(document.getElementById("KInput").value);
      if (!isNaN(KValue)) {
        document.getElementById("CInput").value = KtoC(KValue).toFixed(3);
        document.getElementById("FInput").value = CtoF(KtoC(KValue)).toFixed(3);
        document.getElementById("RInput").value = CtoR(KtoC(KValue)).toFixed(3);
      }
      break;

    // Water Side
    case "WaterSide":
      let GPMValue = parseFloat(document.getElementById("GPMInput").value);
      let T2Value = parseFloat(document.getElementById("T2Input").value);
      let T1Value = parseFloat(document.getElementById("T1Input").value);
      if (!isNaN(GPMValue) && !isNaN(T2Value) && !isNaN(T1Value)) {
        let dT = T2Value - T1Value;
        document.getElementById("PowerInput").value = calculatePower(
          GPMValue,
          dT
        ).toFixed(3);
      }
      break;

    // Air Side
    case "AirSide":
      let CFMValue = parseFloat(document.getElementById("CFMInput").value);
      let T4Value = parseFloat(document.getElementById("T4Input").value);
      let T3Value = parseFloat(document.getElementById("T3Input").value);
      if (!isNaN(CFMValue) && !isNaN(T4Value) && !isNaN(T3Value)) {
        let dT = T4Value - T3Value;
        document.getElementById("PowerInput2").value = calculatePowerAirSide(
          CFMValue,
          dT
        ).toFixed(3);
      }
      break;
  }
}
