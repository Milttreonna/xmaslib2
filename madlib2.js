$('document').ready(function() {
    $('#story').hide();
    $('#down').hide();
    $('button').on('click', function() {
        var inputArray = $('form').find('input');
        for (var c = 0; c < inputArray.length; c++) {
            var new_class = "." + inputArray[c].name;
            var new_text = inputArray[c].value;
            $(new_class).text(new_text);
        }
        // $("#inputs").hide(2000);
        $('#down').show(2000);
        $('#story').show(2000);
    });
});
