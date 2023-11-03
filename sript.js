document.getElementById("redactButton").addEventListener("click", function() {
    
    let originalText = document.getElementById("originalText").value;
    let redactWords = document.getElementById("redactWords").value.split(" ");
    let customReplacement = document.getElementById("replacement").value || "****"; 

   
    let startTime = Date.now();

   
    for (let word of redactWords) {
        let regex = new RegExp(word, "gi"); 
        originalText = originalText.replace(regex, customReplacement);
    }


    let endTime = Date.now();
    let timeTaken = (endTime - startTime) / 1000; 
    let wordsScanned = redactWords.length;
    let wordsRedacted = wordsScanned;
    let charactersScrambled = customReplacement.length * wordsRedacted;

    
    document.getElementById("redactedOutput").textContent = originalText;
    document.getElementById("wordsScanned").textContent = wordsScanned;
    document.getElementById("wordsRedacted").textContent = wordsRedacted;
    document.getElementById("charactersScrambled").textContent = charactersScrambled;
    document.getElementById("timeTaken").textContent = timeTaken + " seconds";



});

document.getElementById("resetButton").addEventListener("click", function () {
    let originalText = document.getElementById("originalText");
    let redactWords = document.getElementById("redactWords");
    let output = document.getElementById("redactedOutput");

    originalText.value = '';
    redactWords.value =  '';
    output.textContent = '';
    wordsScanned.textContent = 0;
    wordsRedacted.textContent = 0;
    charactersScrambled.textContent = 0;
    timeTaken.textContent = 0;

});