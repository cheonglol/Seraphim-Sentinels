export interface CustomApiErrorMessage {
    /**
     * customMessage: is how i let myself know which im calling
     * messageFromSrc: id just throw whatever was thrown at me
     */
    customMessage: string;
    caughtErrorMessage?: string | object;
}