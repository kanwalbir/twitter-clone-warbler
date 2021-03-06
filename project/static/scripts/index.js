$(function() {
  $('#messages').on('click', 'button', function(event) {
    const $clickedBtn = $(event.target);
    let ids = $clickedBtn.closest('li').data();
    let user_id = ids.userId;
    let message_id = ids.messageId;
    // debugger;
    if ($clickedBtn.text() === 'Unlike') {
      $.ajax({
        url: `http://localhost:5000/users/${user_id}/messages/${message_id}/like`,
        method: 'DELETE'
      }).then(function(res) {
        $clickedBtn.text('Like');
      });
    } else {
      $.post(
        `http://localhost:5000/users/${user_id}/messages/${message_id}/like`
      ).then(function(res) {
        $clickedBtn.text('Unlike');
      });
    }
  });
});
