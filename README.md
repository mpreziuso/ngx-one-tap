# NgxOneTap - Google One Tap for Angular

This library is a wrapper around the Google One Tap SDK for Angular.

## Installation

```bash
npm install --save ngx-one-tap
```


## Usage

### Import the module

```typescript
import {NgxOneTapModule} from 'ngx-one-tap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // ... any other imports you need
    NgxOneTapModule.config({
      // For the full list of options, see the documentation:
      // https://developers.google.com/identity/gsi/web/reference/js-reference#IdConfiguration
        client_id: 'CLIENT_ID.apps.googleusercontent.com',
        cancel_on_tap_outside: true,
        auto_select: false,
      }),
    // ... any other imports you need
  ],
  providers: [],
  bootstrap: [AppComponent]
});
```

### Add `ngx-one-tap` element to your component HTML

```html
<ngx-one-tap></ngx-one-tap>
```

### Import and inject the service into your component

```typescript
import {Component, OnInit} from '@angular/core';
import {CredentialResponse, NgxOneTapService, PromptMomentNotification} from 'ngx-one-tap';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private oneTap: NgxOneTapService) {
  }

  ngOnInit() {
    this.oneTap.init({
      // For the full list of options, see the documentation:
      // https://developers.google.com/identity/gsi/web/reference/js-reference#IdConfiguration
      client_id: 'CLIENT_ID.apps.googleusercontent.com',
      context: 'signin',
    });

    this.onetap.identity$
      .subscribe((res: CredentialResponse) => {
        /**
         * The response contains a JWT response object
         * containing the user information
         * that can be used to authenticate the user.
         *
         * This should be validated before using it.
         * Please read the documentation for more details.
         *
         * For example:
         *   NodeJS: https://cloud.google.com/nodejs/docs/reference/google-auth-library/latest#verifying-id-tokens
         *   Python: https://googleapis.dev/python/google-auth/latest/reference/google.oauth2.id_token.html#module-google.oauth2.id_token
         */
      });

    this.oneTap.promptNotification$
      .subscribe((event: PromptMomentNotification) => {
        /**
         * The response contains a prompt-related event.
         * The event allows you to determine what the event and the cause were.
         * 
         * Please read the documentation for more details:
         * https://developers.google.com/identity/gsi/web/reference/js-reference#PromptMomentNotification
         */
        event.getMomentType();
        event.isDismissedMoment();
        event.getDismissedReason();
        event.isDisplayed();
        event.isNotDisplayed();
        event.getNotDisplayedReason();
        event.isSkippedMoment();
        event.getSkippedReason();
      });
    
    this.oneTap.prompt();
  }
}
```
