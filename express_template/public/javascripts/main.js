"use strict";
console.log('startup...');
let childrenID = 1;
let wishID = 1;
let children = [];
children.push({
    id: childrenID++,
    name: "Jonas",
    age: 12,
    wishes: [
        {
            id: wishID++,
            name: "Guitar",
            url: "https://www.kirstein.at/TL-Gitarren/Jet-Guitars-JT300-E-Gitarre-Blue.html?glp=1&msclkid=b04ffa2605ab174928b99f5f9fb989ac&utm_source=bing&utm_medium=cpc&utm_campaign=KirsteinAT_SH%20Smart%20Shopping%20A%20Produkte&utm_term=4575755098700001&utm_content=AG%20Smart%20ALL",
            img_url: "https://www.kirstein.de/out/pictures/generated/product/1/1080_900_75/6d3d68608be35ca8801c3cabbbfdf74b_1.jpg"
        }
    ]
});
children.push({
    id: childrenID++,
    name: "Felix",
    age: 8,
    wishes: [
        {
            id: wishID++,
            name: "Tractor",
            url: "https://www.kirstein.at/TL-Gitarren/Jet-Guitars-JT300-E-Gitarre-Blue.html?glp=1&msclkid=b04ffa2605ab174928b99f5f9fb989ac&utm_source=bing&utm_medium=cpc&utm_campaign=KirsteinAT_SH%20Smart%20Shopping%20A%20Produkte&utm_term=4575755098700001&utm_content=AG%20Smart%20ALL",
            img_url: "https://www.kirstein.de/out/pictures/generated/product/1/1080_900_75/6d3d68608be35ca8801c3cabbbfdf74b_1.jpg"
        }
    ]
});
