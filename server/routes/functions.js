
export const count_words = (words_str) => {
  var words_arr = words_str.split(' ');

  // let countedWords = words_arr.reduce( function (allWords, word) {
  //     if (word in allWords) {
  //         allWords[word]++;
  //     }
  //     else {
  //         allWords[word] = 1;
  //     }
  //     return allWords;
  // }, {});

  function getWordCount(array) {  
      let map = {};
      for (let i = 0; i < array.length; i++) { 
             let item = array[i];
              map[item] = (map[item] + 1) || 1;
          }  
      return map;
  };
  let countedWords =  getWordCount(words_arr);
  return countedWords;
}

export function generateDates(numberOfDays) {
    const result = []
    const today = new Date();
  
    for (let i = 0; i < numberOfDays; i++) {
      let date = new Date(today);
      
      date.setDate(today.getDate() - i);
      let dd = date.getDate();
      let mm = date.getMonth()+1; // int between 0 and 11
      let yyyy = date.getFullYear();
  
      // add 0 if 1 digit. ( 5-> 05)
      if (dd < 10) {
        dd = "0" + dd
      }
      if (mm < 10) {
        mm = "0" + mm
      }

      date = yyyy + "-" + mm + "-" + dd
      result.unshift(date)
    }

    return result
  }
