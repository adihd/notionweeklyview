// ==UserScript==
// @name         Notion.so weekly view
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Aasdasdasdadsasdasdad
// @author       adi
// @include      https://www.notion.so/*
// @grant        none
// ==/UserScript==

(function () {



    // Select the node that will be observed for mutations


    // check if there is a calander view names "week_cal"
    // if so go to the calander block
    function minifunc() {
        // console.log("this is working1 mini");
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
        // console.log("this is working1");
        var view_block_list = document.getElementsByClassName("notion-collection-view-select")
        for (let index = 0; index < view_block_list.length; index++) {
            // console.log("this is working2");
            if (view_block_list[index].innerText === "week_cal") {
                // console.log("this is working3");
                view_block_list[index].parentElement.parentElement.parentElement.parentElement.classList.add("adi_week_cal")
                minifunc()
            }
        }
    };






    // Select the node that will be observed for mutations
    const targetNode = document;

    // Options for the observer (which mutations to observe)
    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };

    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // console.log('A child node has been added or removed.');
                setTimeout(foo, 100);

            } else if (mutation.type === 'attributes') {
                // console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    // Later, you can stop observing
    // observer.disconnect();




})();