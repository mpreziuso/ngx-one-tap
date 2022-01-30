import {Inject, ModuleWithProviders, NgModule} from '@angular/core';
import {Configuration, IdConfiguration} from './model/idConfiguration';
import {NgxOneTapService} from './ngx-one-tap.service';
import {DOCUMENT} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class NgxOneTapModule {

  constructor(@Inject(DOCUMENT) private document: Document) {
    const s = this.document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  }

  public static config(config: IdConfiguration): ModuleWithProviders<NgxOneTapModule> {
    return {
      ngModule: NgxOneTapModule,
      providers: [{
        provide: Configuration,
        useValue: config
      }, NgxOneTapService]
    };
  }

}
