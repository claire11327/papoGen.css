/*!
 * # papoGen 0.0.1 - papogen.js
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
//require('../js/state');

// inherit parent class and replace child class
function inherit () {
  for (let type of ['buttons', 'labels']) {
    for (let i = 0; i < $(`.${type}`).length; i++) {
      let curr = $(`.${type}`)[i]
      let curr_class = curr.classList.value
      let child_class = curr_class.replace('horizontal', '')
                                  .replace('vertical', '')
                                  .replace(type, '')
                                  .trim().replace(/  +/g, ' ')
      // add child class
      $(curr.children).addClass(child_class)

      // remove child class from parent
      for (let name of child_class.split(' ')) {
        $(curr).removeClass(name)
      }
    }
  }
}

// bind label and input without using 'for' attr
function bindInputLabel() {
  $('input[type = "checkbox"]').next('label').on('click', function(event){
    event.stopPropagation()
    event.stopImmediatePropagation()
    let curr = $(this).prev('input[type = "checkbox"]')
    curr.prop('checked', (curr.prop('checked'))? false : true)
  })
}

// parent selector for .label
function labelStyle() {
  $('.label:has(.detail)').css('border', 'none')
  $('.label:has(.detail)').css('padding', '0rem 0rem 0rem 0.6rem')
  $('.image.label:has(.detail)').css('padding', '0rem 0rem 0rem 0rem')
}

$(document).ready(() => {
  inherit()
  bindInputLabel()
  labelStyle()
})
