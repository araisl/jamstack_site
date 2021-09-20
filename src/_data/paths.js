const axios = require("axios");

module.exports = async function() {
  try {
    const response = await axios.get('http://localhost:3000/api/paths');
    console.log(response);
    return response.data;
  } catch(error) {
    console.log(error);
  }
}