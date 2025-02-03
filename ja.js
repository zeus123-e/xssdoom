var doomFrame = document.createElement("iframe");

doomFrame.src = "https://doom.kernel.land/";

doomFrame.style = "position:fixed; top:50%; left:50%; width:800px; height:600px; border:2px solid black; z-index:99999; transform:translate(-50%, -50%);";

document.body.appendChild(doomFrame);
