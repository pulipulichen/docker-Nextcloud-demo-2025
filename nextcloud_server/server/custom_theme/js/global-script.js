document.addEventListener("DOMContentLoaded", function () {
  function checkAndClick() {
    const folderNavItem = document.querySelector(
        '.app-navigation-entry-wrapper.files-navigation__item.app-navigation-entry--collapsible[data-cy-files-navigation-item="folders"]'
    );

    if (folderNavItem) {
        const collapseButton = folderNavItem.querySelector("button.icon-collapse");
        if (collapseButton) {
            collapseButton.click(); // 觸發點擊事件
            clearInterval(intervalId); // 停止偵測
        }
    }
  }

  let intervalId
  // 每秒偵測一次，直到找到元素並點擊
  setTimeout(() => {
     intervalId = setInterval(checkAndClick, 1000);
  }, 3000)
  
});
