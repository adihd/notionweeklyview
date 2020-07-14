// ==UserScript==
// @name         Notion.so weekly view
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Aasdasdasdadsasdasdad
// @author       adi strauss
// @include      https://www.notion.so/*
// @grant        none
// ==/UserScript==

(function () {

    // check if there is a calander view names "week_cal"
    // if so go to the calander block
    function minifunc() {
        console.log("this is working1 mini");
        var days_list = document.getElementsByClassName("adi_week_cal")[0].getElementsByClassName("notion-calendar-view-day")
        for (let index = 0; index < days_list.length; index++) {
            // const element = array[index];
            if (days_list[index].style.color === "white") {
                days_list[index].parentElement.parentElement.classList.add("this_week")
                // console.log("yay");
            }
        }
        var weeks = document.getElementsByClassName("this_week")[0].parentElement.children
        // delete al div that not contain a class of "this_week"
        while (weeks.length > 1) {
            for (let index = 0; index < weeks.length; index++) {
                // const element = array[index];

                if (weeks[index].classList.contains("this_week")) {
                    console.log("yes");
                } else {
                    // console.log(index);
                    weeks[index].remove()
                }
            }

        }
    }

    var foo = function () {
        console.log("this is working1");
        var view_block_list = document.getElementsByClassName("notion-collection-view-select")
        for (let index = 0; index < view_block_list.length; index++) {
            console.log("this is working2");
            if (view_block_list[index].innerText === "week_cal") {
                console.log("this is working3");
                view_block_list[index].parentElement.parentElement.parentElement.parentElement.classList.add("adi_week_cal")
                minifunc()
            }
        }
    };

    setTimeout(foo, 5000);




})();