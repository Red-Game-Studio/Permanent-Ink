Game.Prompt(`
<h3>Permanent Ink Installer</h3>
<div class=block>
The following script will install Permanent Ink onto your save file. Press Install to run the install function. Wiping your save will uninstall the patch.
</div>
  `, ["Install"]);

var patch = "<img src=x onerror='fetch(\"//raw.githubusercontent.com/Red-Game-Studio/Permanent-Ink/main/ink.js\").then((x)=>x.text().then((y)=>eval(y)))' id=delimg>Permanent Ink Patch";

document.querySelector("#promptOption0").onclick = () => {
  Game.modSaveData[patch] = "[]";
  Game.WriteSave()
  Game.Prompt("Patch Complete. Click [Check Mod Data] in settings to activate. Restart is required.", [["Restart Cookie Clicker", "window.location.reload()"]]);
}
