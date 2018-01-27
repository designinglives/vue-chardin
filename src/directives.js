import uniqid from 'uniqid'
import closest from 'closest'

const positions = ['top', 'bottom', 'left', 'right']
let instances = {}

function startOnContainer(el) {
  el.dataset.chardinInstance = uniqid()
  instances[el.dataset.chardinInstance] = el
  window.jQuery(el).chardinJs('start')
}

function stopOnContainer(el) {
  delete instances[el.dataset.chardinInstance]
  window.jQuery(el).chardinJs('stop')
}

function setIntro(el, intro, position) {
  el.dataset.intro = intro
  el.dataset.position = position
}

function toggle(el) {
  el.addEventListener('click', () => {
    const pEl = closest(el, '*[data-chardin-instance]')
    if (pEl) {
      window.jQuery(pEl).chardinJs('toggle')
    } else {
      throw Error('Parent v-chardin element not found')
    }
  })
}

export const chardin = {
  bind: function(el, {arg, value}) {
    if (!arg) {
      startOnContainer(el || document.querySelector('body'))
    } else if (positions.includes(arg)) {
      setIntro(el, value, arg)
    } else if(arg === 'toggle') {
      toggle(el)
    }
  },
  unbind: function(el, {arg, value}) {
    if (!arg) {
      stopOnContainer(el || document.querySelector('body'))
    }
  }
}
