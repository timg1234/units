function convert(type) {
  const kWtoBtu = 3412.14;
  const kWtoTon = 0.284345;
  const kWtoHP = 1.34102;

  switch (type) {
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
    case "Btu":
      let BtuValue = parseFloat(document.getElementById("BtuInput").value);
      if (!isNaN(BtuValue)) {
        document.getElementById("kWInput").value = (BtuValue / kWtoBtu).toFixed(
          3
        );
        document.getElementById("tonInput").value = (
          (BtuValue / kWtoBtu) *
          kWtoTon
        ).toFixed(3);
        document.getElementById("HPInput").value = (
          (BtuValue / kWtoBtu) *
          kWtoHP
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
    default:
      break;
  }
}
