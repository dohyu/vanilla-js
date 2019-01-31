// $(document).ready(fuction() {
//     var $actionBtn = $('#actionBtn'),
//         $iconBtn = $('#actionBtn .fa'),
//         $lockBtn = $('#lockBtn');
    
//         $actionBtn.click(function() {
//             //$iconBtn.toggleClass('fa-times fa-comment');
//             alert('sldkjfldskjf');
//         });
// });

$(function() {

    var $actionBtn = $('#actionBtn'),
        $iconBtn = $('#actionBtn .fa'),
        $lockBtn = $('#lockBtn');

    $actionBtn.click(function() {
        $iconBtn.toggleClass('fa-times fa-comment');
        $lockBtn.toggleClass('showing-button');
    });
});