export enum MessageType {
  INFO = 'info',
  ERROR = 'error'
}

export enum DisplayType {
  SNACK_BAR = 'snack-bar',
  DIALOG = 'dialog'
}

export interface AppMessageEvent {
  type: MessageType;
  displayType: DisplayType;
  message: string;
}
