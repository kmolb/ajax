# Ćwiczenie 1 (2)
## Klikanie w kwadraty
1. Napisać funkcję, losującą liczby
   - x: `[0, window.innerWidth-100)`
   - y: `[0, window.innerHeight-100)`
   - Użyć `parseInt` oraz `Math.random()`
   - Pamiętać, że `Math.random()`: [0, 1)
2. W funkcji stworzyć diva: `const d = document.createElement('div')`
3. Przypisać styl: ```d.style.cssText = `position: absolute; left: ${x}px; top: ${y}px; width: 100px; height: 100px; background: yellow`;```
1. Dać callback na kliknięcie w diva, wykorzystać `d.remove()`
1. Użyć `setTimeout` i w przypadku braku kliknięcia, niszczyć diva automatycznie, po 3 sekundach
1. "Podłączyć": `document.body.appendChild(d);`
1. Użyć napisanej funkcji wewnątrz `setInterval`, wołać co 2 sekundy
1. W których miejscach działa Event Loop?