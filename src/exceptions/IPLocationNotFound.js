class IPLocationNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = 'IPLocationNotFound';
    Error.captureStackTrace(this, IPLocationNotFound);
  }
}

export default IPLocationNotFound;
