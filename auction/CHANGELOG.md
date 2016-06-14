# 0.0.5 2-24
add user login signup etc. back-end ajax support
# 0.0.4 2-23
add ueditor back-end support
# 0.0.3 2-22
add source-map, easy to debug ts
# 0.0.2 2-22
update to angular2@2.0.0-beta.7 
# 0.0.1 2-21
1. fix the angular route when as static resource
    * change front-dev content path to `/www` (original `/www/static`), which should use `http://localhost:3000/static/index.html` to debug front 
    * change index.html base to `/static/` (original `/`)
2. add back-end single page application support (redirect url matching /^page\// to www/static/index.html)
3. change front-end to typescript which work better with ng2
