<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>kW, HP, Btu/h & Ton Converter</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="converter">
      <span class="power-label">Power</span>

      <input
        type="number"
        id="kWInput"
        placeholder="Enter value"
        onkeyup="convert('kW')"
      />
      <label for="kWInput">kW</label>
      <p>=</p>

      <input
        type="number"
        id="HPInput"
        placeholder="Enter value"
        onkeyup="convert('HP')"
      />
      <label for="HPInput">HP</label>
      <p>=</p>

      <input
        type="number"
        id="BtuInput"
        placeholder="Enter value"
        onkeyup="convert('Btu')"
      />
      <label for="BtuInput">Btu/h</label>
      <p>=</p>

      <input
        type="number"
        id="tonInput"
        placeholder="Enter value"
        onkeyup="convert('Ton')"
      />
      <label for="tonInput">Tons</label>
    </div>
    <script src="script.js"></script>
  </body>
</html>
