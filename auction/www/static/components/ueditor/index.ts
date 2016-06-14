import { Component, AfterViewInit, ElementRef } from "angular2/core";

const UEDITOR_HOME = '/static/ueditor';

function createScriptTag(src) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    return s;
}

@Component({
    selector: 'UEditor',
    template: `<div id="ue-wrapper" class="container"><div id="ue-container"></div></div>`
})
export default class UEditor implements AfterViewInit {
    private container;
    ngAfterViewInit() {
        var configScript = createScriptTag(`${UEDITOR_HOME}/ueditor.config.js`);
        var ueScript = createScriptTag(`${UEDITOR_HOME}/ueditor.all.js`);
        var ueRunScript = createScriptTag(`${UEDITOR_HOME}/ueditor.js`);
        this.container = document.getElementById('ue-wrapper');
        this.container.appendChild(configScript);
        this.container.appendChild(ueScript);
        this.container.appendChild(ueRunScript);
    }
}