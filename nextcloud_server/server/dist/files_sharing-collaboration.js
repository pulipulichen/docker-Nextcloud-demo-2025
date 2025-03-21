/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/*!*****************************************************************!*\
  !*** ./apps/files_sharing/src/collaborationresourceshandler.js ***!
  \*****************************************************************/
/**
 * SPDX-FileCopyrightText: 2016 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// eslint-disable-next-line camelcase
__webpack_require__.nc = btoa(OC.requestToken);
window.OCP.Collaboration.registerType('file', {
  action: () => {
    return new Promise((resolve, reject) => {
      OC.dialogs.filepicker(t('files_sharing', 'Link to a file'), function (f) {
        const client = OC.Files.getClient();
        client.getFileInfo(f).then((status, fileInfo) => {
          resolve(fileInfo.id);
        }).fail(() => {
          reject(new Error('Cannot get fileinfo'));
        });
      }, false, null, false, OC.dialogs.FILEPICKER_TYPE_CHOOSE, '', {
        allowDirectoryChooser: true
      });
    });
  },
  typeString: t('files_sharing', 'Link to a file'),
  typeIconClass: 'icon-files-dark'
});
/******/ })()
;
//# sourceMappingURL=files_sharing-collaboration.js.map?v=b6f1f46acaf19478a164