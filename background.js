const blockSites = ["youtube.com", "reddit.com"]; // define the blocked sites and timelimit
const timeLimit = 30*60*1000;

chrome.storage.local.get(["siteTimers"], (result) => {
    let siteTimers = result.siteTimers || {}; // check for any previosuly stored timers

    function checkSite() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => { // checks for the currently active tab in the currently active window
            if (tabs.length === 0) return;
            const url = new URL(tabs[0].url);
            const hostname = url.hostname; // extract the hostname from the url

            if (blockSites.includes(hostname)) {
                if (!siteTimers[hostname]) siteTimers[hostname] = Date.now();
                const elapsed = Date.now() - siteTimers[hostname]; // calculate how long the user has spent on the site

                if (elapsed > timeLimit) {
                    chrome.tabs.update(tabs[0].id, { url: "blocked.html" }); // if the elapsed time is greater than the timelimit, redirect to blocked.html
                }
            }
            else {
                delete siteTimers[hostname]; // remove the sites timers from sitetimers
            }

            chrome.storage.local.set({ siteTimers }); // update chrome's local storage with the sitetimer
        });
    }

    setInterval(checkSite, 10000); 
});