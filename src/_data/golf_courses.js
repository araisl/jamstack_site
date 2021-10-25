const axios = require("axios");
const regions = require("./regions.json");



module.exports = async function() {
  try {
    const response = await axios.get('http://localhost:3000/api/golf_courses');
    console.log(response);
    return response.data;
  } catch(error) {
    console.log(error);
  }
}

async function getGolfCourses(region) {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/golf_courses?region=${region}`);
    console.log(response);
    return {
      "region": region,
      "golf_courses": response.data
    }
  } catch(error) {
    console.log(error);
  }
}

module.exports = async function() {
  var golfCoursePromises = regions.map(getGolfCourses);
  return Promise.all(golfCoursePromises)
    .then(allGolfCourseObjects => {
      console.log("allGolfCourseObjects:", allGolfCourseObjects);
      return [].concat.apply([], allGolfCourseObjects);
    });
}





// const axios = require("axios");
// const countries = require("./countries.json");
// require('dotenv').config();


// async function getNews(country) {
//   try {
//     const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
//     console.log(response);
//     return {
//       "country": country,
//       "articles": response.data.articles
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// module.exports = async function() {
//   let newsPromises = countries.map(getNews);

//   return Promise.all(newsPromises)
//     .then(allNewsObjects => {
//       console.log("allnewsObjects:", allNewsObjects);
//       return [].concat.apply([], allNewsObjects);
//     });

// }
