const assertEqual = require('./assertEqual')

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", 'Lighthouse', "Labs"]), "Hello");