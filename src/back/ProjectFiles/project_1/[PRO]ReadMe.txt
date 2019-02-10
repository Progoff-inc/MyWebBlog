Выполнение ТОЛЬКО после выполнения инструкций ReadMe

1. Скачать и установить XAMPP
>>> https://www.apachefriends.org/ru/index.html

2. В папке с XAMPP выбрать папку htdocs и создать папку с названием CCPHP

3. В папке проекта выбрать файлы в папке:
>>> src/back
   Перенести их в папку из пункта 2

4. В папке приложения перейти:
>>> src/app/services

5. Для файлов:
>>> CarsService.ts
>>> FeedBackService.ts
>>> MessagerService.ts
>>> UserService.ts

   Закомментировать строку:
>>> baseurl = 'http://client.nomokoiw.beget.tech/back/';

   Расскомментировать строку:
>>> //baseUrl = 'http://localhost:80/CCPHP/';

	!!!ВАЖНО!!!
   При коммите в GitHub откатить изменеия комментариев из пункта 5