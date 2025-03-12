# docker-Nextcloud-demo-2025
An example to self-host Nextcloud via docker-compose.yml

## 偵測檔案變動

/nextcloud_server/docker-entrypoint-hooks.d/before-starting/89.watch-files.sh

## 開啟預覽檔案

- 指定檔案並打開：http://localhost:8080/apps/files/files/0?path=/database/README.md&openfile=true
- 指定檔案不打開：http://localhost:8080/apps/files/files/0?path=/database/README.md
- 指定目錄：http://localhost:8080/apps/files/files/0?path=/database/

## 預設登入帳號密碼

admin / password

可以修改 `.env` 變更

## 全文檢索設定

http://elastic:changeme@elasticsearch:9200/

----

## 開發

### 過濾不會改到的檔案

````
**/l10n/,**/js/,*.json,**/dist/,*.sh,.gitignore,.env,LICENSE,.xml,**/dav/,**/test,**/composer,**/tests/,*.mjs,*.mjs.map,.js.map
````

## 前端判斷是不是訪客

````Vue
isGuest(): boolean {
	return !OC.currentUser || OC.currentUser.includes('guest')
},
````

````
$userId = $this->userSession->getUser()->getUID();
````