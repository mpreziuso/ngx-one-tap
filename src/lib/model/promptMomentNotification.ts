export interface PromptMomentNotification {
  /**
   * Is this notification for a display moment?
   */
  isDisplayMoment(): boolean;

  /**
   * Is this notification for a display moment, and the UI is displayed?
   */
  isDisplayed(): boolean;

  /**
   * Is this notification for a display moment, and the UI isn't displayed?
   */
  isNotDisplayed(): boolean;

  /**
   * The detailed reason why the UI isn't displayed.
   *
   * @example
   *  - browser_not_supported
   *  - invalid_client
   *  - missing_client_id
   *  - opt_out_or_no_session
   *  - secure_http_required
   *  - suppressed_by_user
   *  - unregistered_origin
   *  - unknown_reason
   */
  getNotDisplayedReason(): string;

  /**
   * Is this notification for a skipped moment?
   */
  isSkippedMoment(): boolean;

  /**
   * The detailed reason for the skipped moment.
   *
   * @example
   *  - auto_cancel
   *  - user_cancel
   *  - tap_outside
   *  - issuing_failed
   */
  getSkippedReason(): string;

  /**
   * Is this notification for a dismissed moment?
   */
  isDismissedMoment(): boolean;

  /**
   * The detailed reason for the dismissed moment.
   *
   * @example
   *  - credential_returned
   *  - cancel_callled
   *  - flow_restarted
   */
  getDismissedReason(): string;

  /**
   * Return a string for the moment type.
   *
   * @example
   * - display
   * - skipped
   * - dismissed
   */
  getMomentType(): string;
}
