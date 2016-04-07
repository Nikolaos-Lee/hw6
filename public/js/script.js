
// DOM Ready =============================================================
$(document).ready(function() {

  // Create User
  $("#usernew").on('click', '.btn-post', createUser);
  // Read User
  $("#userinfo").on('click', '.read', readUser);
  // Delete User
  $("#userinfo").on('click', '.update', updateUser);
  // Update User Submit
  $("#userupdate").on('click', ".btn-update", submitUser);
  // Delete User
  $("#userinfo").on('click', '.delete', deleteUser);
});

// Create User
function createUser(event) {
    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#usernew input').each(function(index, val) {
      //check all input
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {
      var newUser = {
        'title': $('input#title').val(),
        'reward':$('input#reward').val(),
        'content': $('textarea#content').val()
      };
      // Use AJAX to post the object to our adduser service
      $.ajax({
        type: 'POST',
        data: newUser,
        url: '/person',
        dataType: 'JSON'
      }).done(function( res ) {
        var html = new EJS({url: 'views/persons.ejs'}).render(res);
        $("#userinfo").html(html);
        $("input").val('');
      });
    }
    else {
      // If errorCount is more than 0, error out
      alert('Please fill in all fields');
      return false;
    }
};

// Read User
function readUser(event) {
    event.preventDefault();
    // Use AJAX to post the object to our getuser service
    $.ajax({
      type: 'GET',
      url: '/person/' + $(this).attr('rel')
    }).done(function( res ) {
      var html = new EJS({url: 'views/read.ejs'}).render(res);
      $("#userupdate").html(html);
    });
};


// DOM Ready =============================================================
$(document).ready(function() {

  // Create User
  $("#usernew").on('click', '.btn-post', createUser);
  // Read User
  $("#userinfo").on('click', '.read', readUser);
  // Update User
  $("#userinfo").on('click', '.update', updateUser);
  // Update User Submit
  $("#userupdate").on('click', ".btn-update", submitUser);
  // Delete User
  $("#userinfo").on('click', '.delete', deleteUser);

});

// Create User
function createUser(event) {
    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#usernew input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {
      var newUser = {
        'title': $('input#title').val(),
        'content': $('textarea#content').val()
      };
      // Use AJAX to post the object to our adduser service
      $.ajax({
        type: 'POST',
        data: newUser,
        url: '/person',
        dataType: 'JSON'
      }).done(function( res ) {
        var html = new EJS({url: 'views/persons.ejs'}).render(res);
        $("#userinfo").html(html);
        $("input").val('');
      });
    }
    else {
      // If errorCount is more than 0, error out
      alert('Please fill in all fields');
      return false;
    }
};

// Read User
function readUser(event) {
    event.preventDefault();
    // Use AJAX to post the object to our getuser service
    $.ajax({
      type: 'GET',
      url: '/person/' + $(this).attr('rel')
    }).done(function( res ) {
      var html = new EJS({url: 'views/read.ejs'}).render(res);
      $("#userupdate").html(html);
    });
};



// Delete User
