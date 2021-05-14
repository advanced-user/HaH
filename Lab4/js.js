document.evaluate("//brands[1]/brand[1]/name[1]/text()", document, null, XPathResult.ANY_TYPE, null).iterateNext();
document.evaluate("//brands[1]/brand[2]/description[1]/text()", document, null, XPathResult.ANY_TYPE, null).iterateNext();

for (let unit of $x('//@unit'))
    console.log(unit.nodeValue);

$x("//brand[./name/text()='Xiaomi Redmi 9' and ./characteristics/weight[@unit='g']]");
