// serve para pegar todos elementos que tiverem o toggle de popover , na segunda de tooltip , 

const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'),)

const popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})




const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'),)

const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})