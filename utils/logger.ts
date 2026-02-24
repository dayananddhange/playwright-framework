export class Logger {
  static info(message: string): void {
    // Keep logging centralized so we can swap with Winston/Pino later.
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }

  static error(message: string): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  }
}
