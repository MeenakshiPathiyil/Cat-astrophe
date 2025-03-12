// mess up searches on search bar 
// send nasty roasts when u try to exit the site
// keep an option to disable typo detection 
document.addEventListener("DOMContentLoaded",()=>{
    chrome.storage.sync.get(["evilMode", "typoDetection"], (data) => {
        document.getElementById("evilMode").checked = data.evilMode || false;
        document.getElementById("typoDetection").checked = data.typoDetection || false;
    });

    
    document.getElementById("save").addEventListener("click", () => {
        const evilMode = document.getElementById("evilMode").checked;
        const typoDetection = document.getElementById("typoDetection").checked;

        chrome.storage.sync.set({ evilMode, typoDetection }, () => {
            alert("Settings saved! 😼");
        });
    });
});