
import $ from 'jquery'
import { onloadHtmlSuccess } from '../core/includes'
const duration = 300

function filterbyCity(city) {
    $('[wm-city]').each(function (i, e) {
        const isTarget = $(this).attr('wm-city') === city
            || city === null
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, ()=>{
                $(this).parent().addClass('d-none')
            })
            
        }
    })
}

$.fn.cityButtons = function () {

    const cities = new Set
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
        btn.on('click',e => filterbyCity(city))
        return btn
    })

    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('todas')
    btnAll.on('click',e => filterbyCity(null))
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this
}

onloadHtmlSuccess(function(){
    $('[wm-city-buttons]').cityButtons()
})



