const molText = document.getElementById('molText');
const jsonText = document.getElementById('jsonText');


fetch('MOLFiles/test.mol')
  .then(response => response.text())
  .then((data) => {
    molText.value = data;

    const JSONText = molFileToJSON(data);

    jsonText.value = JSONText;
  })