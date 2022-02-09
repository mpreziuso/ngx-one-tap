import {Component, Inject, NgZone} from '@angular/core';
import {NgxOneTapService} from './ngx-one-tap.service';
import {Configuration, IdConfiguration} from './model/idConfiguration';
import {CredentialResponse} from './model/credentialResponse';

declare var window: any;

@Component({
  selector: 'ngx-one-tap',
  template: `
    <div id="g_id_onload" [attr.data-client_id]="client_id" [attr.data-callback]="'google_callback'"></div>`,
})
export class NgxOneTapComponent {

  client_id: string;

  constructor(@Inject(Configuration) private configuration: IdConfiguration, private service: NgxOneTapService) {
    this.client_id = this.configuration.client_id;
    window.google_callback = this.callback.bind(this);
  }

  callback(v: CredentialResponse): void {
    this.service.callback(v);
  }
}
