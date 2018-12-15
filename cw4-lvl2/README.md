
# Ćwiczenie 4 (2)
## Kawały v3 - ostateczne starcie
1. Usprawnić kod odpytujący API kawałów, korzystając z najnowszej wiedzy
1. Zadbać o sprawdzenie statusu
   - Dla statusów innych niż 200 rzucać wyjątek: `throw new Error('Status not 200');`
1. Przed wyświetleniem kawału sprawdzić, czy jest typu `"programming"`
   - Jeśli nie - rzucać wyjątkiem `throw new Error('Not a programming joke')`
1. Wykorzystać catch i dodać w nim _fallback_ - odpytanie serwisu z kawałami o Chucku Norrisie - http://www.icndb.com/api/
   - Odpytać o kawał z kategorii `nerdy`
   - Wyświetlić `alertem` odpowiednie pole odpowiedzi
1. Uwaga! Użyć jeszcze jednej instrukcji `catch`, na wypadek, gdyby 2. API zawiodło
