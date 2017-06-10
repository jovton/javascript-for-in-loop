(function (window, jovton, $, undefined) {

    window.person = {
        name: "Veronica", 
        age: 35,
        height:"1.6 meters",
        sex: "female"
    }

    window.arrayWithObjects = [];

    arrayWithObjects.push({ name: "Veronica" });
    arrayWithObjects.push({ age: 36 });
    arrayWithObjects.push({ height: "1.4 meters" });
    arrayWithObjects.push({ sex: "yes please!" });

    window.arrayOfSimpleValues = [];

    arrayOfSimpleValues.push("name");
    arrayOfSimpleValues.push("Veronica");
    arrayOfSimpleValues.push("age");
    arrayOfSimpleValues.push(34);
    arrayOfSimpleValues.push("height");
    arrayOfSimpleValues.push("1.4 meters");
    arrayOfSimpleValues.push("sex")
    arrayOfSimpleValues.push("female");

    var htmlConsole;

    jovton.printValues = function (thing, questionClicked) {
        htmlConsole = getHtmlConsole(questionClicked);
        clearConsole()

        for (var value in thing)
        {
            writeLine(value);
            writeLine(thing[value])
        }
    };

    function getHtmlConsole(questionClicked) {
        var htmlConsoleRow = $(questionClicked).next(".visualize").get(0);
        var htmlConsoleContainer = $(htmlConsoleRow).find(".console").get(0);
        var htmlConsoleTextbox = $(htmlConsoleContainer).find("textarea").get(0);

        return htmlConsoleTextbox;
    }

    function clearConsole() {
        htmlConsole.value = "";
        console.clear();
    }

    function writeLine(valueToWrite)
    {
        console.log(valueToWrite);

        var valueString = JSON.stringify(valueToWrite);
        htmlConsole.value += valueString + "\n";
    }

    $(document).ready(function () {
        $(".console > textarea").attr("readonly", "readonly");
    });
})(window, window.jovton = window.jovton || {}, jQuery);