$('#submit').on('click', function(event){
  event.preventDefault();

  var newcharacter = {
    name: $('#name').val(),
    phone: $('#phone').val(),
    email: $('#email').val(),
    uniqueId: $('#uid').val()
  };

  $.post('/api/tables', newcharacter).done(function(data){
    console.log(data);
    alert('Adding new reservation...');
  });
});
