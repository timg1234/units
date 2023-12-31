<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Units Converter</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="converter">
      <!-- Power -->
      <span class="label">Power</span>
      <input
        type="number"
        id="kWInput"
        placeholder="Enter #"
        oninput="convert('kW')"
      />
      <label for="kWInput" class="unit-label">kW</label>

      <input
        type="number"
        id="HPInput"
        placeholder="Enter #"
        oninput="convert('HP')"
      />
      <label for="HPInput" class="unit-label">HP</label>

      <input
        type="number"
        id="BtuInput"
        placeholder="Enter #"
        oninput="convert('Btu')"
      />
      <label for="BtuInput" class="unit-label">Btu/h</label>

      <input
        type="number"
        id="tonInput"
        placeholder="Enter #"
        oninput="convert('Ton')"
      />
      <label for="tonInput" class="unit-label">Tons</label>

      <!-- Temperature -->
      <span class="label">Temperature</span>
      <input
        type="number"
        id="CInput"
        placeholder="Enter #"
        oninput="convert('C')"
      />
      <label for="CInput" class="unit-label">C</label>

      <input
        type="number"
        id="FInput"
        placeholder="Enter #"
        oninput="convert('F')"
      />
      <label for="FInput" class="unit-label">F</label>

      <input
        type="number"
        id="RInput"
        placeholder="Enter #"
        oninput="convert('R')"
      />
      <label for="RInput" class="unit-label">R</label>

      <input
        type="number"
        id="KInput"
        placeholder="Enter #"
        oninput="convert('K')"
      />
      <label for="KInput" class="unit-label">K</label>

      <!-- Water Side -->
      <span class="label">Water Side</span>
      <input
        type="number"
        id="GPMInput"
        placeholder="Enter #"
        oninput="convert('WaterSide')"
      />
      <label for="GPMInput" class="unit-label">GPM</label>

      <input
        type="number"
        id="T2Input"
        placeholder="Enter #"
        oninput="convert('WaterSide')"
      />
      <label for="T2Input" class="unit-label">T2 (F)</label>

      <input
        type="number"
        id="T1Input"
        placeholder="Enter #"
        oninput="convert('WaterSide')"
      />
      <label for="T1Input" class="unit-label">T1 (F)</label>

      <input type="number" id="PowerInput" placeholder="Enter #" readonly />
      <label for="PowerInput" class="unit-label">Btu/h</label>

      <!-- Air Side -->
      <span class="label" style="color: red">Air Side</span>
      <input
        type="number"
        id="CFMInput"
        placeholder="Enter #"
        oninput="convert('AirSide')"
      />
      <label for="CFMInput" class="unit-label">CFM</label>

      <input
        type="number"
        id="T4Input"
        placeholder="Enter #"
        oninput="convert('AirSide')"
      />
      <label for="T4Input" class="unit-label">T2 (F)</label>

      <input
        type="number"
        id="T3Input"
        placeholder="Enter #"
        oninput="convert('AirSide')"
      />
      <label for="T3Input" class="unit-label">T1 (F)</label>

      <input type="number" id="PowerInput2" placeholder="Enter #" readonly />
      <label for="PowerInput2" class="unit-label">Btu/h</label>
    </div>

    <script src="script.js"></script>
  </body>
</html>
