function expendFolderTree() {
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
}

function pdfViewerJumpToPage() {
  const urlParams = new URLSearchParams(new URL(window.location.origin + src).search);
  const pdfPage = urlParams.get('pdf_page');
  
  if (pdfPage) {
      const iframe = document.querySelector('iframe[src^="/apps/files_pdfviewer/?file="]');
      const pageElement = document.querySelector(`[data-page-number="${pdfPage}"]`);
      if (iframe && pageElement) {
        pageElement.scrollIntoView();
      }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  expendFolderTree()
  pdfViewerJumpToPage()
});
