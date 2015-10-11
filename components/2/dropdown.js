/**
 * Created by Mikemaz2005 on 10/11/2015.
 */

$(document).ready(function() {

    /* Drop Down Menu JQuery */
    $('.menu > li').on('mouseover', openSubMenu);           // On mouse over/hover the sub menu will open
    $('.menu > li').on('mouseout', closeSubMenu);           // On mouse out the sub menu will disappear

    function openSubMenu() {                                 //This is the function to open the submenu
        $(this).find('.dropdown').css('visibility', 'visible');
    }

    function closeSubMenu() {                                //This is the function to close the submenu
        $(this).find('.dropdown').css('visibility', 'hidden');
    }
});
