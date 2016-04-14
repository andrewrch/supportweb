update_lists = function(user) {
    $.ajax({
        url: 'http://as-linux/supportrest/api/v0.1/user/assigned/' + user
    }).then(function(data) {
        $.each(data.events, function(i, event) {
            var _html = '<li><b>' + event.id + '</b> ' + event.subject
            _html += '<ul>';
            $.each(event.notes, function(n, note) {
                _html += '<li>' + note.author + '<br />';
                var content = note.content.split('\r');
                $.each(content, function(c, line) {
                    _html += '<p>' + line + '</p>';
                });
                _html += '</li>';
            });
            _html += '</ul></li>';
            $('#event ul:first').append(_html)
        });
    });
};
