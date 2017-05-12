$(function() {
$.ajax({
  url: 'https://www.codeschool.com/users/baevans1.json',
  dataType: 'jsonp',
  success: function(response) {
    // handle response
    console.log('response', response.courses.completed)
    addCourses(response.courses.completed);
   }

});

function addCourses(courses) {



  courses.forEach(function(course){
    console.log(course);
    var myCourses = $('<div />', {
      'class': 'course'
    }).appendTo('#badges');

    var classTitles = $('<h3 />', {
      text: course.title
    }).appendTo(myCourses);

    $('<img />', {
      src: course.badge
    }).appendTo(myCourses);
   $('<a />', {
     'class': 'btn btn-primary',
     href: course.url,
     target: '_blank',
     text: 'See Course'

   }).appendTo(myCourses)

  })

}



  // for (i = 0, i < response.length)
  // your code will go here

});
