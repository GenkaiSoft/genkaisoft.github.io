var beforestr = `<nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3 p-0">
            <div class="container-fluid">
                <img class="navbar-brand" src="https://genkaisoft.github.io/japanese.png" width="64px">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://genkaisoft.github.io/index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="https://brainux.org/">Brain Hackers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="https://wiki.brainux.org/">Brain Hackers Wiki</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="https://brain.fandom.com/ja/wiki/brain_Wiki">Brain Wiki</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
var afterstr = `<footer>
    <strong>
        <a href=https://github.com/brain-hackers/README/blob/main/assets.md>限界やちゃんは Brain Hackers により CC BY-SA 4.0 でライセンスされています。</a>
        Copylighit (c) 2022 限界ソフト. All Rights Reserved.
    </strong>
    <div class="banner" style="text-align: center;">
        <a href="https://sites.google.com/site/happybusy/">
        <img src="https://sites.google.com/site/happybusy/busy_banner.png"></a>
    </div>
</footer>`
document.getElementById("body").insertAdjacentHTML("beforebegin",beforestr);
document.getElementById("body").insertAdjacentHTML("afterend",afterstr);
