import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { PagerComponent } from "../pager/pager.component";
import { Order } from "../../entities/order";
import { REQUEST_HOST } from "../../app.config";
import { UEditorComponent } from "../ueditor/ueditor.component";
import {
    ModalDirective, MODAL_DIRECTIVES, TimepickerComponent,
    DATEPICKER_DIRECTIVES, BS_VIEW_PROVIDERS
} from "ng2-bootstrap/ng2-bootstrap";
import { AdminSearchComponent } from "../admin-search/admin-search.component";
import { UserService } from "../../service/user.service";
@Component({
    selector: 'admin-message',
    template: require('./template.html'),
    styles: [require('./style.styl')],
    directives: [PagerComponent, MODAL_DIRECTIVES, AdminSearchComponent, UEditorComponent],
    viewProviders: [BS_VIEW_PROVIDERS]
})
export class AdminMessageComponent implements OnInit {
    message = {
        title: '',
        to: '',
        content: '',
        sendToAll: false
    }
    _requestHost = REQUEST_HOST
    constructor(private _http: Http, private _userServer: UserService) {
    }
    ngOnInit() {
    }
    onUeditorBlur(data) {
        this.message.content = data
    }
    onSubmit() {
        this._http.post(this._requestHost + "/api/message/", this.message, { withCredentials: true })
            .toPromise()
            .then(i => {
                alert('发送成功')
            });
    }

}
