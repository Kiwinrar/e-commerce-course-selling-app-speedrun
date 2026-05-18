class databaseError extends Error {
  constructor(statusCode) {
    super((this.message = "Error in validating inputs to the database"));
    this.statusCode = statusCode;
  }
}

class notFoundError extends Error {
  constructor(statusCode, location) {
    super(`the ${location} is incorrect!! Check again`)
    this.statusCode = statusCode;
  }
}
export { databaseError, notFoundError };
