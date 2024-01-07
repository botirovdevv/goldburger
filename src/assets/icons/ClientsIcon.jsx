import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 122.88 71.04",
    }}
    viewBox="0 0 122.88 71.04"
    {...props}
  >
    <path
      d="m91.95 64.68 1.99-7.59-1.37-1.5c-.62-.9-.75-1.69-.41-2.37.74-1.47 2.28-1.2 3.72-1.2 1.51 0 3.37-.29 3.84 1.6.16.63-.04 1.29-.48 1.97l-1.37 1.5 1.19 4.56 7.89-6.86 4.09.1c-1.41-2.83-3.2-5.23-5.28-7.49 3.92 1.52 7.93 3.02 10.9 4.88 1.89 1.18 2.86 2.08 3.63 3.51 1.62 3.05 1.8 5.78 2.04 9.08l.57 2.86h-22.24l.02.07h-8.51c-.19 1.95-1.31 3.08-3.5 3.24H34.24c-2.2-.17-3.32-1.3-3.5-3.27l.76-12.04c.21-2.78.99-4.98 2.26-6.66.84-1.11 1.88-1.93 3.03-2.57 3.65-2.03 12.17-2.63 15.48-5.61l5.07 14.91 2.55-8.85-1.25-1.37c-.56-.82-.69-1.54-.37-2.16.68-1.34 2.08-1.09 3.39-1.09 1.37 0 3.06-.26 3.49 1.46.14.57-.04 1.17-.44 1.79l-1.25 1.37 2.55 8.85 4.59-14.91c3.31 2.98 11.84 3.58 15.48 5.61 1.15.64 2.2 1.46 3.03 2.57 1.27 1.68 2.05 3.87 2.26 6.66l.58 8.95zM15.29 48.25l3.4 9.99 1.71-5.93-.84-.92c-.38-.55-.46-1.03-.25-1.45.45-.9 1.39-.73 2.27-.73.92 0 2.05-.17 2.34.98.1.38-.03.79-.29 1.2l-.84.92 1.71 5.93 3.08-9.99c.45.4 1.07.74 1.8 1.03-.25.53-.48 1.09-.68 1.67-.52 1.51-.86 3.19-1 5.06h.01c0 .04-.01.09-.01.13l-.74 11.58H2.35C.87 67.61.12 66.85 0 65.53l.51-7.34c.14-1.86.67-3.33 1.52-4.46.56-.74 1.26-1.29 2.03-1.72 2.44-1.36 9.01-1.76 11.23-3.76zm-1.67-14.16c-.33.03-.58.1-.76.22-.1.07-.18.16-.23.26-.06.12-.08.28-.08.45.02.55.31 1.29.88 2.14l.01.02 1.9 3.02c.76 1.2 1.55 2.43 2.53 3.33.93.85 2.06 1.43 3.56 1.43 1.62 0 2.8-.6 3.77-1.5 1.01-.95 1.81-2.25 2.6-3.55l2.13-3.51c.43-.98.56-1.57.42-1.85-.09-.17-.44-.22-1.02-.17-.37.08-.76.01-1.17-.2l1.07-3.2c-3.91-.05-6.58-.73-9.75-2.75-1.04-.66-1.35-1.42-2.39-1.35-.79.15-1.45.5-1.97 1.07-.5.54-.88 1.28-1.13 2.23l.63 3.83c-.32.2-.66.22-1 .08zm16.93-.95c.46.14.8.4 1 .81.32.65.2 1.62-.41 3a.3.3 0 0 1-.04.08l-2.16 3.56c-.84 1.38-1.69 2.76-2.83 3.83-1.19 1.12-2.66 1.86-4.67 1.85-1.88 0-3.29-.72-4.45-1.78-1.11-1.02-1.96-2.32-2.76-3.6l-1.9-3.02c-.71-1.06-1.07-2.02-1.1-2.82-.01-.39.05-.74.2-1.04.15-.33.38-.6.7-.81.15-.1.33-.19.52-.26-.12-1.62-.16-3.62-.08-5.3.04-.41.12-.82.23-1.23.49-1.73 1.7-3.13 3.21-4.09.53-.34 1.11-.62 1.73-.84 3.65-1.32 8.48-.6 11.07 2.2 1.05 1.14 1.72 2.65 1.86 4.65l-.12 4.81zm19.1-13.37c-.42.05-.75.16-.99.32-.15.1-.27.24-.34.39-.08.18-.12.41-.12.67.02.83.46 1.92 1.32 3.18l.02.02 2.83 4.51c1.13 1.8 2.31 3.63 3.77 4.96 1.39 1.27 3.08 2.13 5.3 2.14 2.42.01 4.18-.89 5.62-2.23 1.51-1.41 2.71-3.36 3.89-5.3l3.18-5.24c.64-1.46.84-2.34.63-2.76-.13-.27-.69-.33-1.63-.24-.07.01-.14.01-.21 0-.39 0-.81-.1-1.27-.31l1.43-4.78c-5.84-.07-9.83-1.09-14.55-4.11-1.55-.99-2.02-2.12-3.57-2.01-1.17.23-2.16.75-2.94 1.59-.75.81-1.32 1.91-1.69 3.32l1.01 5.78c-.6.31-1.16.33-1.69.1zm25.4-1.43c.69.2 1.19.6 1.5 1.21.48.98.3 2.42-.61 4.48-.02.04-.04.08-.06.11l-3.23 5.32c-1.25 2.06-2.52 4.13-4.23 5.72-1.78 1.67-3.97 2.78-6.97 2.77-2.8-.01-4.91-1.08-6.64-2.66-1.66-1.52-2.92-3.46-4.12-5.37l-2.83-4.51c-1.05-1.57-1.6-3.02-1.64-4.21-.02-.58.08-1.1.3-1.56.23-.49.57-.9 1.04-1.21.23-.16.49-.29.78-.39-.17-2.41-.23-5.39-.12-7.9.06-.61.18-1.22.35-1.83.72-2.59 2.54-4.67 4.79-6.1.79-.5 1.66-.92 2.58-1.25C61.38-1.01 68.6.07 72.46 4.25c1.57 1.7 2.56 3.96 2.77 6.94l-.18 7.15zm9.83 24.62 2.5-.07 2.07-.05c-2.42-7.45-1.61-14.3 4.22-20.12.99 3.2 3.2 5.83 6.97 7.78 1.8 1.34 3.55 2.96 5.23 4.81.3-1.23-.84-2.73-2.23-4.27 1.28.63 2.46 1.52 3.29 3.22.97 1.98.95 3.64.64 5.79-.15 1-.39 1.93-.74 2.78h3.45c3.64-7.79 1.33-19.34-6.11-24.24-2.28-1.5-3.92-1.45-6.6-1.44-3.07 0-4.63.1-7.26 1.83-3.87 2.56-6.25 6.99-7.25 13.14-.19 3.07-.32 8.37 1.82 10.84z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
  </svg>
)
export default SvgComponent
