const axios = require("axios");



module.exports = async function() {
  try {
    console.log('I get in the right js file"');
    const response = await axios.get('http://localhost:3000/api/golf_courses');
    console.log(response);
    return response.data;
  } catch(error) {
    console.log(error);
  }
}
