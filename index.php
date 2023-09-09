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
      <span class="label">Power</span>

      <input
        type="number"
        id="kWInput"
        placeholder="Enter #"
        onkeyup="convert('kW')"
      />
      <label for="kWInput" class="unit-label">kW</label>

      <input
        type="number"
        id="HPInput"
        placeholder="Enter #"
        onkeyup="convert('HP')"
      />
      <label for="HPInput" class="unit-label">HP</label>

      <input
        type="number"
        id="BtuInput"
        placeholder="Enter #"
        onkeyup="convert('Btu')"
      />
      <label for="BtuInput" class="unit-label">Btu/h</label>

      <input
        type="number"
        id="tonInput"
        placeholder="Enter #"
        onkeyup="convert('Ton')"
      />
      <label for="tonInput" class="unit-label">Tons</label>

      <span class="label">Temperature</span>

      <input
        type="number"
        id="CInput"
        placeholder="Enter #"
        onkeyup="convert('C')"
      />
      <label for="CInput" class="unit-label">C</label>

      <input
        type="number"
        id="FInput"
        placeholder="Enter #"
        onkeyup="convert('F')"
      />
      <label for="FInput" class="unit-label">F</label>

      <input
        type="number"
        id="RInput"
        placeholder="Enter #"
        onkeyup="convert('R')"
      />
      <label for="RInput" class="unit-label">R</label>

      <input
        type="number"
        id="KInput"
        placeholder="Enter #"
        onkeyup="convert('K')"
      />
      <label for="KInput" class="unit-label">K</label>
    </div>
    <script src="script.js"></script>
  </body>
</html>
