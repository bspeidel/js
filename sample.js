const message = {
  /**
   * Greeting
   * @param {string} name
   * @param {int} birthdate
   * @return {string}
   */
  sayHello: function(name, birthdate) {
    /**
     * Add two numbers
     * @param {int} birthdate
     * @return {int}
     */
    function getAge(birthdate) {
      return 2019 - birthdate;
    }

    const age = getAge(1985);

    return `Hello ${name}. Your are ${age} year old.`;
  },
};

message.sayHello('Ben', 1985);
