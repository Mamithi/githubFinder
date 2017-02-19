$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;


    //make request to github

    $.ajax({
      url: 'https://api.github.com/users/'+username,
      data:{
        client_id:'7807064b6e410f1e4260',
        client_secret:'8fc435608245e38371e8e9455f570741b0c4e513'
      }
    }).done(function(user){
      console.log(user);
    });

  });
});
