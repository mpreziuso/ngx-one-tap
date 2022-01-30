export interface CredentialResponse {
  clientId: string;

  /**
   * This field is the ID token as a base64-encoded JSON Web Token (JWT) string
   */
  credential: string;

  /**
   * The type of button used along with the session and consent state are used to set the value,
   *
   * The user pressed either the One Tap or Sign In With Google button or used the touchless Automatic sign-in process.
   *
   * An existing session was found, or the user selected and signed-in to a Google Account to establish a new session.
   *
   * Prior to sharing ID token credentials with your app the user either
   *
   * pressed the Confirm button to grant their consent to share credentials, or
   * had previously granted consent and used Select an Account to choose a Google Account.
   * The value of this field is set to one of these types,
   *
   * auto: Automatic sign-in of a user with an existing session who had previously granted consent to share credentials.
   * user: A user with an existing session who had previously granted consent pressed the One Tap 'Continue as' button to share credentials.
   * user_1tap: A user with an existing session pressed the One Tap 'Continue as' button to grant consent and share credentials. Applies only to Chrome v75 and higher.
   * user_2tap: A user without an existing session pressed the One Tap 'Continue as' button to select an account and then pressed the Confirm button in a pop-up window to grant consent and share credentials. Applies to non-Chromium based browsers.
   * btn: A user with an existing session who previously granted consent pressed the Sign In With Google button and selected a Google Account from 'Choose an Account' to share credentials.
   * btn_confirm: A user with an existing session pressed the Sign In With Google button and pressed the Confirm button to grant consent and share credentials.
   * btn_add_session: A user without an existing session who previously granted consent pressed the Sign In With Google button to select a Google Account and share credentials.
   * btn_confirm_add_session: A user without an existing session first pressed the Sign In With Google button to select a Google Account and then pressed the Confirm button to consent and share credentials.
   */
  select_by: string;
}
