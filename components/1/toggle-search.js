/**
 * Created by Mikemaz2005 on 10/11/2015.
 */
$(function(){

    $('.filter').on('click', function(){
        if($('.filter i').hasClass('fa-caret-down')) {
            $('.filter i').removeClass('fa-caret-down').addClass('fa-caret-up');
        } else if($('.filter i').hasClass('fa-caret-up')) {
            $('.filter i').removeClass('fa-caret-up').addClass('fa-caret-down');
        }
        $('.extra-options').toggle('slow', function(){

        });
    });
});