var to_do_lists = [
  {
    title: "weekend",
    is_completed: true,
    user_id: 7,
    user_name: "Michael",
    user_surname: "Rubinshtein",
    todo_quantity: 3
  },
  {
    title: "museum",
    is_completed: false,
    user_id: 5,
    user_name: "Christopher",
    user_surname: "Waters",
    todo_quantity: 2
  },
  {
    title: "home",
    is_completed: true,
    user_id: 3,
    user_name: "Walt ",
    user_surname: "Disney",
    todo_quantity: 4
  },
  {
    title: "garden#",
    is_completed: false,
    user_id: 20,
    user_name: "William",
    user_surname: "Stevenson",
    todo_quantity: 5
  },
  {
    title: "birthday",
    is_completed: true,
    user_id: 14,
    user_name: "Valeria",
    user_surname: "Krasnikova",
    todo_quantity: 10
  }
];
function completedAffairs(arr){
  return arr.filter(function(item) {
    return item.is_completed;
  });
}

function containsSharp(arr){
  return arr.filter(function(item) {
    return item.title.indexOf("#") != -1;
  });
}

function quantityOfAffairs(arr){
  return arr.reduce(function(sum, item) {
    return sum += item.todo_quantity;
  }, 0);
}

function divideUserId(arr){
  return arr.filter(function(item) {
    return item.user_id %  10 == 0;
  });
}

function createFullName(arr){
  return arr.map(function(item) {
    return item.full_name = item.user_name + " " + item.user_surname;
  });
}

function notCompletedAffairs(arr){
  return arr.filter(function(item) {
    return !item.is_completed;
  });
}

function sortByCompleted(arr){
  return completedAffairs(arr).concat(notCompletedAffairs(arr));
}

//console.log(to_do_lists);
//console.log(sortByCompleted(to_do_lists));
