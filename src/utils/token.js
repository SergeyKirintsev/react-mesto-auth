class Token {
  static key = 'jwt';

  static saveToken(token) {
    localStorage.setItem(this.key, token);
  }

  static removeToken() {
    localStorage.removeItem(this.key);
  }

  static getToken() {
    localStorage.getItem(this.key);
  }
}

export default Token;
