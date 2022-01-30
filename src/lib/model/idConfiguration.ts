import {InjectionToken} from "@angular/core";

export const Configuration = new InjectionToken<IdConfiguration>('config');
export interface IdConfiguration {
  /**
   * This field is your application's client ID, which is found and created in
   * the Google Developers Console
   * @example CLIENT_ID.apps.googleusercontent.com
   */
  client_id: string;

  /**
   * This field determines if an ID token is automatically returned without any user
   * interaction when there's only one Google session that has approved your app before. The default value is false
   */
  auto_select?: boolean;

  /**
   * THe Javascript function that handles ID tokens.
   * Google One Tap and the Sign In With Google button
   * popup UX mode require this attribute
   */
  callback?: Function,

  /**
   * The URL of your login endpoint.
   * The Sign In With Google button redirect UX mode
   * uses this attribute.
   *
   *  May be omitted if the current page is your login page, in which case
   *  the credential is posted to this page by default.
   */
  login_uri?: string;

  /**
   * This field is the name of the JavaScript function that handles the password
   * credential returned from the browser's native credential manager.
   */
  native_callback?: Function;

  /**
   * This field sets whether to cancel the One Tap request if a user
   * clicks outside the prompt.
   */
  cancel_on_tap_outside?: boolean;

  /**
   * This attribute sets the DOM ID of the container element. If it's not set,
   * the One Tap prompt is displayed in the top-right corner of the window
   */
  prompt_parent_id?: string;

  /**
   * This field is a random string used by the ID token to prevent replay attacks.
   * Nonce length is limited to the maximum JWT size supported by your environment,
   * and individual browser and server HTTP size constraints.
   */
  nonce?: string;

  /**
   * This field changes the text of the title and messages in the One Tap prompt.
   * @example
   *  - signin: Sign in with Google
   *  - signup: Sign up with Google
   *  - use: Use with Google
   */
  context?: string;

  /**
   * If you need to display One Tap in the parent domain and its subdomains,
   * pass the parent domain to this field so that a single shared-state cookie is used.
   */
  state_cookie_domain?: string;

  /**
   * Use this field to set the UX flow used by the Sign In With Google button.
   * @example:
   * - popup: Performs sign-in UX flow in a popup window
   * - redirect: Performs sign-in UX flow by a full page redirection
   */
  ux_mode?: string;

  /**
   * The origins that are allowed to embed the intermediate iframe.
   * One Tap will run in the intermediate iframe mode if this field presents.
   * Wildcard prefixes are also supported.
   * @example:
   *  - 'https://www.google.com'
   *  - ['https://a.google.com', 'https://b.google.com']
   */
  allowed_parent_origin?: string | string[];


  /**
   * Overrides the default intermediate iframe behavior when users manually
   * close One Tap by tapping on the 'X' button in the One Tap UI.
   * The default behavior is to remove the intermediate iframe from the DOM immediately.
   *
   * The intermediate_iframe_close_callback field takes effect only in intermediate
   * iframe mode. And it has impact only to the intermediate iframe, instead of the
   * One Tap iframe.
   * The One Tap UI is removed before the callback is invoked.
   */
  immediate_iframe_close_callback?: Function;
}
