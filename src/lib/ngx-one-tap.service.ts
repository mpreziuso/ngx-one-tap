import {Inject, Injectable} from '@angular/core';
import {Configuration, IdConfiguration} from './model/idConfiguration';
import {CredentialResponse} from './model/credentialResponse';
import {Observable, Subject} from 'rxjs';
import {PromptMomentNotification} from './model/promptMomentNotification';

declare var window: any;
declare var document: Document;

@Injectable({
  providedIn: 'root'
})
export class NgxOneTapService {
  private configOverrides?: IdConfiguration;
  private identity: Subject<CredentialResponse> = new Subject<CredentialResponse>();
  private promptNotification: Subject<PromptMomentNotification> = new Subject<PromptMomentNotification>();

  get identity$(): Observable<CredentialResponse> {
    return this.identity.asObservable();
  }

  get promptNotification$(): Observable<PromptMomentNotification> {
    return this.promptNotification.asObservable();
  }

  constructor(@Inject(Configuration) private configuration: IdConfiguration) {
  }

  /**
   * Initialize Google OneTap
   */
  init(overrides?: IdConfiguration) {
    if (overrides) {
      this.configOverrides = overrides;
    }
    window.onGoogleLibraryLoad = this.initialize.bind(this);
    if (document.readyState === 'complete') {
      this.initialize();
    }
  }

  private initialize() {
    window.google.accounts.id.initialize({
      ...this.configuration,
      ...this.configOverrides,
      callback: (response: CredentialResponse) => this.identity.next(response),
    });
  }

  /**
   * Display Google OneTap prompt
   */
  public prompt() {
    window.google.accounts.id.prompt((response: PromptMomentNotification) => this.promptNotification.next(response));
  }

  /**
   * Dismiss Google OneTap prompt
   */
  public cancel() {
    window.google.accounts.id.cancel();
  }
}
