
# Ćwiczenie 5
## POST-em na tę geolokalizację
1. Zasymulować wysyłanie formularza:
   - Ciało zapytania:
     ```javascript
     new URLSearchParams({
         geoit: 'JSON',
         locate: '52.21667,21.03333'
     })
     ```
   - 'Content-Type': 'application/x-www-form-urlencoded'
   - Metoda POST
1. Wysłać pod https://geocode.xyz, zapoznać się z odpowiedzią
1. Pamiętać o obsłudze błędów



