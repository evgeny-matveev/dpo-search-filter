let $tags = document.getElementById('tags')
let $items = document.getElementById('items')

$tags
  .querySelectorAll('li')
  .forEach(function addClickHandler($li) {
    let tagType = $li.dataset.tagType
    $li.onclick = function handleClick() {
      filterItemsBy(tagType)
    }
  })

function filterItemsBy(filter) {
  $items
        .querySelectorAll('article')
        .forEach(function compareItemTypeWithFilter($item) {
          let itemType = $item.dataset.tagType
          if (itemType === filter) {
            $item.style.display = 'block'
          } else {
            $item.style.display = 'none'
          }
        })
}
