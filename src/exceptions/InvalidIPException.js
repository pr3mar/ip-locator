class InvalidIPException extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidIPException';
    Error.captureStackTrace(this, InvalidIPException);
  }
}

export default InvalidIPException;
